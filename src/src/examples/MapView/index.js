import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react'
import { MapContainer, TileLayer, Popup, Marker, Rectangle } from 'react-leaflet';

const position = [39.4371,-0.3177];

export const MapView = ({href, height, width, borderRadius, enableTool, zoom}) => {
    
    const { infoDrones } = useContext( UserContext );
    // console.log(infoDrones);
    return (
        (enableTool) ?
        (<MapContainer center={position} zoom={zoom} style={{height, width, borderRadius}}>
            <TileLayer
                url={href}
            />
            { infoDrones.map( (drone) => { return <Marker key={drone.id} position={drone.gps}></Marker>})}
            {/* <Marker position={ [39.4371, -0.3177] }>
            </Marker> */}
        </MapContainer>)
        :
        (<MapContainer 
            center={position} 
            zoom={zoom} 
            style={{height, width, borderRadius}}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            boxZoom={false}
        >
            <TileLayer
                url={href}
            />
        </MapContainer>)
        )
}
