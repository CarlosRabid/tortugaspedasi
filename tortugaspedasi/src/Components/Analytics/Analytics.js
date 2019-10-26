import React, { Component } from 'react';
import DynamicChart from './DynamicChart';
import Chart from './Chart';
import CircleChart from './Doughnut';

class Analytics extends Component {
    
    render() { 
        return (  
            <div className= "analytics">
                <DynamicChart />
            </div>
        );
    }
}
 
export default Analytics;