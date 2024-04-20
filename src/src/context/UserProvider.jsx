// import { useEffect } from "react"
import { UserContext } from "./UserContext"


export const UserProvider = ( { children } ) => {
    const infoDrone = {
        battery: 25,
        gps: [39.4325, -0.3121],
        status: false,
        speed: 19,
    }

    
    // Hace fetch a la API
    const url = 'https://localhost:8081';
    const token = 0; // HARDCODED xDDDDDDDDDDDD
    fetch( url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( response => response.JSON())
    .then( data => console.log( data ))
    .catch((error) => console.error('ERROR', error))
    

    const infoDrones = [
        {
            id: 0,
            gps: [39.4325, -0.3121],
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