import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default () => (
  <>
    <Slider min={1} defaultValue={1} max={50}/>
    <Range />
  </>
);
