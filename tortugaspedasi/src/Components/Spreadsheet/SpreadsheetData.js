import React, { Component } from 'react';
import SpreadsheetContainer from './SpreadsheetContainer';
import SpreadsheetActions from './SpreadsheetActions';
import { func } from 'prop-types';
import UpdateForm from './UpdateForm';
import { throwStatement } from '@babel/types';
const axios = require('axios')

class SpreadsheetData extends Component {
    constructor() {
        super();
        this.state = {
            forms: [],
            filter: "",
            showPopUp: null
        }
    }

    async componentDidMount() {
        let data = await axios.get('http://localhost:7777/forms')
        this.setState({
            forms: data.data
        })
    }

    searchHandler = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    closePopUp = () => {
        this.setState({
            showPopUp: null
        })
    }

    showPop = (id) => {
        console.log(id)
        this.setState({
            showPopUp: id
        })
    }


    // serchingForm = (filter) => {
    //     filter = this.state.filter
    //     return function () {
    //         return this.state.forms.shift.firstName.toLowerCase().includes(filter.toLowerCase()) || !filter
    //     }
    // }
    render() {
        let forms = this.state.forms
        //     let Filterforms = this.state.forms.filter(form => {
        //         return form.shift.firstName.indexOf(this.state.filter) !== 1
        //     })
        //    console.log(Filterforms)



        return (
            <div className="spreadSheet">
                {this.state.showPopUp ?
                    <UpdateForm closePopUp={this.closePopUp} /> :
                    null}
                <SpreadsheetActions data={this.state} searchHandler={this.searchHandler} />

                <div className="forms">
                
                    {forms.map((f, index) => <SpreadsheetContainer form={f} key={f._id} showPop = {this.showPop} closePopUp={this.closePopUp}/>)}
                </div>

            </div>
        )
    }
}

export default SpreadsheetData;