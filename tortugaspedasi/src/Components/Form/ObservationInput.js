import React, { Component } from 'react';
class ObservationInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    getPosition() {
        function geoSucess(position){
          let geoCoords= {
            lat:position.coords.latitude,
            long:position.coords.longitude
          }
          alert(`This are your coordinates: - Latitude: ${geoCoords.lat} - Longitude: ${geoCoords.long}`)
          return(geoCoords)
        }
    
        function geoError(errorPosition){
            alert("Error - Not position available")
        }
    
        const geoOptions={
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 25000
        }
        
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(geoSucess, geoError,geoOptions );
          console.log("True")
        }else{
          console.log("Geolocation not enable in this device")
    
        }
      }
  

    render() {
        return ( 
            <div>
                <button id="button" onClick={this.getPosition}>Click here to know your position</button>
            </div>
         );
    }
}
 
export default ObservationInput;