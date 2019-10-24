import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withTranslation } from 'react-i18next';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import '../Form/turtle.css';
import { MenuList, InputAdornment, Input, InputLabel, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HealingIcon from '@material-ui/icons/Healing';
import Icon from '@material-ui/core/Icon';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { faMedkit } from '@fortawesome/free-solid-svg-icons'



class TurtleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            anchorStat: null,
            selected: null,
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
            commentaries: "",
            menuItems: [
                {
                    key: "alive",
                    caption: "Alive",
                    subMenuItems: [
                        {
                            key: "aliveh",
                            caption: "Alive Healthy",
                            onClick: () => { }
                        },
                        {
                            key: "alivei",
                            caption: "Alive Injured",
                            onClick: () => { }
                        },
                    ]
                },
                {
                    key: "death",
                    caption: "Death",
                    subMenuItems: [
                        {
                            key: "death1",
                            caption: "Death Stage 1",
                            onClick: () => { }
                        },
                        {
                            key: "death2",
                            caption: "Death Stage 2",
                            onClick: () => { }
                        },
                        {
                            key: "death3",
                            caption: "Death Stage 3",
                            onClick: () => { }
                        },
                        {
                            key: "death4",
                            caption: "Death Stage 4",
                            onClick: () => { }
                        }
                    ]
                }
            ]
        }
    }



    handleInput = (event) => {
        console.log(event.target.id)
        this.setState({ [event.target.id]: event.target.value })
        let turtlestate = { ...this.state }
        console.log(this.state)
        this.props.updateTurtle(turtlestate)
    }
    addTurtleInput = () => {
        this.props.addTurtleInput(this.state.species, this.state.gender,
            this.state.condition.status, this.state.condition.stage,
            this.state.dimensions.plain.length, this.state.dimensions.plain.width, this.state.dimensions.curve.length, this.state.dimensions.curve.width,
            this.state.markings.rightSide, this.state.markings.leftSide)
    }

    handleClick = (event) => {
        // let state = { ...this.state }
        let anchorEl = { ...this.state.anchorEl }
        // console.log(event.currentTarget.id)
        // let anchorStat = state.anchorStat
        anchorEl = event.currentTarget.id
        return this.setState({ anchorEl })
        // setAnchorEl(event.currentTarget);
    };
    handleMenu = (event) => {
        let anchorStat = { ...this.state.anchorStat }
        anchorStat = event.currentTarget.id
        return this.setState({ anchorStat })
        // setAnchorEl(event.currentTarget);
    };
    handleClose = (event) => {
        // setAnchorEl(null);
        // let anchorEl = {...this.state.anchorEl}
        let result = { ...this.state.species }
        result = event.currentTarget.id
        console.log(result)
        if (result.length == 2) {
            return this.setState({ species: result, anchorEl: null })

        } else { return this.setState({ conditionstage: result, anchorStat: null }) }
        // console.log(this.state)
    };
    handleButton = (event) => {
        // setAnchorEl(null);
        // let anchorEl = {...this.state.anchorEl}
        let selected = { ...this.state.selected }
        selected = event.currentTarget.id
        console.log(selected)
        this.setState({ selected })
    };

    handleRadioButton = event => {
        let gender = { ...this.state.gender };
        gender = event.currentTarget.value
        console.log(event.currentTarget.value)
        this.setState({ gender });
    };

    // there is className = "child-turtle" for nested children to help with the CSS

    render() {
        const { t, i18n } = this.props;

        return (
            <div className="turtle-container" >
                <Button size="medium" id="species"
                    variant="outlined" color="inherit"
                    className="observation" onClick={this.handleClick}
                    style={{ marginLeft: '16%' }}
                >
                    {this.state.species ? `Species: ${this.state.species}` : t('>> Select Species ')}
                </Button>
                <Menu
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose} id="Cc">Caretta caretta</MenuItem>
                    <MenuItem onClick={this.handleClose} id="Lo">Lepidochelys olivacea</MenuItem>
                    <MenuItem onClick={this.handleClose} id="Cm">Chelonia mydas</MenuItem>
                    <MenuItem onClick={this.handleClose} id="Ei">Eretmochelys imbricata</MenuItem>
                    <MenuItem onClick={this.handleClose} id="Dc">Dermochelys coriacea</MenuItem>
                </Menu>
                <br />
                <RadioGroup row aria-label="Gender" name="gender2" value={this.state.gender} onChange={this.handleRadioButton} style={{ justifyContent: 'center', marginTop: '2%' }}><FormControlLabel
                    display="block"
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                    // labelPlacement="start"
                    id="female"
                />
                    <FormControlLabel
                        display="block"
                        value="male"
                        control={<Radio color="secondary" />}
                        label="Male"
                        // labelPlacement="start"
                        id="male"
                    />
                </RadioGroup>
                <Grid item sm={12} md={6}>
                    {t('Found Alive')} :
                    <ToggleButtonGroup
                        value={this.state.selected}
                        exclusive
                        onChange={this.handleButton}
                        aria-label="Alive"
                        style={{ justifyContent: "center" }}
                    >
                        <ToggleButton id="alv1" value="alv1" aria-label="Alive - Healthy"
                            style={{ height: '6vh', justifySelf: "center", marginLeft: '13%' }}>
                            <FontAwesomeIcon icon={faHeartbeat} />
                        </ToggleButton>
                        <ToggleButton id="alv2" value="alv2" 
                        style={{ height: '6vh', justifySelf: "center" }} 
                        color="secondary" aria-label="Alive - Injured">
                            <FontAwesomeIcon icon={faMedkit} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <br />
                    {t('Found Death')} :
                 <ToggleButtonGroup
                        value={this.state.selected}
                        exclusive
                        onChange={this.handleButton}
                        aria-label="Deceased"
                        style={{ justifyContent: "center" }}
                    >
                        <ToggleButton id="dea1" value="dea1" aria-label="death1"
                            style={{ height: '6vh', justifySelf: "center", marginLeft: '16%' }}
                        >
                            <FontAwesomeIcon icon={faHeartbeat} />
                        </ToggleButton>
                        <ToggleButton id="dea2" value={'dea2'}
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary" aria-label="death2">
                            <FontAwesomeIcon icon={faMedkit} />
                        </ToggleButton>
                        <ToggleButton id="dea3" value='dea3' aria-label="death3"
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary"
                        >
                            <FontAwesomeIcon icon={faHeartbeat} />
                        </ToggleButton>
                        <ToggleButton id="dea4" value='dea4' aria-label="death4"
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary"
                        >
                            <FontAwesomeIcon icon={faMedkit} />
                        </ToggleButton>
                        <ToggleButton id="dea5" value='dea5' aria-label="death5"
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary"
                        >
                            <FontAwesomeIcon icon={faHeartbeat} />
                        </ToggleButton>
                        <ToggleButton id="dea6" value='dea6' aria-label="death6"
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary" >
                            <FontAwesomeIcon icon={faMedkit} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                {/* <div className="child-turtle">
                                 <span className="new-turtle-1"> Length: </span>
                                 <Input
                                 id="dimensionsPl"
                                 value={this.state.dimensionsPl}
                                 onChange={this.handleInput}
                                 endAdornment={<InputAdornment position="end">mts</InputAdornment>}
                                 aria-describedby="measure-helper-text"
                                 inputProps={{
                                     'aria-label': 'measure',
                                 }}
                                 />
                             </div>  */}
                <br />
                {t('Dimensions in cms')}
                <br />
                <div className="dimensions">
                    <div className="turtle-dimensions" >
                        {t('Plain      ')}
                        <br />
                        <TextField
                            value={this.state.dimensionsPl}
                            onChange={this.handleInput}
                            label="LENGTH"
                            id="dimensionsPl"
                            className="turtle"
                            size="small"
                            style={{ width: '33%', marginLeft: '5%' }}
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">cms</InputAdornment>,
                        // }}
                        />
                        <TextField
                            value={this.state.dimensionsPw}
                            onChange={this.handleInput}
                            label="WIDTH"
                            id="dimensionsPw"
                            className="turtle"
                            size="small"
                            style={{ width: '33%', marginLeft: '5%' }}
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">cms</InputAdornment>,
                        // }}
                        />
                    </div>
                    <div className="turtle-dimensions" >
                        {t(' Curve ')}
                        <br />
                        <TextField
                            value={this.state.dimensionsCl}
                            onChange={this.handleInput}
                            label="LENGTH"
                            id="dimensionsCl"
                            className="turtle"
                            size="small"
                            style={{ width: '33%', marginLeft: '4%' }}
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">cms</InputAdornment>,
                        // }}
                        />
                        <TextField
                            value={this.state.dimensionsCw}
                            onChange={this.handleInput}
                            label="WIDTH"
                            id="dimensionsCw"
                            className="turtle"
                            size="small"
                            style={{ width: '33%', marginLeft: '4%' }}
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">cms</InputAdornment>,
                        // }}
                        />
                    </div>
                </div>
                <br />
                <div className="markings">
                    {t('Markings')}
                    <InputLabel htmlFor="component-simple">{t('Right Side')}: </InputLabel>
                    <Input id="markingsRs" value={this.state.markingsRs} onChange={this.handleInput} />
                    <InputLabel htmlFor="component-simple">Left Side: </InputLabel>
                    <Input id="markingsLs" value={this.state.markingsLs} onChange={this.handleInput} />
                </div>
                <br />
            </div>
        )
    }
}

export default withTranslation('translation')(TurtleInput);