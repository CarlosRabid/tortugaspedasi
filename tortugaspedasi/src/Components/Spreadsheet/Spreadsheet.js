import React, { Component } from 'react';
import SpreadsheetData from './SpreadsheetData';
import SpreadsheetActions from './SpreadsheetActions';



class Spreadsheet extends Component {


    render() { 
        return ( 
          <div className= "Spreadsheet">
            <SpreadsheetData/>
          </div>  
         )
    }
}
 
export default Spreadsheet;