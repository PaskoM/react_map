import React, { Fragment } from 'react';
import './App.css';
import Map from './Map.js'
import Slider from './Slider.js'
import { Container, Row, Col } from 'reactstrap'
import "bootstrap-css-only/css/bootstrap.min.css";
import styled from 'styled-components';

const AppWrapper = styled.div `
  height: 100%;
`;


class App extends React.Component {
  state = {
    drivers: [],
    driversCount: 1,
    splytOffice: {
      lat: 51.5049375,
      lng: -0.0964509
    }
  };

  
  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?count=50"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          drivers: console.log(data.drivers),
        });
      });
  }


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
        <Slider />
        </Container>
      <Container>
            <Map drivers={this.state.drivers} />
        </Container>
        </Fragment>
        </AppWrapper>
    );
  }
}

export default App;
