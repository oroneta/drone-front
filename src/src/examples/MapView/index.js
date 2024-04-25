import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react'
import { MapContainer, TileLayer, Popup, Marker, Polyline } from 'react-leaflet';

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

const blueOptions = { color: '#1E90FF' };
const limeOptions = { color: 'lime'};
const yellowOptions = { color: '#FFFF00' };

export const MapView = ({href, height, width, borderRadius, enableTool, zoom}) => {
    
    const { infoDrones, statusRouteHarbor1, statusRouteHarbor2, statusRouteUPV, position } = useContext( UserContext );
    // console.log(infoDrones);
    return (
        (enableTool) ?
        (<MapContainer center={position} zoom={zoom} style={{height, width, borderRadius}}>
            <TileLayer
                url={href}
            />
            { statusRouteHarbor1 && <Polyline pathOptions={blueOptions} positions={harborRoute} />}
            {  statusRouteUPV && <Polyline pathOptions={yellowOptions} positions={upvRoute} /> }
            { statusRouteHarbor2 && <Polyline pathOptions={limeOptions} positions={harborRoute2} />} 
            {/* { infoDrones.map( (drone) => { return <Marker key={drone.id} position={drone.gps}></Marker>})} */}
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
