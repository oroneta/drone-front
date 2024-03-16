import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const position = [39.4810,-0.3423]

export const MapView = ({height, width, borderRadius, enableTool, zoom}) => {
    return (
        (enableTool) ?
        (<MapContainer center={position} zoom={zoom} style={{height, width, borderRadius}}>
            <TileLayer
                url="https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps"
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
                url="https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps"
            />
        </MapContainer>)
        )
}
