import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

class Map extends React.Component {

  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: 51.5049375, lng: -0.0964509 }}
        >
          <Marker position={{ lat: 51.5049375, lng: -0.0964509 }} />
        </GoogleMap>
      ))
    );
    return (
      <MapWithAMarker
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAvX2jNZU-jywa6N7yUHTsP8W3N30orbOM&v=3.exp&libraries=geometry,drawing,places'
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;