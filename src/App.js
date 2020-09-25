import React, { Fragment } from 'react';
import Map from './containers/Map.js'
import Drivers from './containers/Drivers.js'
import { Container, Row, Col } from 'reactstrap'
import "bootstrap-css-only/css/bootstrap.min.css";
import styled from 'styled-components';

const AppWrapper = styled.div `
  height: 100%;
`;

class App extends React.Component {
  render() {
  
    return (
      <AppWrapper>
      <Fragment>
              <Container className="text-black pt-5">
        <Row className="justify-content-center text-center">
          <Col className="pb-5" xs={12}>
            <h1>Splyt Challenge</h1>
          </Col>
        </Row>
        </Container>
              <Container>
        <Drivers />
        </Container>
      <Container>
            <Map />
        </Container>
        </Fragment>
        </AppWrapper>
    );
  }
}

export default App;
