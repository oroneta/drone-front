// import { useEffect } from "react"
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext"


export const UserProvider = ( { children } ) => {

    // console.log('Se redibuja')
    const [infoDrone, setInfoDrone] = useState({
        status: false,
        speed: 0,
        gps: [39.428, -0.3183],
        battery: 0
    });
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

    return (
        <UserContext.Provider value={ { infoDrone, infoTotalDrones, infoDrones } }>
            { children }
        </UserContext.Provider>
    )

}