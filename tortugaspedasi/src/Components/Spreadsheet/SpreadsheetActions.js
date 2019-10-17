import React, { Component } from 'react';

class SpreadsheetActions extends Component {
    
    render() {

        
        return ( 
            <div className="actions">
                <input type="text" name="filter" placeholder="Search"/>
                <button>Search</button>
            </div>
         );
    }
}
 
export default SpreadsheetActions;