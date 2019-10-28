import React, { Component } from 'react';
import SpreadsheetContainer from './SpreadsheetContainer';
import UpdateForm from './UpdateForm';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as constant from '../Form/constant'
import './Spreadsheet.css'
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
const axios = require('axios')

const dinamicRoute = (
    window.location.host.includes("localhost") ?
        constant.LOCAL_GET : constant.PROD_GET
)




class SpreadsheetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            form: null,
            filter: "",
            showPopUp: null
        }

        // this.dinamicRoute = props.dinamicRoute 

    }

    async componentDidMount() {
        console.log(dinamicRoute)
        let data = await axios.get(`${dinamicRoute}/all-data`)
        let forms = [...this.state.forms]
        forms = data.data

        this.setState({
            forms
        })
    }


    getDataById = async (id) => {
        let data = this.state.forms.find(f => {
            return f._id === id
        })
        await this.setState({
            form: data
        })
        return data
    }

    // searchHandler = (event) => {
    //     this.setState({
    //         filter: event.target.value
    //     })
    // }

    closePopUp = () => {
        this.setState({
            showPopUp: null,
            form: null
        })
    }

    showPop = async (id) => {
        let result = this.state.forms.find(f => {
            return f._id === id
        })
        await this.setState({
            showPopUp: id,
            form: result
        })
    }



    render() {
        const { t } = this.props;
        let forms = this.state.forms


        return (
            <div className="spreadSheet">
                {this.state.showPopUp ?
                    <UpdateForm closePopUp={this.closePopUp} form={this.state.form} /> : null}


                <div className="forms">
                    <Paper>
                        <Table stickyHeader >
                            <TableHead className="head" >
                                <TableRow  >
                                    <TableCell >{t('Date')}</TableCell>
                                    <TableCell align="center">{t('Location')}</TableCell>
                                    <TableCell align="center">{t('First Name')}</TableCell>
                                    <TableCell align="center">{t('Last Name')}</TableCell>
                                    <TableCell align="center">{t('Straight measurement')}</TableCell>
                                    <TableCell align="center">{t('Curve measurement')}</TableCell>
                                    <TableCell align="center">{t('Species')}</TableCell>
                                    <TableCell align="center">{t('Gender')}</TableCell>
                                    <TableCell align="center">{t('Status')}</TableCell>
                                    <TableCell align="center">{t('Stage')}</TableCell>
                                    <TableCell align="center">{t('Right Markings')}</TableCell>
                                    <TableCell align="center">{t('Left Markings')}</TableCell>
                                    <TableCell align="center">{t('Lay Time')}</TableCell>
                                    <TableCell align="center">{t('Egg Count')}</TableCell>
                                    <TableCell align="center">{t('Hatchest')}</TableCell>
                                    <TableCell align="center">{t('Rehomed')}</TableCell>
                                    <TableCell align="center">{t('Salvageable')}</TableCell>
                                    <TableCell align="center">{t('Comments')}</TableCell>
                                </TableRow >
                            </TableHead>
                            <TableBody >
                                {forms.map(f => <SpreadsheetContainer form={f} key={f._id} showPop={this.showPop} closePopUp={this.closePopUp} />)}
                            </TableBody>
                        </Table>
                    </Paper>

                </div>

            </div>
        )
    }
}

export default withTranslation('translation')(SpreadsheetData);