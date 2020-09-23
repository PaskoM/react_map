import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import styled from "styled-components";

const GOOGLE_API_KEY =
  process.env.REACT_APP_GOOGLE_API_KEY || 'AIzaSyAvX2jNZU-jywa6N7yUHTsP8W3N30orbOM';

const MapWrapper = styled.div`
  height: 500px;
  width: 100%;
`;

const Map = props => {
  const { drivers, setLocation } = props;
  const hasDrivers = drivers && drivers.length;


  const handleClick = props => {
    const { lat, lng } = props;

    setLocation({
      location: {
        latitude: lat,
        longitude: lng,
      },
    });
  };


  return (
    <Container>

      <Row className="justify-content-center">
        <Col className="text-center" xs={10}>
          <MapWrapper>
            <GoogleMapReact
              yesIWantToUseGoogleMapApiInternals
              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
              center={{
                lat: 51.5049375,
                lng: -0.0964509,
              }}
              defaultZoom={14}
              onClick={handleClick}
            >
              {hasDrivers &&
                drivers.map(driver => (
                  <Marker
                    key={driver.driver_id}
                    id={driver.driver_id}
                    lat={driver.location.latitude}
                    lng={driver.location.longitude}
                  />
                ))}
            </GoogleMapReact>
          </MapWrapper>
        </Col>
      </Row>
    </Container>
  );
};


export default Map;