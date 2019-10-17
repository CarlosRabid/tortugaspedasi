import React, { Component } from 'react';
import SpreadsheetData from './SpreadsheetData';



class Spreadsheet extends Component {


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