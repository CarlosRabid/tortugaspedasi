import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShiftInput from './ShiftInput';
import ObservationInput from './ObservationInput';
import Turtle from './Turtle';
import NestInput from './NestInput';
import Fab from '@material-ui/core/Fab';
// import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import './form.css';
import { withTranslation } from 'react-i18next';
import { Paper, Typography, Collapse } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const axios = require('axios');

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            showNest: null,
            showFpart: false,
            hasTurtle: null,
            hasNest: null
        }

        // const useStyles = makeStyles(theme => ({
        //     root: {
        //         padding: theme.spacing(3, 2),
        //     },
        // }));
        // const classes = useStyles();
    }

    // submitForm = async (inputValue) => {
    //     let forms = [... this.state.forms]
    //     await forms.push(inputValue)
    //     this.checkTurtleData(forms)
    //     this.checkNestData(forms)
    //     console.log(this.state.forms)
    //     this.setState({
    //         forms
    //     })
    //     console.log(this.state.forms)
    // }

    // checkTurtleData = (formInput) => {
    //     const exist = function (element) {
    //         return element !== null
    //     }
    //     let hasTurtle = { ...this.state.hasTurtle }
    //     let result = formInput.turtleInput.some(exist)

    //     this.setState({
    //         hasTurtle: result
    //     })
    // }

    // checkNestData = (formInput) => {

    //     const exist = function (element) {
    //         return element !== null
    //     }
    //     let hasNest = { ...this.state.hasNest }
    //     let result = formInput.NestInput.some(exist)
    //     this.setState({
    //         hasNest: result
    //     })


    // }


    submitNewForm = async (shift, observation, turtle, nest) => {
        console.log('working')
        await axios.post('http://localhost:7777/newForm', { shift, observation, turtle, nest })
    }
    handleExpandClick = () => {
        let showFpart = true
        // showFpart = !showFpart
        console.log(showFpart)
        this.setState({ showFpart: showFpart })
    }

    render() {
        const { t, i18n } = this.props;
        return (
            <>
                <Paper className="form" style={{ margin: '5%', border: '9px solid #ccc' }}>
                    <h3>{t('TORTUGA WATCH FORM')}</h3>
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
                        <ShiftInput forms={this.state.forms} submitForm={this.submitForm} />
                        <br />
                        <ObservationInput forms={this.state.forms} getPosition={this.getPosition} submitForm={this.submitForm} />
                    </ExpansionPanel>
                    <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="turtles"
                        ><div className="helptext">
                                <Typography className="turtles" variant="h6" component="h6">{t('Turtle Information')}</Typography>
                            </div>
                        </ExpansionPanelSummary>
                        <Turtle forms={this.state.forms} submitForm={this.submitForm} />
                    </ExpansionPanel>
                    <Fab style={{ marginLeft: '79%' }} size="medium" color="secondary" aria-label="add" className="fab">
                        <></>
                    </Fab>
                    <div id="input" className="_nest">
                        {this.state.nestFound ?
                            <NestInput submitForm={this.submitForm} /> : null}
                    </div>                {/* <button className="submit" onClick={this.submitNewForm}>Submit</button> */}
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        className="submit"
                        // startIcon={<SaveIcon />}
                        onClick={this.submitNewForm}
                    >
                        Submit Form
                </Button>
                </Paper>
            </>
        )
    }
}


export default withTranslation('translation')(Form);