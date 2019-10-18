import React, { Component } from 'react';
class ObservationInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: "",
            location: "",
            moonPhase: "",
            tide: "",
            comments: ""
         }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value}, ()=>console.log(this.state))
    }
    addShift = () => {
        this.props.addShift(this.state.time, this.state.location, this.state.moonPhase, this.state.tide, this.state.comments)
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
        let input = [{formName:"Time", stateName: "time"}, {formName:"Location", stateName: "location"} , {formName:"Moonphase", stateName: "moonPhase"}, {formName:"Tide", stateName: "tide"},{formName:"Comments", stateName: "moonPhase"} ]
        return (
            <div className="observation-container">
                <h2>Observation</h2>
                <div>
                    <button id="button" onClick={this.getPosition}>Click here to know your position</button>
                </div>
                <div className="observation-component">
                    {input.map((i) => <div className="new-observation-grid">
                        <span className="new-observation-1"> {i}: </span>
                        <input className="searchInput underline new-observation-2"
                            name={i} onChange={this.handleInput}></input>

                    </div>
                    )}
                    

                </div>
            </div>
        );

    }
}
 
export default ObservationInput;