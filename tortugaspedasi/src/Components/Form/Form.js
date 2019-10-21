import React, { Component } from 'react';
import ShiftInput from './ShiftInput';
import ObservationInput from './ObservationInput';
import TurtleInput from './TurtleInput';
import NestInput from './NestInput';
const axios = require('axios') 

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          forms: [],
          nestFound: null
        }
    }

    submitNewForm = async (shift, observation, turtle, nest) => {
        await axios.post('http://localhost:7777/newForm', {shift, observation, turtle, nest})
    }

    render() { 
        return (
            <div className= "form">
                <h3>TORTUGA WATCH FORM</h3>
                <ShiftInput forms={this.state.forms}/>
                <ObservationInput forms={this.state.forms} getPosition={this.getPosition}/> 
                <TurtleInput />
                {this.state.nestFound ?
                <NestInput /> : null}
                <button className="submit" onClick={this.submitNewForm}>Submit</button>
            </div>
        )
    }
}


export default Form;