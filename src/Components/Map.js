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
            mapboxApiAccessToken=""
            {...viewport}
        
        >

        </ReactMapGL>
    </div>);
}

export default Map; 
