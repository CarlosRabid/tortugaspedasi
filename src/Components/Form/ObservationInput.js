import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
// import { Button, Menu, MenuItem, TextField } from '@material-ui/core';
// const axios = require('axios')


class ObservationInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "", // placeholder but editable
            comments: "" //free input
        }
    }
    

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    addShift = () => {
        this.props.addShift(this.state.time, this.state.location, this.state.comments)
    }

    componentDidMount = () => {
        this.setState({ date: new Date() })
    }
    showMenu = () => {
        this.setState({ showMenu: true })
    }


    

    render() {
        // const { t, i18n } = this.props;
        return (
            <>
                {/* <Button size="medium" variant="outlined" color="inherit" className="observation" onClick={this.showMenu} style={{ marginLeft: '5%' }}>
                    {this.state.selectedBeach ? this.state.selectedBeach : t('Beach Location')}
                </Button>
                <Menu
                    // id="simple-menu"
                    anchorEl={this.state.showMenu}
                    keepMounted
                    open={Boolean(this.state.showMenu)}
                    onClose={this.handleClose}
                >
                    <MenuItem id="playaarenal" onClick={this.handleClose}>Playa El Arenal</MenuItem>
                    <MenuItem id="playatoro" onClick={this.handleClose}>Playa El Toro</MenuItem>
                    <MenuItem id="playalagarto" onClick={this.handleClose}>PLaya Lagarto</MenuItem>
                </Menu> */}
                {/* <div className="observation-component">Comments:
                <input className="searchInput-observationInput"
                        name="comments" onChange={this.handleInput}></input>
                </div> */}
                {/* <TextField
                    id="comments"
                    name="comments"
                    label={t('Comments')}
                    style={{ marginLeft: '5%' }}
                    placeholder={t('Observation notes...')}
                    // helperText="Full width!"
                    multiline
                    rowsMax="2"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleInput}
                    color="inherit"
                /> */}
            </>
        );

    }
}

export default withTranslation('translation')(ObservationInput);