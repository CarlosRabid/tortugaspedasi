import React, { Component } from 'react';

class SpreadsheetActions extends Component {
    
    render() {

        let searchHandler = this.props.searchHandler
        return ( 
            <div className="actions">
                <input type="text" name="filter" placeholder="Search" onChange={searchHandler}/>
                <button>Search</button>
            </div>
         );
    }
}
 
export default SpreadsheetActions