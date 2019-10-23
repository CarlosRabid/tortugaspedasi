import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { Typography, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

class ShiftInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            date: "",
            time: ""
        }
    }
    componentDidMount() {
        // this.setState({date: Date()})
    }
    handleInput = (event) => {
        console.log(event)
        let state = { ...this.state }
        let date = state.date
        let time = state.time
        // let property = "";
        // let value = ""
        if (event.target) {

            return this.setState({ [event.target.id]: event.target.value })
        } else {
            date = moment(event).format('DD/MM/YYYY')
            time = moment(event).format('HH:mm')
            // date = typeof(date)
            console.log(typeof (date))
            return this.setState({ date, time })
        }
    }
    addShift = () => {
        this.props.addShift(this.state.firstName, this.state.lastName, this.state.date)
    }

    render() {
        const { t, i18n } = this.props;
        const height = 38;
        const marginLeft = '5%';
        const heightD = '10%';
        let input = [{ formName: "First Name", stateName: "firstName" }, { formName: "Last Name", stateName: "lastName" }]
        return (
            <div>
                {/* <h4>{t('Shift')}</h4> */}
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <Grid container justify="space-between">
                        <TextField
                            id="firstName"
                            name="firstName"
                            label={t('Observer First Name')}
                            className="ShiftInput"
                            value={this.state.firstName}
                            onChange={this.handleInput}
                            margin="none"
                            autoComplete="on"
                            style={{ height, marginLeft }}
                        />
                        {/* <span className="individualShift">  </span> */}
                        {/* <span className="individualShift"> {i.formName}: </span> 
                           <input className="shiftInput"
                            name={i.stateName} onChange={this.handleInput}></input> */}
                        <TextField
                            id="lastName"
                            name="lastName"
                            label={t('Observer Last Name')}
                            className="ShiftInput"
                            value={this.state.lastName}
                            onChange={this.handleInput}
                            margin="none"
                            autoComplete="on"
                            hiddenLabel={true}
                            style={{ height, marginLeft }}
                        />
                        <br />
                        <br />
                        <br />
                        {/* <label>
                         <input type="date" name="date" value={this.state.date} onChange={this.handleInput} /> 
                        
                    <TextField
                        id="date"
                        label=
                        type="datetime-local"
                        defaultValue={this.state.date}
                        className="dateinput"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleInput}
                        style={{ height }}
                        margin="none"
                    /> 
                    </label> */}

                        <KeyboardDatePicker
                            margin="normal"
                            id="date"
                            label={t('Date of observation')}
                            format="dd/mm/yyyy"
                            value={moment(this.state.date, 'dd/mm/yyyy').toDate()}
                            // defaultValue={this.state.date}
                            onChange={this.handleInput}
                            KeyboardButtonProps={{
                                'aria-label': t('Date'),
                            }}
                            InputLabelProps={{ shrink: true }}
                            style={{ height: heightD, marginLeft }}
                            variant="standard"
                            size="small"
                            helperText={false}
                            // type="date"
                            
                            />
                        <KeyboardTimePicker
                            margin="none"
                            id="time"
                            label={t('Time ')}
                            format="HH:mm"
                            // defaultValue="15:02"
                            value={moment(this.state.time, 'HH:mm').toDate()}
                            onChange={this.handleInput}
                            KeyboardButtonProps={{
                                'aria-label': t('Time'),
                            }}
                            className="dateinput"
                            style={{ height: heightD, marginLeft }}
                            InputLabelProps={{ shrink: true }}
                            helperText={false}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}

export default withTranslation('translation')(ShiftInput);