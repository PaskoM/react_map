import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {Col} from 'reactstrap'



export default () => (
  <Col sm="12" className="slider">
    <Slider min={1} defaultValue={1} max={50} />
  </Col>
);



