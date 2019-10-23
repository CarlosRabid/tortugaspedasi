import React, { Component } from 'react';
const axios = require('axios')
import { withTranslation } from 'react-i18next';
import { Button, Menu, MenuItem, TextField } from '@material-ui/core';


let beaches = {
    playatoro: {
        name: "Playa El Toro",
        latitude: 7.530178,
        longitude: -80.003034
    },
    playaarenal: {
        name: "Playa El Arenal",
        latitude: 7.559493,
        longitude: -80.019275
    },
    playalagarto: {
        name: "Playa Lagarto",
        latitude: 7.506391,
        longitude: -79.999284
    }
}


class ObservationInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "", // placeholder but editable
            locationLatitude: "",  // set-up by beach selection
            locationLongitude: "", // set-up by beach selection
            moonPhase: "",
            comments: "", //free input
            showMenu: false,
            selectedBeach: null

        }
    }
    handleLocation = async (event) => {
        console.log(event.target.value)
        let currentBeach = event.target.value ? beaches[event.target.value] : { latitude: "", longitude: "" }
        let locationLatitude = { ...this.state.locationLatitude }
        let locationLongitude = { ...this.state.locationLongitude }
        locationLatitude = currentBeach.latitude
        locationLongitude = currentBeach.longitude
        await this.setState({ locationLatitude, locationLongitude })
    }
    
    // getMoonphase = async () => {
    //     let currentBeach = event.target.value ? beaches.find(b => b.name === event.target.value) : { latitude: "", longitude: "" }
    //     let lat = { ...this.state.locationLatitude }
    //     let long = { ...this.state.locationLongitude }
    //     lat = currentBeach.latitude
    //     long = currentBeach.longitude 
    //     let date = new Date 
    //     let moonPhase = await axios.get(`https://localhost:7777/solunar/${lat},${long},${date},-5`)
    //     console.log(moonPhase)

    // }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
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
    handleClose = (event) => {
        let idx = event.target.id
        let currentBeach = beaches[idx]
        let locationLatitude = { ...this.state.locationLatitude }
        let locationLongitude = { ...this.state.locationLongitude }
        let showMenu = { ...this.state.showMenu }
        let selectedBeach = { ...this.state.selectedBeach }
        console.log(currentBeach)
        locationLatitude = currentBeach.latitude
        locationLongitude = currentBeach.longitude
        showMenu = null
        selectedBeach = currentBeach.name
        this.setState({ locationLatitude, locationLongitude, showMenu, selectedBeach })
    }


    
    // getDate2 = () => {
    //     let currentDate = new Date();
    //     let date = currentDate.getDate();
    //     let month = currentDate.getMonth();
    //     let year = currentDate.getFullYear();
    //     let monthDateYear = (month + 1) + "/" + date + "/" + year;
    //     return monthDateYear
    // }

    // getDate = () => {
    //     let today = new Date().toLocaleDateString(undefined, {
    //         day: '2-digit',
    //         month: '2-digit',
    //         year: 'numeric'
    //     })
    //     return today
    // }

    render() {
        const { t, i18n } = this.props;
        let date = new Date()
        return (
            <>

                {/* <div>
                    <span>Location:</span>
                    <select onChangeCapture={this.handleLocation}>
                        <option value="" >Select</option>
                        <option value="Playa El Arenal"  >Playa El Arenal</option>
                        <option value="Playa El Toro" >Playa El Toro</option>
                        <option value="Playa Lagarto" >Playa Lagarto</option>
                    </select>
                </div> */}
                <Button size="medium" variant="outlined" color="inherit" className="observation" onClick={this.showMenu} style={{ marginLeft: '5%' }}>
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
                </Menu>
                {/* <div className="observation-component">Comments:
                <input className="searchInput-observationInput"
                        name="comments" onChange={this.handleInput}></input>
                </div> */}
                <TextField
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
                />
            </>
        );

    }
}

export default withTranslation('translation')(ObservationInput);