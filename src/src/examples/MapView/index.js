import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, Marker, Polyline } from 'react-leaflet';


const droneMarker = new L.icon({
    iconUrl: require("./icon/droneIconNoBg.jpg"),
    iconSize: [35, 35],
})

const blueOptions = { color: '#1E90FF' };
const limeOptions = { color: 'lime'};
const yellowOptions = { color: '#FFFF00' };

export const MapView = ({href, height, width, borderRadius, enableTool }) => {
    
    const { infoDrones, statusRouteHarbor1, statusRouteHarbor2, statusRouteUPV, position, zoom, harborRoute, harborRoute2, upvRoute } = useContext( UserContext );
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
            { infoDrones.map( (drone) => { return <Marker key={drone.id} position={drone.gps} icon={droneMarker}>
                <Popup>
                    Información del dron
                </Popup>
            </Marker>})}
            {/* <Marker position={[39.4371, -0.3177]} >
            </Marker> */}
        </MapContainer>)
        :
        (<MapContainer 
            center={position} 
            zoom={9} 
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
