import Card from '@material-ui/core/Card';
import React, { Component } from 'react';
// import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
// import UpdateForm from './UpdateForm';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
const moment = require('moment')



class SpreadsheetContainer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    showPopUp = (event) => {
        console.log(event.target.id)
        this.props.showPop(event.target.id)
    }

    render() {

        let form = this.props.form
        console.log(form._id)

        return (


            <TableRow>
                <TableCell align="right">{moment(form.shift.date).format("Do/MM/YY")}</TableCell>
                <TableCell align="right">{form.observation.location}</TableCell>
                <TableCell align="right">{form.shift.lastName}</TableCell>
                <TableCell align="right">{form.shift.firstName}</TableCell>
                <TableCell align="right">
                        {form.turtle.dimensions.plain.length} {form.turtle.dimensions.plain.width}
                    <Tooltip ><div>{`P: L: ${form.turtle.dimensions.plain.length}, W:${form.turtle.dimensions.plain.width}`}</div></Tooltip>
                    <Tooltip title={form.turtle.dimensions.curve.length + form.turtle.dimensions.curve.width}><div>Curve</div></Tooltip>

                </TableCell>
                <TableCell align="right">{form.turtle.species}</TableCell>
                <TableCell align="right">{form.turtle.gender}</TableCell>
                <TableCell align="right">
                    {form.turtle.condition.status}
                    {form.turtle.condition.stage}
                </TableCell>
                <TableCell align="right">
                    {form.turtle.markings.rightSide}
                    {form.turtle.markings.leftSide}

                </TableCell>
                <TableCell align="right"> {moment(form.nest.layTime).format("LTS")}</TableCell>
                <TableCell align="right">{form.nest.eggCount}</TableCell>
                <TableCell align="right">{moment(form.nest.hatchEst).format("LTS")}</TableCell>
                <TableCell align="right">{form.nest.rehomed}</TableCell>
                <TableCell align="right">{form.nest.salvageable}</TableCell>
                <TableCell align="right">{form.observation.moonPhase}</TableCell>
                <TableCell align="right">{form.observation.tide}</TableCell>
                <TableCell align="right"><Tooltip title={form.observation.comments}><div>{form.observation.comments.slice(0, 5) + "..."}</div></Tooltip></TableCell>
            </TableRow>


        )
    }
}



export default SpreadsheetContainer;