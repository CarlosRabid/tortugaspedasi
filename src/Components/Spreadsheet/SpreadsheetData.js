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
        let data = await axios.get(`${dinamicRoute}/all-data`)
        let forms = [...this.state.forms]
        forms = data.data
        
        this.setState({
            forms
        })
        console.log(data)
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
                                    <TableCell >Date</TableCell>
                                    <TableCell align="center">Location</TableCell>
                                    <TableCell align="center">First Name</TableCell>
                                    <TableCell align="center">Last Name</TableCell>
                                    <TableCell align="center">Plain Dimensions</TableCell>
                                    <TableCell align="center">Curve Dimensions</TableCell>
                                    <TableCell align="center">Species</TableCell>
                                    <TableCell align="center">Gender</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Stage</TableCell>
                                    <TableCell align="center">Right Markings</TableCell>
                                    <TableCell align="center">Left Markings</TableCell>
                                    <TableCell align="center">Lay Time</TableCell>
                                    <TableCell align="center">Egg Count</TableCell>
                                    <TableCell align="center">Hatchest</TableCell>
                                    <TableCell align="center">Rehomed</TableCell>
                                    <TableCell align="center">Salvageable</TableCell>
                                    <TableCell align="center">Comments</TableCell>
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

export default SpreadsheetData;