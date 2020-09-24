import React, { Fragment } from 'react';
import Map from './containers/Map.js'
import Slider from './containers/Slider.js'
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
  };

  
  componentDidMount() {
    let count = this.state.driversCount
    fetch(
      `https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?count=${count}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          drivers: console.log(data.drivers)
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
        <Slider driversCount={this.state.driversCount}/>
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
