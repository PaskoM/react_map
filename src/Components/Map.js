import React from "React";
import ReactMapGL from "react-map-gl";

const viewport = {
    latitute: 51.5049375,
    longitude: -0.0964509,
    zoom: 13
}

const Map = ({ classes }) => {
    return (<div>
        <ReactMapGL
            width="100vw"
            height="100vw"
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1IjoibW9raXBhIiwiYSI6ImNrZmJuN3N3YTE3bGoycXFncnFhNjlwYzUifQ.wil8qLji6sWKhdUSNGVnKg"
            {...viewport}
        
        >

        </ReactMapGL>
    </div>);
}

export default Map; 
