import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
import { MenuList, InputAdornment, Input, InputLabel } from '@material-ui/core';


class TurtleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            anchorStat: null,
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
            menuItems : [
            {
              key: "alive",
              caption: "Alive",
              subMenuItems: [
                {
                  key: "aliveh",
                  caption: "Alive Healthy",
                  onClick: () => {}
                },
                {
                  key: "alivei",
                  caption: "Alive Injured",
                  onClick: () => {}
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
                    onClick: () => {}
                  },
                  {
                    key: "death2",
                    caption: "Death Stage 2",
                    onClick: () => {}
                  },
                  {
                    key: "death3",
                    caption: "Death Stage 3",
                    onClick: () => {}
                  },
                  {
                    key: "death4",
                    caption: "Death Stage 4",
                    onClick: () => {}
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
        let anchorEl = {...this.state.anchorEl}
        // console.log(event.currentTarget.id)
        // let anchorStat = state.anchorStat
        anchorEl = event.currentTarget.id
       return this.setState({ anchorEl})
        // setAnchorEl(event.currentTarget);
    };
    handleMenu = (event) => {
        let anchorStat = {...this.state.anchorStat}
        anchorStat=event.currentTarget.id
       return this.setState({ anchorStat})
        // setAnchorEl(event.currentTarget);
    };
    handleClose = (event) => {
        // setAnchorEl(null);
        // let anchorEl = {...this.state.anchorEl}
        let result = { ...this.state.species }
        result = event.currentTarget.id
        console.log(result.length)
        if (result.length==2) {
           return this.setState({ species: result, anchorEl: null }) 
            
        }else{return this.setState({conditionstage: result, anchorStat: null })}
        // console.log(this.state)
    };

    handleRadioButton = event => {
        let gender = { ...this.state.gender };
        gender = event.currentTarget.value
        console.log(event.currentTarget.value)
        this.setState({ gender });
    };

    // there is className = "child-turtle" for nested children to help with the CSS

    render() {

        return (
            <div className="turtle-container">
                <h2>Turtle Information</h2>

                <div className="turtle-component">
                    <div className="new-turtle-1">
                        {/* <span className="new-turtle-1"> Species: </span> 
                         <input className="searchInput underline new-turtle-2"
                            name="species" id="species" onChange={this.handleInput}></input> */}
                        <Button id="species" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                            Species: </Button>
                        <Menu
                            id="simple-menu"
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
                    </div>

                    <span className="radiobut">
                        {/* <span className="new-turtle-1"> Gender: </span>
                        <input className="searchInput underline new-turtle-2"
                            name="gender" id="gender" onChange={this.handleInput}></input> */}
                        <RadioGroup aria-label="gender" name="gender2" value={this.state.gender} onChange={this.handleRadioButton}>
                           Gender: <FormControlLabel
                            display="block"
                                value="female"
                                control={<Radio color="primary" />}
                                label="Female"
                                // labelPlacement="start"
                                id="female"
                            /><FormControlLabel
                            display="block"
                                value="male"
                                control={<Radio color="secondary" />}
                                label="Male"
                                // labelPlacement="start"
                                id="male"
                            /></RadioGroup>
                    </span>

                        <div className="new-turtle-1">
                            Condition
                        {/* <div className="child-turtle">
                                <span className="new-turtle-1"> Status: </span>
                                <input className="searchInput underline new-turtle-2"
                                    name="conditionstat" id="conditionstat" onChange={this.handleInput}></input>
                            </div>

                            <div className="child-turtle">
                                <span className="new-turtle-1"> Stage: </span>
                                <input className="searchInput underline new-turtle-2"
                                    name="conditionstage" id="conditionstage" onChange={this.handleInput}></input>
                            </div> */}
                            <Button id="conditions" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleMenu}>
                            Condition & Stage: </Button>
                        <Menu
                            id="conditions"
                            anchorEl={this.state.anchorStat}
                            keepMounted
                            open={Boolean(this.state.anchorStat)}
                            onClose={this.handleClose}
                            MenuItem ={this.state.menuItems}
                        >{this.state.menuItems.map(i => { return <MenuItem id={i.key} >{i.caption}</MenuItem>})} </Menu>

                        </div>

                        <div className="new-turtle-1">
                            Dimensions
    
                        <div className="child-turtle" className="new-turtle-1"> Plain </div>

                            <div className="child-turtle">
                                <span className="new-turtle-1"> Length: </span>
                                {/* <input className="searchInput underline new-turtle-2"
                                    name="dimensions.plain.length" id="dimensionsPl" onChange={this.handleInput}></input> */}
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
                            </div>

                            <div className="child-turtle">
                                <span className="new-turtle-1"> Width: </span>
                                {/* <input className="searchInput underline new-turtle-2"
                                    name="dimensions.plain.width" id="dimensionsPw" onChange={this.handleInput}></input> */}
                                    <Input
                                    id="dimensionsPw"
                                    value={this.state.dimensionsPw}
                                    onChange={this.handleInput}
                                    endAdornment={<InputAdornment position="end">mts</InputAdornment>}
                                    aria-describedby="measure-helper-text"
                                    inputProps={{
                                      'aria-label': 'measure',
                                    }}
                                    />
                            </div>

                            <div className="child-turtle" className="new-turtle-1"> Curve </div>

                            <div className="child-turtle">
                                <span className="new-turtle-1"> Width: </span>
                                {/* <input className="searchInput underline new-turtle-2"
                                    name="dimensions.plain.width" id="dimensionsCw" onChange={this.handleInput}></input> */}
                            <Input
                                    id="dimensionsCw"
                                    value={this.state.dimensionsCw}
                                    onChange={this.handleInput}
                                    endAdornment={<InputAdornment position="end">mts</InputAdornment>}
                                    aria-describedby="measure-helper-text"
                                    inputProps={{
                                      'aria-label': 'measure',
                                    }}
                                    />
                            </div>

                            <div className="child-turtle">
                                <span className="new-turtle-1"> Length: </span>
                                {/* <input className="searchInput underline new-turtle-2"
                                    name="dimensions.plain.length" id="dimensionsCl" onChange={this.handleInput}></input> */}
                            <Input
                                    id="dimensionsCl"
                                    value={this.state.dimensionsCl}
                                    onChange={this.handleInput}
                                    endAdornment={<InputAdornment position="end">mts</InputAdornment>}
                                    aria-describedby="measure-helper-text"
                                    inputProps={{
                                      'aria-label': 'measure',
                                    }}
                                    />
                            </div>

                        </div>

                        <div className="new-turtle-1">
                            Markings
    
                        <div className="child-turtle">
                                {/* <span className="new-turtle-1"> Right Side: </span>
                                <input className="searchInput underline new-turtle-2"
                                    name="markings.rightSide" id="markingsRs" onChange={this.handleInput}></input> */}
                                <InputLabel htmlFor="component-simple">Right Side: </InputLabel>
                                <Input id="markingsRs" value={this.state.markingsRs} onChange={this.handleInput} />
                            </div>

                            <div className="child-turtle">
                                {/* <span className="new-turtle-1"> Left Side: </span>
                                <input className="searchInput underline new-turtle-2"
                                    name="markings.leftSide" id="markingsLs" onChange={this.handleInput}></input> */}
                            <InputLabel htmlFor="component-simple">Left Side: </InputLabel>
                                <Input id="markingsLs" value={this.state.markingsLs} onChange={this.handleInput} />
                            </div>

                        </div>
                    </div>
                </div>

                );
            }
        }
        
export default TurtleInput;