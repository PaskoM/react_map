// eslint react / prop - types: 0; 
import React, { useState, useEffect } from "react";
import Map from "./Map.js";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from 'rc-tooltip';
import RCSlider from "rc-slider";

const Drivers = () => {

  const [drivers, setDrivers] = useState([]);
  const [count, setCount] = useState(2);
  
  useEffect(() => {
    getDrivers();
  }, [count]);

  const getDrivers = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?count=${count}`)
    const data = await response.json()
    setDrivers(data)
    console.log(data)
  };

    const handleChange = value => {
      setCount({
        count: value
      });
    };
  
  const Slider = require("rc-slider");
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Handle = RCSlider.Handle;
  // const Range = createSliderWithTooltip(Slider.Range);
  
  const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

    return (
      <Container className='pb-5'>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <div className='pb-3'>Splyt Drivers: {count}</div>
                <RCSlider
                  min={1}
                  max={50}
                  defaultValue={1}
                  handle={handle}
                  onChange={handleChange}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {drivers.length > 0
          ? drivers.map((driver) => (
              <Map
                key={driver.driver_id}
                id={driver.driver_id}
                lat={driver.location.latitude}
                lng={driver.location.longitude}
              />
            ))
          : null}
      </Container>
    );
}

export default Drivers
  

  
