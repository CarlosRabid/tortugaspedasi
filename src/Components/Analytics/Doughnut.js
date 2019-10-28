import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class CircleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: [
                    'Rescued',
                ],
                datasets: [{
                    data: [300],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                    '#FF6387',
                    '#36A2EB',
                    '#FFFFFF'
                    ]
                }]
            }
        }
    }

    render() {
        return (
            <div className="doughnu">
                <Doughnut 
                        data={this.state.data}
                        options={{ maintainAspectRatio: true }} 
                />
            </div>
        );
    }
}

export default CircleChart