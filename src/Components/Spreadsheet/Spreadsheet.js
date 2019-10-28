import React, { Component } from 'react';
import SpreadsheetData from './SpreadsheetData';
import { Redirect } from 'react-router-dom';
import './Spreadsheet.css'
// import SpreadsheetActions from './SpreadsheetActions';



class Spreadsheet extends Component {


    render() { 
      if(!this.props.isLoggedIn()){return <Redirect to="/"/>}

        return ( 
          <div className= "Spreadsheet">
            <SpreadsheetData />
          </div>  
         )
    }
}
 
export default Spreadsheet;