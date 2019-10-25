import React, { Component } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

class BeachLocation extends Component {
    constructor() {
        super();
        this.state = {
            locationLatitude: "",  // set-up by beach selection
            locationLongitude: "", // set-up by beach selection
            showMenu: false,
            selectedBeach: null
        }
        this.beaches = {
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
    }
    handleClose = (event) => {
        let idx = event.target.id
        let currentBeach = this.beaches[idx]
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
    showMenu = () => {
        this.setState({ showMenu: true })
    }
    render() {
        const { t } = this.props;
        return <>
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
        </>
    }
}
export default withTranslation('translation')(BeachLocation);