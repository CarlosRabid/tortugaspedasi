import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class ShiftInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            date: ""
        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
    }
    addShift = () => {
        this.props.addShift(this.state.firstName, this.state.lastName, this.state.date)
    }

    render() {
        let input = [{ formName: "First Name", stateName: "firstName" }, { formName: "Last Name", stateName: "lastName" }]
        return (
            <div className="shift-container">
                <h2>Shift</h2>
                <div className="shift-component">
                    {input.map((i) => <div className="new-shift">
                        <span className="individualShift"> {i.formName}: </span>
                        <input className="shiftInput"
                            name={i.stateName} onChange={this.handleInput}></input>
                    </div>
                    )}
                </div>
                <form>
                    <label>
                        Date:
                        <input type="date" name="date" value={this.state.date} onChange={this.handleInput}/>
                    </label>
                </form>
            </div>
                );
            }
        }
        
export default ShiftInput;