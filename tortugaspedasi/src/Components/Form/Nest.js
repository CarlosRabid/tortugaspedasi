import React, { Component } from 'react';
import NestInput from './NestInput';

class Nest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nestInput: {}
        }
    }

    updateNest = (dms) => { 
        this.setState({
            turtleInput : dms
        })
        this.props.handleTurtle(dms)
    }




    render() {
        return null 
        // <NestInput updateNest={this.updateNest}/>

    }
}

export default Nest;