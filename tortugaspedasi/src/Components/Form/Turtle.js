import React, { Component } from 'react';
import TurtleInput from './TurtleInput';

class Turtle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turtleinput: {}
<<<<<<< HEAD
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
=======

>>>>>>> 08222c8fd8f8ae2d1dd32f7d789a7a37581edc8e
        }
    }
    updateTurtle = (dms) => {
        // let state = {...this.state.turtleinput}
        this.setState({turtleinput: dms })
    }
    render() { 
        return (
            <TurtleInput updateTurtle={this.updateTurtle} />
        );
    }
}
 
export default Turtle;