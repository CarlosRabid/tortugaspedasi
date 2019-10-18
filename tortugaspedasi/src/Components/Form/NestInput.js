import React, { Component } from 'react';

class NestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eggCount: "",
            layTime: "",
            hatchEst: "",
            rehomed: "",
            salvageable: "",
        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
    }
    addShift = () => {
        this.props.addShift(this.state.eggCount, this.state.layTime, this.state.hatchEst, this.state.rehomed, this.state.salvageable)
    }

    render() {
        let input = ["Time", "Location", "Moonphase", "Tide", "Comments"]
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

export default NestInput;

