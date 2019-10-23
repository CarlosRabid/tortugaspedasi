import React, { Component } from 'react';
import SpreadsheetContainer from './SpreadsheetContainer';
import SpreadsheetActions from './SpreadsheetActions';
import UpdateForm from './UpdateForm';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const axios = require('axios')



class SpreadsheetData extends Component {
    constructor() {
        super();
        this.state = {
            forms: [],
            form: null,
            filter: "",
            showPopUp: null
        }
    }

    async componentDidMount() {
        let data = await axios.get('http://localhost:7777/forms')
        this.setState({
            forms: data.data
        })
    }
    

    getDataById = async (id) => {
        let data = this.state.forms.find(f => {
            return f._id == id
        })
        await this.setState({
            form: data
        })
        console.log(data)
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
            return f._id == id
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

                <SpreadsheetActions data={this.state} searchHandler={this.searchHandler} />

                <div className="forms">
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell >Date</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                    <TableCell align="right">First Name</TableCell>
                                    <TableCell align="right">Last Name</TableCell>
                                    <TableCell align="right">Dimensions</TableCell>
                                    <TableCell align="right">Species</TableCell>
                                    <TableCell align="right">Gender</TableCell>
                                    <TableCell align="right">Condition</TableCell>
                                    <TableCell align="right">Markings</TableCell>
                                    <TableCell align="right">Lay Time</TableCell>
                                    <TableCell align="right">Egg Count</TableCell>
                                    <TableCell align="right">Hatchest</TableCell>
                                    <TableCell align="right">Rehomed</TableCell>
                                    <TableCell align="right">Salvageable</TableCell>
                                    <TableCell align="right">Moon Phase</TableCell>
                                    <TableCell align="right">Tide</TableCell>
                                    <TableCell align="right">Comments</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
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