import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import RCSlider from 'rc-slider';
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";

const Handle = RCSlider.Handle;

const Slider = props => {
  const { setCount } = props;

  // useEffect(() => {
  //   getDrivers();
  // }, [count, getDrivers]);

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

  const handleChange = value => {
    setCount({ count: value });
  }

  return (
    <Container className='pb-5'>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <div className='pb-3'>Taxi Drivers: </div>

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
    </Container>
  )
}

export default Slider