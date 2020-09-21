import React from 'react';
import './App.css';
import GoogleMapReact from "google-map-react";


function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAvX2jNZU - jywa6N7yUHTsP8W3N30orbOM" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default App;
