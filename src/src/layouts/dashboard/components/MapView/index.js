import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const position = [39.4810,-0.3423]

export const MapView = () => {
    return (
        <MapContainer center={position} zoom={16} style={{height: "100vh"}}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}
