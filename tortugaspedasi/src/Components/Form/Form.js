import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ShiftInput from './ShiftInput';
import Turtle from './Turtle';
import NestInput from './NestInput';
//import Fab from '@material-ui/core/Fab';
// import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import './form.css';
import { withTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
//import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BeachLocations from './BeachLocations';
import Comments from './ObservationComments';
const axios = require('axios');


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationLatitude: "",  // set-up by beach selection
            locationLongitude: "", // set-up by beach selection
            selectedBeach: "",
            firstName: "",
            lastName: "",
            date: "",
            time: "",
            species: "",
            gender: null,
            conditionstat: "",
            conditionstage: "",
            dimensionsPl: 0,
            dimensionsPw: 0,
            dimensionsCl: 0,
            dimensionsCw: 0,
            markingsRs: "",
            markingsLs: "",
            eggCount: "",
            layTime: "",
            hatchEst: "",
            rehomed: "",
            salvageable: "",
            comments: {},
            showNest: null,
            showFpart: false,
            hasTurtle: null,
            hasNest: null,
            eggCount: "",
            layTime: "",
            hatchEst: "",
            rehomed: "",
            salvageable: ""
        }

        // const useStyles = makeStyles(theme => ({
        //     root: {
        //         padding: theme.spacing(3, 2),
        //     },
        // }));
        // const classes = useStyles();
    }

    handleBeachInput = async (input) => {
        console.log(input)
        let locationLatitude = { ...this.state.locationLatitude }
        let locationLongitude = { ...this.state.locationLongitude }
        let selectedBeach = { ...this.state.selectedBeach }
        locationLatitude = input.locationLatitude
        locationLongitude = input.locationLongitude
        selectedBeach = input.selectedBeach
        await this.setState({ locationLatitude, locationLongitude, selectedBeach })
    }
    handleSpecies = async (input) => {
        let species = { ...this.state.species }
        species = input
        await this.setState({ species })
    }
    handleCondition = async (input) => {
        let conditionstage = { ...this.state.conditionstage }
        conditionstage = input
        await this.setState({ conditionstage })
    }
    handleName = async (first, last) => {
        let firstName = { ...this.state.firstName }
        let lastName = { ...this.state.lastName }
        firstName = first
        lastName = last
        await this.setState({ firstName, lastName })
    }
    handleDate = async (first, last) => {
        let date = { ...this.state.date }
        let time = { ...this.state.time }
        date = first
        time = last
        await this.setState({ date, time })
    }
    handleShift = async (input) => {
        let firstName = { ...this.state.firstName }
        let lastName = { ...this.state.lastName }
        let date = { ...this.state.date }
        let time = { ...this.state.time }
        firstName = input.firstName
        lastName = input.lastName
        date = input.date
        time = input.time
        await this.setState({ firstName, lastName, date, time })
    }
    handleNest = (input) => {
        let eggCount = { ...this.state.eggCount }
        let layTime = { ...this.state.layTime }
        let hatchEst = { ...this.state.hatchEst }
        let rehomed = { ...this.state.rehomed }
        eggCount = input.eggCount
        layTime = input.layTime
        hatchEst = input.hatchEst
        rehomed = input.rehomed
        this.setState({ eggCount, layTime, hatchEst, rehomed })
    }
    handleLab = (input) => {
        let salvageable = { ...this.state.salvageable }
        salvageable = input.salvageable
        this.setState({ salvageable })
    }

    submitForm = async (input) => {
        // let idx = Object.keys
        // let state = {...this.state}
        // state[] = { ...this.state.locationLatitude }
        // let locationLongitude = { ...this.state.locationLongitude }
        // let selectedBeach = { ...this.state.selectedBeach }
        // let forms = {... this.state.forms}
        // let idx = Object.keys(forms).length
        // // await forms[0]=inputValue
        // console.log(inputValue)
        // this.checkTurtleData(forms)
        // // this.checkNestData(forms)
        // this.setState({
        //     forms
        // })
        // console.log(this.state.forms)
    }

    checkTurtleData = (formInput) => {
        console.log(formInput)
        const exist = function (element) {
            return element !== null
        }
        let hasTurtle = { ...this.state.hasTurtle }
        // hasTurtle = formInput.turtleInput.some(exist)

        this.setState({
            hasTurtle
        })
    }

    checkNestData = (formInput) => {

        const exist = function (element) {
            return element !== null
        }
        let hasNest = { ...this.state.hasNest }
        hasNest = formInput.NestInput.some(exist)
        this.setState({
            hasNest
        })
    }



    submitNewForm = async (shift, observation, turtle, nest) => {
        console.log('working')
        await axios.post('http://localhost:7777/newForm', { shift, observation, turtle, nest })
    }
    handleExpandClick = (event) => {
        console.log(event.target)
        let showFpart = true
        // showFpart = !showFpart
        console.log(showFpart)
        this.setState({ showFpart: showFpart })
    }

    handleNest = (input) => {

        let eggCount = [... this.state.eggCount]
        let layTime = [...this.state.layTime]
        let hatchEst = [...this.state.hatchEst]
        let rehomed = [...this.state.rehomed]
        let salvageable = [...this.state.salvageable]
    }

    render() {
        const { t } = this.props;
        return (

            <div id="formContainer" >
                <h1>{t('TORTUGA WATCH FORM')}</h1>
                <div id="beachButton" >
                    <BeachLocations />
                </div>
                <br />
                <br />
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="shift"
                    >
                        <div className="helptext">
                            <Typography className="Shift" variant="h6" component="h6">{t('Shift')}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ShiftInput forms={this.state.forms} handleName={this.handleName} handleDate={this.handleDate} />
                    <br />
                </ExpansionPanel>
                <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="turtles"
                    >
                        <div className="helptext">
                            <Typography className="turtles" variant="h6" component="h6">{t('Turtle Information')}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <Turtle handleCondition={this.handleCondition} handleSpecies={this.handleSpecies} forms={this.state.forms} handleTurtInput={this.state.handleTurtInput} />
                </ExpansionPanel>
                <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="turtles"
                    >
                        <div className="helptext">
                            <Typography className="nests" variant="h6" component="h6">{t('Nest Information')}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <NestInput forms={this.state.forms} handleNest={this.state.handleNest} />
                </ExpansionPanel>
                <Comments />
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="submit"
                    // startIcon={<SaveIcon />}
                    onClick={this.submitNewForm}
                >
                    {t('Submit Form')}
                </Button>
            </div>
        )
    }
}


export default withTranslation('translation')(Form);