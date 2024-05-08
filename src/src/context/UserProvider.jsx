// import { useEffect } from "react"
import React  from 'react';
import { useEffect, useState, useRef } from "react";
import { UserContext } from "./UserContext"
import Swal from 'sweetalert2';

let urlServer = "http://localhost:60001";
export const UserProvider = ( { children } ) => {
    // console.log('Se redibuja')
    const [infoDrone, setInfoDrone] = useState({
        "ESP00001-123-0033": {
            dic: "ESP00001-123-0033",
            key: "0",
            description: "Drone simulador",
            status: false,
            speed: 0,
            alarmActive: 0,
            url : '',
            gps: [39.428, -0.3183],
            battery: 0,
            ref: useRef(null)
        },
        "ESP00002-123-0033": {
            dic: "ESP00002-123-0033",
            key: "1",
            description: "Drone fisico",
            status: false,
            speed: 0,
            alarmActive: 0,
            url : '',
            gps: [39.428, -0.4183],
            battery: 0,
            ref: useRef(null)
        },
        "ESP00003-123-0033": {
            dic: "ESP00003-123-0033",
            key: "2",
            description: "Drone offline",
            status: false,
            speed: 0,
            alarmActive: 0,
            url : '',
            gps: [39.328, -0.3183],
            battery: 0,
            ref: useRef(null)
        }
    });
    const harborRoute = [
        [39.4400359, -0.3222084],
        [39.4336000, -0.3123000],
        [39.4299000, -0.3152000],
        [39.4359000, -0.3301000],
        [39.4400359, -0.3222084],
    ];
    
    const upvRoute = [
        [39.4821000, -0.3404000],
        [39.4814400, -0.3366300],
        [39.4793100, -0.3377900],
        [39.4802300, -0.3414900],
        [39.4821000, -0.3404000],
    ];
    
    const harborRoute2 = [
        [39.4470673, -0.3086189],
        [39.4469, -0.3048],
        [39.4366000, -0.3056000],
        [39.4419000, -0.3117000],
        [39.4470673, -0.3086189],
    ]    
    const [statusRouteUPV, setStatusRouteUPV] = useState(false);
    const [statusRouteHarbor1, setStatusRouteHarbor1] = useState(false);
    const [statusRouteHarbor2, setStatusRouteHarbor2] = useState(false);
    // const [position, setPosition] = useState([39.4371,-0.4177])
    const [zoom, setZoom] = useState(15);
    const mapRef = useRef(null);

    const styleAlert = {
        background: '#EAEAEA',
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            },
    }
    const errorRouteInProgress = () => {
        Swal.fire({
            title: 'ERROR: Route in progress',
            text: "There's a route on going for ESP00001-123-0033",
            icon: 'error',
            styleAlert,
            confirmButtonText: "I understand",
        });
    }

    const warningSameRoute = () => {
        Swal.fire({
            title: 'Warning',
            text: 'You have selected the same route that the drone is currently in progress',
            icon: 'warning',
            styleAlert,
            confirmButtonText: "I understand",
        });
    }

    const alertConfirmRoute = ( setStatus, isUPV, coords ) => {
        Swal.fire({
            title: 'Do you want to start the route?',
            text: 'The route will be done by ESP00001-123-0033',
            icon: 'question',
            styleAlert,
            showDenyButton: true,
            confirmButtonText: 'Go on',
            denyButtonText: 'Do not start the route',
            
        }).then(( result ) => {
            if (result.isConfirmed) {
                if (isUPV) {
                    // position = [39.48084, -0.33843];
                    setZoom(17);
                    alert('salga y vuelva a entrar a la sección de mapa');
                }
                setStatus(true);
                fetch(urlServer+"/routes/0",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 0',
                    },
                    method: "POST",
                    body: JSON.stringify({
                        type: "waypoint",
                        coord: coords
                    }),
                })
                .then((res) => console.log(res))
                .catch((res) => console.error(res))
            }
            if (result.isDenied) {
                return;
            }
        })
    }

    const handleChangeRouteUPV = () => {
        // check if there's another route in progress
        if (statusRouteHarbor1 || statusRouteHarbor2) {
            errorRouteInProgress();
            return;
        }
        // check if you're selecting the same route
        if (statusRouteUPV) {
            warningSameRoute();
            return;
        }
        alertConfirmRoute(setStatusRouteUPV, true, upvRoute);
        console.log("se ha comenzado la ruta :D");
    } 

    const handleChangeRouteHarbor1 = () => {
        if (statusRouteHarbor2 || statusRouteUPV) {
            errorRouteInProgress();
            return;
        };
        if (statusRouteHarbor1) {
            warningSameRoute();
            return;
        }
        alertConfirmRoute(setStatusRouteHarbor1, false, harborRoute);
    }

    const handleChangeRouteHarbor2 = () => {
        
        if (statusRouteHarbor1 || statusRouteUPV) {
            errorRouteInProgress();
            return;
        }
        if (statusRouteHarbor2) {
            warningSameRoute();
            return;
        }
        alertConfirmRoute(setStatusRouteHarbor2, false, harborRoute2);
        
    }

    // Hace fetch a la API 
    useEffect(() => {
        const fetchDataPeriodically = () => {
            if (localStorage.getItem("oroneta-user") !== "true") return;
            let drones = Object.keys(infoDrone).join(';');
            let keys = Object.keys(infoDrone).map( key => infoDrone[key].key).join(';');
            fetch(`${urlServer}/metadata/all/${drones}`, {
            // mode: "no-cors",
            headers: {Authorization: `Bearer ${keys}`},
            })
            .then( response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then( data => {
                console.log("API response data", data );
                if (data.status === "OK") {
                    let drones = Object.keys(data.data);
                    // If every drone in infoDrone is not in data, then set status to false
                    for (let drone in infoDrone) {
                        infoDrone[drone].url = '';
                        if (!drones.includes(drone)) {
                            infoDrone[drone].status = false;
                            infoDrone[drone].speed = 0;
                            infoDrone[drone].battery = 0;
                        } else {
                            infoDrone[drone].status = data.data[drone].status;
                            infoDrone[drone].speed = data.data[drone].speed;
                            infoDrone[drone].gps = data.data[drone].gps;
                            infoDrone[drone].battery = data.data[drone].battery;
                            infoDrone[drone].url = urlServer + data.data[drone].image_path;
                        }
                    }
                    // Re-render the component
                    setInfoDrone({...infoDrone});
                    console.log(infoDrone);
                }
            })
            .catch((error) => console.log('ERROR', error))
        };
        fetchDataPeriodically();
        const intervalId = setInterval(fetchDataPeriodically, 5000);

        setInterval(function() {
            if (localStorage.getItem("oroneta-user") == "true") {
    
                // Verificar si hay una alarma activa
                Object.keys(infoDrone).forEach(el => {
                    fetch(`${urlServer}/alarm/${infoDrone[el].dic}`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${infoDrone[el].key}`
                        }
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Error al obtener la alarma");
                        }
                        return response.json()
                    })
                    .then(data => {
                        if (data.data[infoDrone[el].dic].status === 1 && infoDrone[el].alarmActive === 0) {
                            infoDrone[el].alarmActive = 1;
                            console.log("Drone ", infoDrone[el], data);
                            window.AlarmImage.show(infoDrone[el].dic, data.data[infoDrone[el].dic].image_path, false);
                        }
    
                        if (data.data[infoDrone[el].dic].status === 0 && infoDrone[el].alarmActive === 1) {
                            infoDrone[el].alarmActive = 0;

                            const marker = infoDrones[el].ref.current;
                            if (marker) {
                                marker.closePopup();
                            }
                            window.AlarmImageObj.url = '';
                            window.AlarmImage.hide();
                        }
                    })
                    .catch(error => {
                        console.log("Error al obtener la alarma", error);
                    });
                });
            }
        }, 1000); // Verificar cada segundo

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    
    const infoDrones = infoDrone;

    const infoTotalDrones = {
        totalDrones: 3,
        activeDrones: 2,
        activeChargerStation: 20,
        disableChargerStation: 3,
        totalFlights: 20,
    }

    const deactivateAlarm = (dic) => {
        // Delete fetch to deactivate alarm /alarm/:dic
        fetch(`${urlServer}/alarm/${dic}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${infoDrone[dic].key}`
            }
        });
    }

    // const updatePosition = ( gps ) => {
    //     position = gps;
    //     // And update position in dom
    // }


    // the export of the variables, functions
    return (
        <UserContext.Provider value={ { infoDrone, infoTotalDrones, infoDrones, statusRouteHarbor1, mapRef, deactivateAlarm, statusRouteHarbor2, statusRouteUPV, handleChangeRouteHarbor1, handleChangeRouteHarbor2, handleChangeRouteUPV, zoom, harborRoute, harborRoute2, upvRoute } }>
            { children }
        </UserContext.Provider>
    )

}