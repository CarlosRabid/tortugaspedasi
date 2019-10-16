import React, { Component } from 'react';
import { async } from 'q';
const axios = require('axios') 


class Spreadsheet extends Component {
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
        console.log(this.state.data)
        let length = this.state.data.length -1
        console.log(length)
        
        return ( 
          <div className= "Spreadsheet">
              Component Spreedsheet working good
              
          </div>  
         )
    }
}
 
export default Spreadsheet;