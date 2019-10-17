import React, { Component } from 'react';
const moment = require('moment')

class SpreadsheetContainer extends Component {

    render() {

        let form = this.props.form
        console.log(form)

        return (
            <div className="form">
                <h4>{form.shift.firstName} {(form.shift.lastName)}</h4>
                <span>Location: {form.observation.location}</span>
                <br/>
                <span>Date: {moment(form.shift.date).format("MM Do YY")} </span>
            </div>
            // null
        )
    }
}



export default SpreadsheetContainer;