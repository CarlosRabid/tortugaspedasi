import React, { Component } from 'react';
import UpdateForm from './UpdateForm';
const moment = require('moment')

class SpreadsheetContainer extends Component {
    constructor(){
        super();
        this.state={
           
        }
    }

   


    showPopUp = (event) => {
        console.log(event.target.id)
        this.props.showPop(event.target.id)
    }




    render() {

        let form = this.props.form
        console.log(form._id)

        return (
            <div id={form._id}>
                
                <div className="form" onClick={this.showPopUp.bind(this)} id={form._id}>
                    
                    <h4 id={form._id}>{form.shift.firstName} {(form.shift.lastName)}</h4>
                    <span id={form._id}>Location: {form.observation.location}</span>
                    <br />
                    <span id={form._id}>Date: {moment(form.shift.date).format("Do/MM/YY")} </span>

                </div>
            </div>
        )
    }
}



export default SpreadsheetContainer;