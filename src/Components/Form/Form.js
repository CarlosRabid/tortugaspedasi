import React, { Component } from 'react';
import ShiftInput from './ShiftInput';
import Turtle from './Turtle';
import NestInput from './NestInput';
import Button from '@material-ui/core/Button';
import './form.css';
import { withTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import BeachLocations from './BeachLocations';
import Comments from './ObservationComments';
import { Redirect } from 'react-router-dom';
import * as constant from './constant'

const axios = require('axios');

const dinamicRoute = (
    window.location.host.includes("localhost") ?
        constant.LOCAL_GET : constant.PROD_GET
)

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationLatitude: "",  // set-up by beach selection
            locationLongitude: "", // set-up by beach selection
            selectedBeach: "",
            firstName: null,
            lastName: null,
            date: null,
            time: "",
            species: null,
            gender: null,
            conditionstat: null,
            conditionstage: null,
            dimensionsPl: null,
            dimensionsPw: null,
            dimensionsCl: null,
            dimensionsCw: null,
            markingsRs: null,
            markingsLs: null,
            comments: "",
            showNest: null,
            showFpart: false,
            hasTurtle: null,
            hasNest: null,
            eggCount: null,
            layTime: null,
            hatchEst: null,
            rehomed: null,
            salvageable: null,
            daten: null,
            timen: null,
        }
    }

    handleBeachInput = async (input) => {
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
        let conditionstat = { ...this.state.conditionstat }
        conditionstage = input
        conditionstat = (input.charAt(0) == "a") ? 'Alive' : 'Death'
        await this.setState({ conditionstage, conditionstat })
    }
    handleName = async (first, last) => {
        let firstName = { ...this.state.firstName }
        let lastName = { ...this.state.lastName }
        firstName = first
        lastName = last
        await this.setState({ firstName, lastName })
        localStorage.setItem('firstName', this.state.firstName)
        localStorage.setItem('lastName', this.state.lastName)
    }

    handleDimentions = async (id, value) => {
        let key = id

        await this.setState({ [key]: value })
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
        let eggCount = { ...this.state.eggCount }
        let layTime = { ...this.state.layTime }
        let hatchEst = { ...this.state.hatchEst }
        let rehomed = { ...this.state.rehomed }
        let salvageable = { ...this.state.salvageable }
        let daten = { ...this.state.daten }
        let timen = { ...this.state.timen }
        eggCount = input.eggCount
        layTime = input.layTime
        hatchEst = input.hatchEst
        rehomed = input.rehomed
        salvageable = input.salvageable
        daten = input.daten
        timen = input.timen
        await this.setState({ eggCount, layTime, hatchEst, rehomed, salvageable, daten, timen })
    }
    handleLab = (input) => {
        let salvageable = { ...this.state.salvageable }
        salvageable = input.salvageable
        this.setState({ salvageable })
    }

    checkTurtleData = () => {
        let hasTurtle = { ...this.state.hasTurtle }
        let turtle = {
            species: this.state.species, gender: this.state.gender,
            conditionstat: this.state.conditionstat,
            conditionstage: this.state.conditionstage,
            dimensionsPl: this.state.dimensionsPl,
            dimensionsPw: this.state.dimensionsPw,
            dimensionsCl: this.state.dimensionsCl,
            dimensionsCw: this.state.dimensionsCw,
            markingsRs: this.state.markingsRs,
            markingsLs: this.state.markingsLs,
        }

        hasTurtle = Object.keys(turtle).some(function (k) {
            return turtle[k] !== null
        })

        this.setState({
            hasTurtle
        })
    }
    checkNest = () => {
        let hasNest = { ...this.state.hasNest }
        let nest = {
            eggCount: this.state.eggCount,
            layTime: this.state.layTime,
            hatchEst: this.state.hatchEst,
            rehomed: this.state.rehomed,
            salvageable: this.state.salvageable,
            layTime: this.state.daten,
        }

        hasNest = Object.keys(nest).some(function (k) {
            return nest[k] !== null
        })

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
        let comments = { ...this.state.comments }
        comments = input
        this.setState({
            comments
        })
    }

    submitNewForm = async (shift, observation, turtle, nest) => {
        await this.checkTurtleData()
        await this.checkNest()

        const firstName = this.state.firstName || localStorage.getItem("firstName")
        const lastName = this.state.lastName || localStorage.getItem("lastName")

        if(!(firstName && lastName)){
            return alert ("Please enter your first and last name")
        }

        if(!this.state.selectedBeach){
            return alert("Please select a beach")
        }

        let form = {
            shift: { firstName, lastName },
            observation:
            {
                date: Date(this.state.date),
                location: this.state.selectedBeach,
                moonPhase: 'First Quarter',
                tide: 'low-to-high',
                comments: this.state.comments
            },
            turtle:
            {
                condition: { status: this.state.conditionstat, stage: this.state.conditionstage },
                dimensions: { plain: { length: this.state.dimensionsPl, width: this.state.dimensionsPw }, curve: { length: this.state.dimensionsCl, width: this.state.dimensionsCw } },
                markings: { rightSide: this.state.markingsRs, leftSide: this.state.markingsLs },
                hasData: this.state.hasTurtle,
                species: this.state.species,
                gender: this.state.gender
            },
            nest:
            {
                hasData: this.state.hasNest,
                layTime: this.state.daten,
                eggCount: this.state.eggCount,
                hatchEst: this.state.daten,
                rehomed: this.state.rehomed,
                salvageable: this.state.salvageable
            },
        }
        if(navigator.onLine) {
            const response = await axios.post(`${dinamicRoute}/mega-form`,  form )
            console.log(response)
            console.log('new form saved!')
            alert('Successfully submitted')
        }
        else {
            let savedForms = JSON.parse(localStorage.getItem("savedForms") || "[]")
            savedForms.push(form)
            localStorage.setItem('savedForms', JSON.stringify(savedForms))
            console.log("Saved form locally for later post")
            alert('Cannot submit, will try again later')
        }
    }

    handleExpandClick = (event) => {
        let showFpart = true
        this.setState({ showFpart: showFpart })
    };

    render() {
        const { t } = this.props;

        if (!this.props.isLoggedIn()) { return <Redirect to="/" /> }

        return (

            <div id="formContainer" >
                <h1>{t('TORTUGA WATCH FORM')}</h1>
                <div id="beachButton" >
                    <BeachLocations handleBeachInput={this.handleBeachInput} />
                </div>
                <br />
                <ExpansionPanel  className="shift" >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="shift"
                    // style={{border: '10px'}}

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
                <Comments handleComments={this.handleComments} />
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#09bc8a', opacity: 0.9, marginLeft: '0.2em', marginTop: '0.1em' }}
                    size="medium"
                    className="submit"
                    onClick={this.submitNewForm}
                    margin="normal"
                >
                    {t(' Submit ')}
                </Button>
            </div>
        )
    }
}



export default withTranslation('translation')(Form);