import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';
import './turtle.css'

class ShiftInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            date: moment().format('DD/MM/YYYY'),
            time: moment().format('HH:mm')
        }
    }
    
    componentDidMount() {
        // this.setState({date: Date()})
        // this.props.submitForm(this.state)
    }
    handleInput = (event) => {
        // console.log(event)
        let state = { ...this.state }
        let date = state.date
        let time = state.time
        let props = this.props
        // let property = "";
        // let value = ""
        if (event.target) {
            
            this.setState({ [event.target.id]: event.target.value })
            this.props.handleName(this.state.firstName, this.state.lastName)
            return 
        } else {
            date = moment(event).format('DD/MM/YYYY')
            time = moment(event).format('HH:mm')
            // date = typeof(date)
            this.setState({ date, time })
            // console.log(this.state)
            this.props.handleDate(date, time)
            return 
        }
    }
    addShift = () => {
        this.props.addShift(this.state.firstName, this.state.lastName, this.state.date)
    }
    submitForm = (ShiftInput) => {
        this.props.submitForm(ShiftInput)
    }
    
    render() {
        const { t } = this.props;
        const height = 38;
        const marginLeft = '5%';
        const heightD = '10%';
        return (
            <div>
                {/* <h4>{t('Shift')}</h4> */}
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <Grid container justify="space-between" style={{ marginLeft: '7%' }}>
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
                        <div style={{ display: "inline-flex" }}>
                            <KeyboardDatePicker
                                margin="none"
                                id="date"
                                label={t('Date of watch')}
                                format="dd/mm/yyyy"
                                value={moment(this.state.date, 'dd/mm/yyyy').toDate()}
                                // defaultValue={this.state.date}
                                onChange={this.handleInput}
                                KeyboardButtonProps={{
                                    'aria-label': t('Date'),
                                }}
                                InputLabelProps={{ shrink: true }}
                                style={{ height: heightD, marginLeft, width: '42%' }}
                                variant="standard"
                                size="small"
                                helperText={false}
                            // type="date"

                            />
                            <KeyboardTimePicker
                                margin="none"
                                variant="standard"
                                // id="date"
                                id="time"
                                label={t('Time')}
                                format="HH:mm"
                                // defaultValue="15:02"
                                value={moment(this.state.time, 'HH:mm').toDate()}
                                onChange={this.handleInput}
                                KeyboardButtonProps={{
                                    'aria-label': t('Time'),
                                }}
                                className="dateinput"
                                style={{ height: heightD, marginLeft, width: '23%' }}
                                InputLabelProps={{ shrink: true }}
                                helperText={false}
                                size="small"
                            />
                        </div>
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}

export default withTranslation('translation')(ShiftInput);