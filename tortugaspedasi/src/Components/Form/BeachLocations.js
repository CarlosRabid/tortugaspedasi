import React, { Component } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './form.css';


class BeachLocation extends Component {
    constructor(props) {
        super(props);
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
        console.log()
        let idx = event.target.id
        let currentBeach = this.beaches[idx]
        let locationLatitude = { ...this.state.locationLatitude }
        let locationLongitude = { ...this.state.locationLongitude }
        let selectedBeach = { ...this.state.selectedBeach }
        locationLatitude = currentBeach.latitude
        locationLongitude = currentBeach.longitude
        selectedBeach = currentBeach.name
        this.props.handleBeachInput({locationLatitude, locationLongitude, selectedBeach})
        this.setState({ locationLatitude, locationLongitude, selectedBeach 
        })
        this.hideMenu()
    }
    showMenu = () => {
        this.setState({ showMenu: true })
    }
    hideMenu = () => {
        this.setState({ showMenu: null })
    }
    render() {
        const { t } = this.props;
        return (
            <div >
                <div id="menuplayascont">
                    <FormControl  variant="outlined" >
                        <InputLabel   htmlFor="outlined-age-simple">   Beach  </InputLabel>
                        <Select  id="playaselect" labelWidth={60} inputProps={{ name: 'playa', id: 'outlined-playa-simple', }}>
                                <MenuItem value="">  <em> --- </em></MenuItem>
                                <MenuItem id="playaarenal" onClick={this.handleClose}>Playa El Arenal</MenuItem>
                                <MenuItem id="playatoro" onClick={this.handleClose}>Playa El Toro</MenuItem>
                                <MenuItem id="playalagarto" onClick={this.handleClose}>PLaya Lagarto</MenuItem>
                    </Select>
                     </FormControl>
            </div>
                </div >
                )
            }
        }
        export default withTranslation('translation')(BeachLocation);
        {/* <Button id="menuPlayas" size="medium" variant="outlined" color="inherit" className="observation" onClick={this.showMenu}>
    {this.state.selectedBeach ? this.state.selectedBeach : t('Beach Location')}

</Button></div>
<div>
<Menu
    anchorEl={this.state.showMenu}
    keepMounted
    open={Boolean(this.state.showMenu)}
    onClose={this.handleClose}
    style={{ position: 'absolute' }}
    className="menuPlayas2"
>
    <div>
        <MenuItem id="playaarenal" onClick={this.handleClose}>Playa El Arenal</MenuItem>
        <MenuItem id="playatoro" onClick={this.handleClose}>Playa El Toro</MenuItem>
        <MenuItem id="playalagarto" onClick={this.handleClose}>PLaya Lagarto</MenuItem>
    </div>
</Menu> */}
