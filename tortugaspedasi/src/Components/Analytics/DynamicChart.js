import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class DynamicChart extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div> 
                <BarChart width={600} height={300} data={}  // Missing data and dataKey for bars
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="" fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="" fill="#82ca9d" />
                </BarChart>
            </div>
        );
    }
}

export default DynamicChart;