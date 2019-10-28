import React, { Component } from 'react';
import { ComposedChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, Line } from 'recharts';
import moment from 'moment'
import Axios from 'axios';
import ChartFilters from './ChartFilters';
import '../../styles/analytics.css'
import * as constant from '../Form/constant'
import Loader from '../Loader';

const dinamicRoute = (
    window.location.host.includes("localhost") ?
        constant.LOCAL_GET : constant.PROD_GET
)

class DynamicChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            countBy: "turtleCount",
            time: "day",
        }
        this.loadingData = true
        this.dinamicRoute = props.dinamicRoute
    }

    convertDate = (date, group) => {
        let fd
        let newDate
        if (group === "day") {
            fd = date * (1000 * 60 * 60 * 24)
            newDate = moment(fd).format("MMMM Do YYYY")
        } else if (group === "month") {
            date = parseInt(date)
            let addYear = Math.floor(date / 12)
            let toMultiply = (date % 12) / 12
            let year = 1970 + addYear
            let month = (Math.ceil(toMultiply * 12)) + 1
            newDate = month + " " + year
        } else if (group === "year") {
            newDate = JSON.parse(date) + 1970
        } else if (group === "week") {
            fd = date * (1000 * 60 * 60 * 24 * 7)
            newDate = moment(fd).format('w YYYY')
        }
        return newDate
    }

    getRelevantData = async (filters) => {
        if (!filters) { filters = {} }
        const group = this.state.time
        this.setState({ loadingData: true })
        const response = await Axios.post(`${dinamicRoute}/formData/${group}`, filters)
        setTimeout(() => { //for presentation only
            this.setState({
                data: response.data.map(d => {
                    return { ...d, moonPhase: this.getMoonphases(d.moonPhase), date: this.convertDate(d.date, group) }
                }), loadingData: false
            })
        }, 1500)
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
            <div className="analytics-page">

                <div className="analytics-area" style={{ width: '100vw', height: '70%' }} >
                    <h3>Count: </h3>
                    <select className="a-select" id="countBy" name="countBy" value={this.state.countBy} onChange={this.handleChange}>
                        {countOptions.map(o => <option value={o}>{o}</option>)}
                    </select>
                    <select className="a-select" id="time" name="time" value={this.state.time} onChange={this.handleChange}>
                        {timeOptions.map(o => <option value={o}>{o}</option>)}
                    </select>

                    {this.state.loadingData ? <Loader /> : null}

                    <ResponsiveContainer width="100%">
                        <ComposedChart width={600} height={300} data={this.state.data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>

                            <XAxis dataKey="date" stroke="black" />
                            <YAxis yAxisId="left" orientation="left" stroke="rgba(239, 221, 111)" />
                            {this.state.time === "day" ?
                                <YAxis yAxisId="right" orientation="right" stroke="#81C14B" />
                                : notShowingMoonPhases = true
                            }
                            <Tooltip />
                            <Legend color="#FFFFFF" />
                            <Bar yAxisId="left" dataKey={this.state.countBy} fill="rgba(239, 221, 111, 0.8)" />
                            {this.state.time === "day" ?
                                <Line strokeWidth={4} stroke="rgba(129, 193, 75, 0.7)" type="monotone" yAxisId="right" dataKey="moonPhase" fill="#82ca9d" />

                                : notShowingMoonPhases = true
                            }
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>

                <ChartFilters getRelevantData={this.getRelevantData} />



            </div>
        );
    }
}

export default DynamicChart;