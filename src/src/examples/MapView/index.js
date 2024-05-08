import { UserContext } from 'context/UserContext';
import React, { useContext, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, Marker, Polyline } from 'react-leaflet';
// Redirect


const droneMarker = new L.icon({
    iconUrl: require("./icon/drone-svgrepo-com.svg"),
    iconSize: [35, 35],
    // iconAnchor: [17, 35],
    // popupAnchor: [0, -35],
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null

})

const blueOptions = { color: '#1E90FF' };
const limeOptions = { color: 'lime'};
const yellowOptions = { color: '#FFFF00' };

let position = [39.4371,-0.4177];

export const MapView = ({href, height, width, borderRadius, enableTool }) => {
    
    const { infoDrones, statusRouteHarbor1, statusRouteHarbor2, statusRouteUPV, zoom, harborRoute, harborRoute2, upvRoute, mapRef, deactivateAlarm } = useContext( UserContext );


    // Update position with infoDrones[dic].gps
    const map = mapRef.current
    

    if (window.AlarmImageObj.status) {
        if (infoDrones[window.AlarmImageObj.dic]) {
            position = (infoDrones[window.AlarmImageObj.dic].gps);
            if (map) {
                map.flyTo(position, 18);
                const marker = infoDrones[window.AlarmImageObj.dic].ref.current;
                if (marker) {
                    marker.openPopup();
                }
            }
            console.log("Changed position to: ", infoDrones[window.AlarmImageObj.dic].gps);

            window.AlarmImageObj.status = false;
        }
    }
    
    
    // Update position to first active drone
    if (position[0] == 39.4371 && position[1] == -0.4177) {
        for (const key in infoDrones) {
            if (infoDrones[key].status) {
                position = (infoDrones[key].gps);
                if (map) {
                    map.flyTo(position, 18);
                }
                console.log("Changed position to active drone : ", infoDrones[key].dic, position);
                break;
            }
        }
    }

    console.log("MapView actual position: ", position);
    // console.log(infoDrones);
    return (
        (enableTool) ?
        (<MapContainer center={position} zoom={zoom} style={{height, width, borderRadius}} 
            whenCreated={(map) => {
                mapRef.current = map
            }}
        >
            <TileLayer
                url={href}
            />
            { statusRouteHarbor1 && <Polyline pathOptions={blueOptions} positions={harborRoute} />}
            {  statusRouteUPV && <Polyline pathOptions={yellowOptions} positions={upvRoute} /> }
            { statusRouteHarbor2 && <Polyline pathOptions={limeOptions} positions={harborRoute2} />} 
            { Object.keys(infoDrones).map( (key) => { console.log(infoDrones[key]); if (infoDrones[key].status == true) return <Marker ref={infoDrones[key].ref} key={infoDrones[key].dic} position={infoDrones[key].gps} icon={droneMarker}>
                <Popup id={"ID"+infoDrones[key].dic}>
                    <a href={window.AlarmImageObj.url} target="_blank" sx={{color: "white"}}>
                        <img src={window.AlarmImageObj.url} alt="No Alarm Image" style={{width: "300px"}}/>                 
                    </a>
                    {/* Show if there is an alarm in this drone */}
                    <div>
                        <a onClick={() => {deactivateAlarm(key)}}className="btn-alarm">Deactivate Alarm</a>
                    </div>
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
