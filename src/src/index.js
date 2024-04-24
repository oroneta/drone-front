
import React from "react";
import { createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Oroneta Context Provider
import { VisionUIControllerProvider } from "context";
// import { MapView } from "layouts/dashboard/components/MapView";
// import { MapContainer, TileLayer } from "react-leaflet";
import { UserProvider } from "context/UserProvider";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(<BrowserRouter>
    <UserProvider>
    <VisionUIControllerProvider>
      <App />
    </VisionUIControllerProvider>
    </UserProvider>
</BrowserRouter>)

