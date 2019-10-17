import React, { Component } from 'react';
import SpreadsheetContainer from './SpreadsheetContainer';
const axios = require('axios') 

class SpreadsheetData extends Component {
    constructor() {
        super();
        this.state = {
            forms: []
        }
    }

    // getDataDb = async () =>{
    //     let data = await axios.get('http://localhost:7777/forms')
    //     this.setState({
    //         forms: data.data
    //     })
        
    // }

    async componentDidMount(){
        let data = await axios.get('http://localhost:7777/forms')
        this.setState({
            forms: data.data
        })
    }
    render() {
        let forms = this.state.forms
        return (
            <div className= "forms">
                {forms.map((f, index) => {
                   return <SpreadsheetContainer form= {f} key={index} /> 
                })}
            </div> 
        )
    }
}

export default SpreadsheetData;