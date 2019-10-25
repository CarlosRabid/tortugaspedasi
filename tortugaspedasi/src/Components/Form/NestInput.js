import React, { Component } from 'react';
import DateInput from './DateInput';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { TextField } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

class NestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eggCount: "",
            layTime: "",
            hatchEst: "",
            rehomed: "",
            salvageable: "",

        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
        this.props.handleNest(this.state)
    }
    handleRadioButton = event => {
        let salvageable = { ...this.state.salvageable };
        salvageable = event.currentTarget.value
        console.log(event.currentTarget.value)
        this.setState({ salvageable });
    };

    render() {
        return <>
            {/* <div className="new-nest-grid">
                    <span className="new-nest-1"> Number of eggs: </span>
                    <input className="searchInput underline new-nest-2"
                        name="eggCount" onChange={this.handleInput}></input>

                </div> */}
            <TextField
                value={this.state.eggCount}
                onChange={this.handleInput}
                label="Number eggs"
                id="eggCount"
                className="searchInput"
                size="small"
                style={{ width: '33%', marginLeft: '5%' }}
            // InputProps={{
            //     startAdornment: <InputAdornment position="start">cms</InputAdornment>,
            // }}
            />
            <div className="new-nest-grid">
                <span className="new-nest-1"> Estimated Laying Time: </span>
                {/* <form>
                        <label>
                            Date:
                            <input type="date" name="layTime" value={this.state.layTime} onChange={this.handleInput} /></label>
                    </form> */}
                <DateInput />
            </div>
            <div className="new-nest-grid">
                <span className="new-nest-1"> Estimated Hatching Time: </span>
                {/* <form>
                        <label>
                        Date:
                        <input type="date" name="hatchEst" value={this.state.hatchEst} onChange={this.handleInput} /></label>
                    </form> */}
                <DateInput />
            </div>
            <div className="new-nest-grid" onChange={this.handleInput}>
                <span className="new-nest-1"> Taken to Lab: </span>
                <RadioGroup row aria-label="Lab" name="nestlab" value={this.state.salvageable} onChange={this.handleRadioButton} style={{ justifyContent: 'center', marginTop: '2%' }}><FormControlLabel
                    display="block"
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                    // labelPlacement="start"
                    id="yes"
                />
                    <FormControlLabel
                        display="block"
                        value="no"
                        control={<Radio color="secondary" />}
                        label="No"
                        // labelPlacement="start"
                        id="no"
                    />
                </RadioGroup>
            </div>
        </>


    }
}

export default NestInput;
