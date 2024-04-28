// import { useEffect } from "react"
import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext"
<<<<<<< HEAD
import Swal from 'sweetalert2';
=======

>>>>>>> master

export const UserProvider = ( { children } ) => {
    // console.log('Se redibuja')
    const [infoDrone, setInfoDrone] = useState({
        status: false,
        speed: 0,
        gps: [39.428, -0.3183],
        battery: 0
    });
<<<<<<< HEAD

    const [statusRouteUPV, setStatusRouteUPV] = useState(false);
    const [statusRouteHarbor1, setStatusRouteHarbor1] = useState(false);
    const [statusRouteHarbor2, setStatusRouteHarbor2] = useState(false);
    const [position, setPosition] = useState([39.4371,-0.3177])
    const [zoom, setZoom] = useState(15);

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
            title: 'ERROR: -3',
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

    const alertConfirmRoute = ( setStatus, isUPV ) => {
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
                    setPosition([39.48084, -0.33843]);
                    setZoom(17);
                    alert('salga y vuelva a entrar a la sección de mapa');
                }
                setStatus(true);
                // do the post fetch here
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
        alertConfirmRoute(setStatusRouteUPV, true);
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
        alertConfirmRoute(setStatusRouteHarbor1, false);
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
        alertConfirmRoute(setStatusRouteHarbor2, false);
        
    }

=======
>>>>>>> master
    // Hace fetch a la API 
    useEffect(() => {
        const fetchDataPeriodically = () => {
            fetch('http://localhost:60001/metadata/all/0', {
            // mode: "no-cors",
            headers: {Authorization: 'Bearer 0'}
            })
            .then( response => response.json())
            .then( data => {
                const aux = data;
                const allDrones = aux.data;
                // console.log(allDrones[0])
                setInfoDrone(allDrones[0]);
                console.log( "Los datos recibidos son ",infoDrone )
<<<<<<< HEAD
=======
                
>>>>>>> master
            })
            .catch((error) => console.error('ERROR', error))
        };
        fetchDataPeriodically();
        const intervalId = setInterval(fetchDataPeriodically, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [])
    
    const infoDrones = [
        {
            id: 0,
            gps: infoDrone.gps,
        },
        {
            id: 1,
            gps: [39.428, -0.3183],
        }
    ]

    const infoTotalDrones = {
        totalDrones: 3,
        activeDrones: 2,
        activeChargerStation: 20,
        disableChargerStation: 3,
        totalFlights: 20,
    }

<<<<<<< HEAD

    // the export of the variables, functions
    return (
        <UserContext.Provider value={ { infoDrone, infoTotalDrones, infoDrones, statusRouteHarbor1, statusRouteHarbor2, statusRouteUPV, handleChangeRouteHarbor1, handleChangeRouteHarbor2, handleChangeRouteUPV, position, zoom } }>
=======
    return (
        <UserContext.Provider value={ { infoDrone, infoTotalDrones, infoDrones } }>
>>>>>>> master
            { children }
        </UserContext.Provider>
    )

}