import React, { Component } from 'react';
import TurtleInput from './TurtleInput';

class Turtle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turtleinput: {},
            species: "",
            gender: null,
            conditionstat: "",
            conditionstage: "",
            dimensionsPl: 0,
            dimensionsPw: 0,
            dimensionsCl: 0,
            dimensionsCw: 0,
            markingsRs: "",
            markingsLs: "",
            // gender: "",
            // condition:
            // {
            //     status: "",
            //     stage: ""
            // },
            // dimensions: {
            //     plain: {
            //         length: "",
            //         width: ""
            //     },
            //     curve: {
            //         length: "",
            //         width: ""
            //     }
            // },
            // markings: {
            //     rightSide: "",
            //     leftSide: ""
            // }
        }
    }
    updateTurtle = (dms) => {
        // let state = {...this.state.turtleinput}
        this.setState({turtleinput: dms })
    }


    render() { 
        return (
            <TurtleInput handleGender={this.props.handleGender} handleCondition={this.props.handleCondition} handleSpecies={this.props.handleSpecies} updateTurtle={this.updateTurtle} 
            handleDimentions= {this.props.handleDimentions}/>
        );
    }
}
 
export default Turtle;