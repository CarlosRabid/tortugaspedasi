import React, { Component } from 'react';
import ShiftInput from './ShiftInput';
import ObservationInput from './ObservationInput';
import Turtle from './Turtle';
import NestInput from './NestInput';
import Fab from '@material-ui/core/Fab';
// import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import './form.css';

const axios = require('axios');


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            nestFound: null
        }
    }

    submitNewForm = async (shift, observation, turtle, nest) => {
        console.log('working')
        await axios.post('http://localhost:7777/newForm', { shift, observation, turtle, nest })
    }

    render() {
        return (
            <div className="form">
                <h3>TORTUGA WATCH FORM</h3>
                <div id="input" className="_shift">
                    <ShiftInput forms={this.state.forms} />
                </div>
                <div id="input" className="_observation">
                    <ObservationInput forms={this.state.forms} getPosition={this.getPosition} />
                </div>
                <div id="input" className="_turtle">
                    <Turtle forms={this.state.forms} />
                </div>
                <Fab size="medium" color="secondary" aria-label="add" className="fab">
                    <></>
                </Fab>
                <div id="input" className="_nest">
                    {this.state.nestFound ?
                        <NestInput /> : null}
                </div>                {/* <button className="submit" onClick={this.submitNewForm}>Submit</button> */}
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="submit"
                    // startIcon={<SaveIcon />}
                    onClick={this.submitNewForm}
                >
                    Submit Form
                </Button>
            </div>
        )
    }
}


export default Form;