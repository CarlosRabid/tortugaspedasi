import React, { Component } from 'react';
import TurtleInput from './TurtleInput';

class Turtle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turtleinput: {}

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