import React, { Component } from 'react';
import DynamicChart from './DynamicChart';

class Analytics extends Component {
    
    render() { 
        return (  
            <div className= "analytics">
                Component Analytics working good
                <DynamicChart />
            </div>
        );
    }
}
 
export default Analytics;