import React from 'react';
import './App.css';
import Map from './Map.js'



class App extends React.Component {
  state = {
    dirvers: [],
    driversCount: 1,
    splytOffice: {
      lat: 51.5049375,
      lng: -0.0964509
    }
  };

  render() {
    return (
      <Map />
    );
  }
}

export default App;
