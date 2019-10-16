import React, { Component } from 'react';
import { async } from 'q';
import SpreadsheetData from './SpreadsheetData';



class Spreadsheet extends Component {
    constructor() {
        super();
        this.state = {
            data: []
          }
    }



    render() { 
        return ( 
          <div className= "Spreadsheet">
            Component Spreedsheet working good
            <SpreadsheetData/>
          </div>  
         )
    }
}
 
export default Spreadsheet;