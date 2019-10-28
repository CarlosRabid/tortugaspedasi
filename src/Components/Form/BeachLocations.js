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
            selectedBeach: ""
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
    handleClose = async (event) => {
        let idx = event.target.value
        if (idx) {
            let currentBeach = this.beaches[idx]
            let locationLatitude = { ...this.state.locationLatitude }
            let locationLongitude = { ...this.state.locationLongitude }
            let selectedBeach = { ...this.state.selectedBeach }
            locationLatitude = currentBeach.latitude
            locationLongitude = currentBeach.longitude
            selectedBeach = currentBeach.name
           await this.props.handleBeachInput({ locationLatitude, locationLongitude, selectedBeach })
            this.setState({
                locationLatitude, locationLongitude, selectedBeach
            })
            this.hideMenu()
        } else { return this.hideMenu() }
    }
    showMenu = () => {
        this.setState({ showMenu: true })
    }
    hideMenu = async () => {
        let showMenu = { ...this.state.showMenu }
        showMenu = null
        await this.setState({ showMenu })
    }
    render() {
        const { t } = this.props;
        return (
            <>
            <div id="menuplaya">
                    <FormControl variant="outlined" value={this.state.selectedBeach}  >
                        <InputLabel  style={{color:"white"}} 
                        htmlFor='menuplayascont' >   {this.state.selectedBeach ? 
                            this.state.selectedBeach : t('Beach') }  
                        </InputLabel>
                        <Select value={this.state.selectedBeach} labelWidth={60} 
                            inputProps={{ name: 'playa', id: 'menuplayascont', }}
                            onChange={this.handleClose} 
                            // color="white"

                            >
                            <option value={null} > - </option>
                            <option value="playaarenal" onClick={this.handleClose}>{t('Arenal beach')}</option>
                            <option value="playatoro" onClick={this.handleClose}>{t('El Toro beach')}</option>
                            <option value="playalagarto" onClick={this.handleClose}>{t('Lagarto beach')}</option>
                        </Select>
                    </FormControl>
                    </div>
            </>
        )
    }
}
export default withTranslation('translation')(BeachLocation);