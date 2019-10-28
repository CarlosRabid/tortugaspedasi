import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withTranslation } from 'react-i18next';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../Form/turtle.css';
import { Input, InputLabel, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faMedkit, faStar, faStarHalfAlt, faStarHalf, faGrinStars, faStarOfLife, faBan } from '@fortawesome/free-solid-svg-icons'
// import { green } from '@material-ui/core/colors';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import HealingIcon from '@material-ui/icons/Healing';
// import Icon from '@material-ui/core/Icon';



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
        this.setState({ [event.target.id]: event.target.value })
        this.props.handleDimentions(event.target.id, event.target.value )
        let turtlestate = { ...this.state }
    }
    addTurtleInput = () => {
        this.props.addTurtleInput(this.state.species, this.state.gender,
            this.state.condition.status, this.state.condition.stage,
            this.state.dimensions.plain.length, this.state.dimensions.plain.width, this.state.dimensions.curve.length, this.state.dimensions.curve.width,
            this.state.markings.rightSide, this.state.markings.leftSide)
    }

    handleClick = (event) => {
        let anchorEl = { ...this.state.anchorEl }
        anchorEl = event.currentTarget.id
        return this.setState({ anchorEl })
    };
    handleMenu = (event) => {
        let anchorStat = { ...this.state.anchorStat }
        anchorStat = event.currentTarget.id
        return this.setState({ anchorStat })
    };
    handleClose = async (event) => {
        // setAnchorEl(null);
        // let anchorEl = {...this.state.anchorEl}
        let result = { ...this.state.species }
        result = event.currentTarget.id

        if (result.length === 2) {
           this.props.handleSpecies(result)
            this.setState({ species: result, anchorEl: null })
            return 

        } else { 
            this.props.handleCondition({result})
            return this.setState({ conditionstage: result, anchorStat: null }) }
    };
    handleButton = (event) => {
        let selected = { ...this.state.selected }
        selected = event.currentTarget.id
        this.props.handleCondition(selected)
        this.setState({ selected })
    };

    handleRadioButton = event => {
        let gender = { ...this.state.gender };
        gender = event.currentTarget.value
        this.props.handleGender(gender)
        this.setState({ gender });
    };


    // there is className = "child-turtle" for nested children to help with the CSS

    render() {
        const { t } = this.props;

        return (
            <div className="turtle-container" >
                <Button size="medium" id="species"
                    variant="outlined" color="inherit"
                    className="observation" onClick={this.handleClick}
                    style={{ marginLeft: '16%' }}
                >
                    {this.state.species ? `Species: ${this.state.species}` : t('Select Species')}
                </Button>
                <Menu
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose} name="species" id="Cc" >Caretta caretta</MenuItem>
                    <MenuItem onClick={this.handleClose} name="species" id="Lo">Lepidochelys olivacea</MenuItem>
                    <MenuItem onClick={this.handleClose} name="species" id="Cm">Chelonia mydas</MenuItem>
                    <MenuItem onClick={this.handleClose} name="species" id="Ei">Eretmochelys imbricata</MenuItem>
                    <MenuItem onClick={this.handleClose} name="species" id="Dc">Dermochelys coriacea</MenuItem>
                </Menu>
                <br />
                <RadioGroup row aria-label="Gender" name="gender2" value={this.state.gender} onChange={this.handleRadioButton} style={{ justifyContent: 'center', marginTop: '2%' }}><FormControlLabel
                    display="block"
                    value="female"
                    control={<Radio color="primary" />}
                    label= {t('Female')}
                    // labelPlacement="start"
                    id="female"
                />
                    <FormControlLabel
                        display="block"
                        value="male"
                        control={<Radio color="secondary" />}
                        label={t('Male')}
                        // labelPlacement="start"
                        id="male"
                    />
                </RadioGroup>
                <Grid item sm={12} md={6}>
                    {t('Found alive')} :
                    <ToggleButtonGroup
                        value={this.state.selected}
                        exclusive
                        onChange={this.handleButton}
                        aria-label="Alive"
                        style={{ justifyContent: "center" }}
                    >
                        <ToggleButton id="alv1" value="alv1" aria-label="Alive - Healthy"
                            style={{ height: '6vh', justifySelf: "center", marginLeft: '51%' }}>
                            <FontAwesomeIcon icon={faHeartbeat} />
                        </ToggleButton>
                        <ToggleButton id="alv2" value="alv2" 
                        style={{ height: '6vh', justifySelf: "center" }} 
                        color="secondary" aria-label="Alive - Injured">
                            <FontAwesomeIcon icon={faMedkit} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <br />
                    {t('Found dead')} :
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
                            <FontAwesomeIcon icon={faStar} />
                        </ToggleButton>
                        <ToggleButton id="dea2" value={'dea2'}
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary" aria-label="death2">
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </ToggleButton>
                        <ToggleButton id="dea3" value='dea3' aria-label="death3"
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary"
                        >
                            <FontAwesomeIcon icon={faStarHalf} />
                        </ToggleButton>
                        <ToggleButton id="dea4" value='dea4' aria-label="death4"
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary"
                        >
                            <FontAwesomeIcon icon={faStarOfLife} />
                        </ToggleButton>
                        <ToggleButton id="dea5" value='dea5' aria-label="death5"
                            style={{ height: '6vh', justifySelf: "center" }}
                            color="secondary"
                        >
                            <FontAwesomeIcon icon={faBan} />
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
                {t('Measurements in cm')}
                <br />
                <br />
                <div className="dimensions">
                    <div className="turtle-dimensions" >
                        {t('Straight measurement')}
                        <br />
                        <TextField
                            value={this.state.dimensionsPl}
                            onChange={this.handleInput}
                            label= {t('Length')}
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
                            label={t('Width')}
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
                    {t('Curve measurement')}
                        <br />
                        <TextField
                            value={this.state.dimensionsCl}
                            onChange={this.handleInput}
                            label={t('Length')}
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
                            label={t('Width')}
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
                {t('Marks on the shell')}
                    <InputLabel htmlFor="component-simple">{t('Right Side')}: </InputLabel>
                    <Input id="markingsRs" value={this.state.markingsRs} onChange={this.handleInput} />
                    <InputLabel htmlFor="component-simple">{t('Left Side')}: </InputLabel>
                    <Input id="markingsLs" value={this.state.markingsLs} onChange={this.handleInput} />
                </div>
                <br />
            </div>
        )
    }
}

export default withTranslation('translation')(TurtleInput);