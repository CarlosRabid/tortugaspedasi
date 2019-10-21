import React, { Component } from 'react';
import SpreadsheetContainer from './SpreadsheetContainer';
import SpreadsheetActions from './SpreadsheetActions';
import { func } from 'prop-types';
import UpdateForm from './UpdateForm';
import { throwStatement } from '@babel/types';
import { async } from 'q';
const axios = require('axios')

class SpreadsheetData extends Component {
    constructor() {
        super();
        this.state = {
            forms: [],
            form: {},
            filter: "",
            showPopUp: null
        }
    }

    async componentDidMount() {
        let data = await axios.get('http://localhost:7777/forms')
        this.setState({
            forms: data.data
        })
        this.getDataById()
    }

    getDataById = async () => {

        let data = await axios.get('http://localhost:7777/forms/5da76a5a90e0f8c23414be78')
        this.setState({
            form: data.data
        })
    }

    // searchHandler = (event) => {
    //     this.setState({
    //         filter: event.target.value
    //     })
    // }

    closePopUp = () => {
        this.setState({
            showPopUp: null
        })
    }

    showPop = async (id) => {
        console.log(id)
        await this.setState({
            showPopUp: id
        })
    }



    render() {
        let forms = this.state.forms

        return (
            <div className="spreadSheet">
                {this.state.showPopUp ?
                    <UpdateForm closePopUp={this.closePopUp} /> :  null}

                <SpreadsheetActions data={this.state} searchHandler={this.searchHandler} />

                <div className="forms">

                    {forms.map((f, index) => <SpreadsheetContainer form={f} key={f._id} showPop={this.showPop} closePopUp={this.closePopUp} />)}
                </div>

            </div>
        )
    }
}

export default SpreadsheetData;