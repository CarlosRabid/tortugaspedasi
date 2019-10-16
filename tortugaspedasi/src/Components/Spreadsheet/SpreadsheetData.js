import React, { Component } from 'react';
import SpreadsheetContainer from './SpreadsheetContainer';
const axios = require('axios') 

class SpreadsheetData extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getDataDb = async () =>{
        let data = await axios.get('http://localhost:7777/forms')
        this.setState({
            data: data.data
        })
        
    }

    componentDidMount(){
        this.getDataDb()
    }
    render() {
        return (
            <SpreadsheetContainer data = {this.state.data}/> 
        )
    }
}

export default SpreadsheetData;