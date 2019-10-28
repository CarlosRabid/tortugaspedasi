import React, { Component } from 'react';
const moment = require('moment')

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formId: props.form._id,
            name: "",

        }
    }

    closePopUp = () => {
        this.props.closePopUp()
    }

    // update = (event) => {
    //     let item = event.target
    //     this.setState({
    //         name: item
    //     })
    // }

    render() {

        let shift = this.props.form.shift
        let turtle = this.props.form.turtle
        // let observation = this.props.form.observation
        // let nest = this.props.form.nest

        return (
            <div className="popUp">
                ID: <input type="text" placeholder={this.props.form._id} name="name" value={this.state.formId} onChange={this.update} />
                <div id="shift">
                    <h5>{moment(shift.date).format("Do/MM/YY")}</h5>
                    <h4>{shift.firstName} {shift.lastName}</h4>
                </div>
                <div id="turtle">
                    <div id="plain">
                       Plain: {turtle.dimensions.plain.length}, {turtle.dimensions.plain.width}
                    </div>
                    <div id="curve">
                        Curve: {turtle.dimensions.curve.length}, {turtle.dimensions.curve.width}
                    </div>
                    <p>Species: {turtle.species}</p>
                    <p>Gender: {turtle.gender} </p>
                    <p> Status: {turtle.condition.status}</p>
                    <p> Stage: {turtle.condition.stage}</p>
                </div>


                <button onClick={this.closePopUp}> Close </button>
            </div>)

    }
}

export default UpdateForm;