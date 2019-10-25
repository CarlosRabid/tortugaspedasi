import React, { Component } from 'react';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import moment from 'moment'
import Axios from 'axios';

class DynamicChart extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            countBy: "turtleCount",
            time: "day",
        }
    }

    convertDate = (date, group) => {
        let fd
        let newDate
        if(group === "day"){
            console.log(date)
            fd = date * (1000 * 60 * 60 * 24)
            newDate = moment(fd).format("MMMM Do YYYY")
        } else if (group === "month"){
            date = parseInt(date)
            let addYear = Math.floor(date/12)
            let toMultiply = (date%12)/12
            let year = 1970 + addYear
            let month = (Math.ceil(toMultiply*12))+1
            newDate = month + " " + year
        } else if (group === "year"){
            newDate = JSON.parse(date) + 1970
        } else if(group ==="week"){
            fd = date * (1000 * 60 * 60 * 24 * 7)
            newDate = moment(fd).format('w YYYY')
        }
        return newDate
    }

    getRelevantData = async () => {
        let group = this.state.time
        let response = await Axios.get(`http://localhost:7777/formData/${group}`)
        this.setState({
            data: response.data.map(d => {
                return { ...d, moonPhase: this.getMoonphases(d.moonPhase), date: this.convertDate(d.date, group)}
            })
        })
    }
    handleChange = async (e) => {
        let data = [...this.state.data]
        let name = e.target.name
        let newData = data.splice(0) // Only for User Experience purposes (to force chart to reanimate)
        await this.setState({ [name]: e.target.value, data: newData })
        this.getRelevantData()
    }

    getMoonphases = (data) => {
        let moonphase
        if (data === "Full Moon") {
            return moonphase = 4
        } else if (data === "Third Quarter") {
            return moonphase = 3
        } else if (data === "New Moon") {
            return moonphase = 2
        } else if (data === "First Quarter") {
            return moonphase = 1
        } else {
            return moonphase = null
        }
    }

    async componentDidMount() {
        await this.getRelevantData()
    }

    render() {
        let countOptions = ["turtleCount", "nestCount", "eggCount"]
        let timeOptions = ["day", "week", "month", "year"]
        let notShowingMoonPhases

        return (
            <div>
                <h3>Count: </h3>
                <select id="countBy" name="countBy" value={this.state.countBy} onChange={this.handleChange}>
                    {countOptions.map(o => <option value={o}>{o}</option>)}
                </select>
                <select id="time" name="time" value={this.state.time} onChange={this.handleChange}>
                    {timeOptions.map(o => <option value={o}>{o}</option>)}
                </select>

                <ComposedChart width={600} height={300} data={this.state.data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>

                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    {this.state.time === "day" ?
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        : notShowingMoonPhases = true
                    }
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey={this.state.countBy} fill="#8884d8" />
                    {this.state.time === "day" ?
                        <Line type="monotone" yAxisId="right" dataKey="moonPhase" fill="#82ca9d" />
                        
                        : notShowingMoonPhases = true
                    }
                </ComposedChart>
                {this.state.time === "day" ?
                    <div>
                        <div>Legend: </div>
                        <ol>
                            <li>First Quarter</li>
                            <li>New Moon</li>
                            <li>Third Quarter</li>
                            <li>Full Moon</li>
                        </ol>
                    </div>
                    : notShowingMoonPhases = true
                }

            </div>
        );
    }
}

export default DynamicChart;