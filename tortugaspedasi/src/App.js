import React, { Component } from 'react';
import Landing from './Components/Landing';

import NavBar from './Components/NavBar';
import './App.css';

class App extends Component {
  
  getMyPosition() {
    function locationReceived(position){
      console.log(position.coords.latitude)
    }

    function notReceived(errorPosition){
        console.log("It's not possible to get your position")
    }
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(locationReceived, notReceived, );
      console.log("True")
    }else{
      console.log("Geolocation not enable in this device")

    }
  }

  render() {

    this.getMyPosition()

    return (<div>
      <NavBar />
      {/* <Landing/>  */}
    </div>)
  }
}

export default App;




