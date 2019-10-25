import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
// import TextField from '@material-ui/core/TextField';
import { withTranslation } from 'react-i18next';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: ""
        }
    }
    render() {
        const { t } = this.props;
        // const height = 38;
        const marginLeft = '5%';
        const heightD = '10%';
        return <>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <Grid container justify="space-between" style={{ marginLeft: '7%' }}>
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
                            label={t('Time ')}
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
        </>
    }
}
export default withTranslation('translation')(DateInput);