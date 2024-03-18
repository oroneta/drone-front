import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const position = [39.4810,-0.3423]

export const MapView = ({href, height, width, borderRadius, enableTool, zoom}) => {
    return (
        (enableTool) ?
        (<MapContainer center={position} zoom={zoom} style={{height, width, borderRadius}}>
            <TileLayer
                url={href}
            />
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
