import React, { Component } from 'react';
import DateInput from './DateInput';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withTranslation } from 'react-i18next';
// import Grid from '@material-ui/core/Grid';
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
            daten: "",
            timen: ""

        }
    }

    handleInput = async (event) => {
        await this.setState({ [event.target.name]: event.target.value })
        return this.props.handleNest(this.state)
    }
    handleDaten= async (input) => {
        let daten = {...this.state.daten}
        daten = input
        await this.setState({ daten })
        return this.props.handleNest(daten)
    }
    handleRadioButton = async (event) => {
        let salvageable = { ...this.state.salvageable };
        salvageable = event.currentTarget.value
        
        await this.setState({ salvageable });
        return this.props.handleNest(this.state)
    };

    render() {
        const { t } = this.props;

        return <>
            {/* <div className="new-nest-grid">
                    <span className="new-nest-1"> Number of eggs: </span>
                    <input className="searchInput underline new-nest-2"
                        name="eggCount" onChange={this.handleInput}></input>

                </div> */}
            <TextField
                value={this.state.eggCount}
                onChange={this.handleInput}
                name="eggCount"
                label={t('Number of eggs')}
                id="eggCount"
                className="searchInput"
                size="small"
                style={{ width: '33%', marginLeft: '5%' }}
            // InputProps={{
            //     startAdornment: <InputAdornment position="start">cms</InputAdornment>,
            // }}
            />
            <div className="new-nest-grid">
                <span className="new-nest-1"> {t('Estimated laying time')}: </span>
                {/* <form>
                        <label>
                            Date:
                            <input type="date" name="layTime" value={this.state.layTime} onChange={this.handleInput} /></label>
                    </form> */}
                <DateInput handleDaten={this.handleDaten} />
            </div>
            <div className="new-nest-grid">
                <span className="new-nest-1"> {t('Estimated hatching time')}: </span>
                {/* <form>
                        <label>
                        Date:
                        <input type="date" name="hatchEst" value={this.state.hatchEst} onChange={this.handleInput} /></label>
                    </form> */}
                <DateInput handleDaten={this.handleDaten} />
            </div>
            <div className="new-nest-grid" >
                <span className="new-nest-1"> {t('Taken to lab')}: </span>
                <RadioGroup row aria-label="Lab" name="nestlab" 
                value={this.state.salvageable} onChange={this.handleRadioButton} 
                style={{ justifyContent: 'center', marginTop: '2%' }}><FormControlLabel
                    display="block"
                    value="yes"
                    control={<Radio color="primary" />}
                    label={t('Yes')}
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

export default withTranslation('translation')(NestInput);
