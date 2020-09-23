import React, { Fragment } from 'react';
import './App.css';
import Map from './Map.js'
import Slider from './Slider.js'
import "bootstrap-css-only/css/bootstrap.min.css";


class App extends React.Component {
  state = {
    drivers: [],
    driversCount: 1,
    splytOffice: {
      lat: 51.5049375,
      lng: -0.0964509
    }
  };

//   getDrivers = () => {
//     fetch(`https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?
// latitude=51.5049375,&longitude=-0.0964509&count=50`)
//       .then(response => response.json())
//       .then( data  => {
//         this.setState({ drivers: data.drivers })
//     })
//   }
  
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
      <Fragment>
        <Map drivers={this.state.drivers}/>
        <Slider />
      </Fragment>
    );
  }
}

export default App;
