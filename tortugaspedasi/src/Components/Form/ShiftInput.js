import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
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
    componentDidMount(){
        // this.setState({date: Date()})
    }
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    addShift = () => {
        this.props.addShift(this.state.firstName, this.state.lastName, this.state.date)
    }

    render() {
        const { t, i18n } = this.props;
        let input = [{ formName: "First Name", stateName: "firstName" }, { formName: "Last Name", stateName: "lastName" }]
        return (
            <div className="shift-container">
                <h2>{t('Shift')}</h2>
                <div className="shift-component">
                    {input.map((i) => <div className="new-shift">
                        <span className="individualShift">  </span>
                        {/* <span className="individualShift"> {i.formName}: </span> 
                           <input className="shiftInput"
                            name={i.stateName} onChange={this.handleInput}></input> */}
                        <TextField
                            id="individualShift"
                            label={i.formName}
                            className="ShiftInput"
                            value={this.state.firstName}
                            onChange={this.handleInput}
                            margin="normal"
                            autoComplete="on"
                        />
                    </div>
                    )}
                </div>
                <form>
                    <label>
                        {/* <input type="date" name="date" value={this.state.date} onChange={this.handleInput} /> */}
                        <TextField
                            id="date"
                            label={t('Date')}
                            type="datetime-local"
                            defaultValue={this.state.date}
                            className="dateinput"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleInput}
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default withTranslation('translation')(ShiftInput);