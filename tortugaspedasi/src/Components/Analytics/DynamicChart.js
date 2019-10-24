import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Axios from 'axios';

class DynamicChart extends Component {
    constructor() {
        super()
        this.state = {
            anotherObject : {
                data: [],
                option: "turtleCount",
            }
        }
    }

    handleChange = (e) => {
        let value = e.target.value
        let anotherObject = {...this.state.anotherObject}
        anotherObject.option = value
        this.setState({ anotherObject })
    }

    async componentDidMount() {
        let response = await Axios.get('http://localhost:7777/formData')
        let anotherObject = {...this.state.anotherObject}
        
        anotherObject.data = response.data.map(d => {
            return { ...d, moonPhase: Math.floor(Math.random() * 4 + 1) }
        })

        this.setState({anotherObject})
    }

    render() {
        let options = ["turtleCount", "nestCount", "eggCount"]
        return (
            <div>
                <h3>Count: </h3>
                <select id="countBy" value={this.state.option} onChange={this.handleChange}>
                    {options.map(o => <option value={o}>{o}</option>)}
                </select>

                <BarChart width={600} height={300} data={this.state.anotherObject.data}  
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey={this.state.anotherObject.option} fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="moonPhase" fill="#82ca9d" />
                </BarChart>

            </div>
        );
    }
}

export default DynamicChart;