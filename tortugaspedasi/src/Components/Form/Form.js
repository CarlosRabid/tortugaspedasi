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
            dimensionsPl: "",
            dimensionsPw: "",
            dimensionsCl: "",
            dimensionsCw: "",
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
            salvageable: "",
            daten: "",
            timen: "",
        }
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

    handleDimentions = async (id, value) => {
        console.log(id , value)
        let key = id
        
        // let index = Object.keys(key)[0]
        // console.log(index)
        // let propert = { ...this.state[index]}
        // let value = Object.values(key)[0]
        // console.log(state)
        // propert = value
        await this.setState({ [key] : value })
        // console.log(state)
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
    handleNest = async (input) => {
        console.log(input)
        let eggCount = { ...this.state.eggCount }
        let layTime = { ...this.state.layTime }
        let hatchEst = { ...this.state.hatchEst }
        let rehomed = { ...this.state.rehomed }
        let salvageable = { ...this.state.salvageable }
        let daten = {...this.state.daten}
        let timen = {...this.state.timen}
        eggCount = input.eggCount
        layTime = input.layTime
        hatchEst = input.hatchEst
        rehomed = input.rehomed
        salvageable = input.salvageable
        daten = input.daten
        timen = input.timen
        await this.setState({ eggCount, layTime, hatchEst, rehomed, salvageable , daten, timen})
    }
    handleLab = (input) => {
        let salvageable = { ...this.state.salvageable }
        salvageable = input.salvageable
        this.setState({ salvageable })
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

    handleGender = (input) => {
        let gender = { ...this.state.gender }
        gender = input
        this.setState({
            gender
        })
    }

    handleComments = (input) => { 
        let comments = {...this.state.comments}
        comments = input
        this.setState({
            comments
        })
    }

    submitNewForm = async (shift, observation, turtle, nest) => {
        let form = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName,
            date: this.state.date,
            species: this.state.species,   
        }
        console.log('working')
        await axios.post('http://localhost:7777/newForm', { shift, observation, turtle, nest })
    }

    handleExpandClick = (event) => {
        console.log(event.target)
        let showFpart = true
        // showFpart = !showFpart
        console.log(showFpart)
        this.setState({ showFpart: showFpart })
    };

    render() {
        const { t } = this.props;
        return (

            <div id="formContainer" >
                <h1>{t('TORTUGA WATCH FORM')}</h1>
                <div id="beachButton" >
                    <BeachLocations handleBeachInput={this.handleBeachInput} />
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
                    <Turtle handleGender={this.handleGender} handleCondition={this.handleCondition} handleSpecies={this.handleSpecies} forms={this.state.forms} handleTurtInput={this.state.handleTurtInput}
                        handleDimentions={this.handleDimentions} />
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
                    <NestInput forms={this.state.forms} handleNest={this.handleNest} />
                </ExpansionPanel>
                <Comments handleComments = {this.handleComments} />
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