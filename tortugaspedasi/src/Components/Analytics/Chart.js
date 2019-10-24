import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
             chartData:{
                labels: ['July','August', 'September', 'October', 'November', 'December'],
                datasets: [
                  {
                    data: [65, 59, 80, 81, 56, 43, 72],
                    label: "Number of turtles",
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 2,
                    hoverBackgroundColor: 'rgba(255,99,132,0.8)',
                    hoverBorderColor: 'rgba(255,99,132,1)'
                  }
                ]
              }}}

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

export default Chart
