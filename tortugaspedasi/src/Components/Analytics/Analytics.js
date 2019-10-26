import React, { Component } from 'react';
import DynamicChart from './DynamicChart';
import Chart from './Chart';
import CircleChart from './Doughnut';
import { Redirect } from 'react-router-dom';

class Analytics extends Component {
    
    render() { 
        if(!this.props.isLoggedIn()){return <Redirect to="/"/>}

        return (  
            <div className= "analytics">
                <DynamicChart />
            </div>
        );
    }
}
 
export default Analytics;