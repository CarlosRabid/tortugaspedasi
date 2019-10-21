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
                        <span className="new-observation-1"> {i.formName}: </span>
                        <input className="searchInput underline new-observation-2"
                            name={i.stateName} onChange={this.handleInput}></input>

                    </div>
                    )}
                    

                </div>
            </div>
        );

    }
}
 
export default ObservationInput;