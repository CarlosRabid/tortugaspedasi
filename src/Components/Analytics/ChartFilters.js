import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class ChartFilters extends Component {
    constructor() {
        super()
        this.state = {}
    }

    removeEmptyFilters = (filters) => {
        const names = Object.keys(filters)
        for (let name of names) {
            if (filters[name].length === 0) {
                delete filters[name]
            }
        }
    }

    extractFilters = () => {
        const species = ["Cc", "Lo", "Cm", "Ei", "Dc"]
        const tides = ["high", "high-to-low", "low", "low-to-high"]
        const genders = ["male", "female"]

        const filters = { "turtle.species": [], "observation.tide": [], "turtle.gender": [] }

        species.forEach(s => this.state[s] ? filters["turtle.species"].push(s) : null)
        tides.forEach(t => this.state[t] ? filters["observation.tide"].push(t) : null)
        genders.forEach(g => this.state[g] ? filters["turtle.gender"].push(g) : null)

        this.removeEmptyFilters(filters)
        return filters
    }

    handleChange = async (e) => {
        if (this.state[e.target.value]) {
            await this.setState({ [e.target.name]: null })
        }
        else {
            await this.setState({ [e.target.name]: e.target.value })
        }

        const filters = this.extractFilters()
        this.props.getRelevantData(filters)
    }

    createCheckMark = info => {
        return <FormControlLabel
            control={
                <Checkbox name={info.value}
                    color={info.color} checked={this.state[info.value]}
                    onChange={this.handleChange} value={info.value} />}
            label={info.label}
        />
    }

    getCheckMarks = (filter) => {
        const green = "primary"
        const blue = "secondary"
        const pink = "default"

        const filters = {
            species: [
                { label: "Caretta Caretta", value: "Cc", color: green },
                { label: "Lepidochelys Olivacea", value: "Lo", color: green },
                { label: "Chelonia Mydas", value: "Cm", color: green },
                { label: "Eretmochelys imbricata", value: "Ei", color: green },
                { label: "Dermochelys coriacea", value: "Dc", color: green }
            ],
            tides: [
                { label: "High", value: "high", color: blue },
                { label: "High to Low", value: "high-to-low", color: blue },
                { label: "Low", value: "low", color: blue },
                { label: "Low to High", value: "low-to-high", color: blue },
            ],
            gender: [
                { label: "Male", value: "male", color: pink },
                { label: "Female", value: "female", color: pink },
            ]
        }

        const checkmarks = []

        for (let info of filters[filter]) {
            checkmarks.push(this.createCheckMark(info))
        }

        return checkmarks
    }

    render() {
        return (
            <div className="chart-filters">
                <span>Filters</span>
                <div>
                    {["species", "tides", "gender"].map(filter => (
                        <FormGroup row >
                            <div className="filter-group">
                                <span>{filter.toUpperCase()}</span>
                                <div className="chart-checkboxes">{this.getCheckMarks(filter)}</div>
                            </div>
                        </FormGroup>
                    ))}
                </div>
            </div>
        );
    }
}

export default ChartFilters;