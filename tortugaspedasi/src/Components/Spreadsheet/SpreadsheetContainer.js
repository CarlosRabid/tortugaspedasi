import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
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
        let gender = form.turtle.gender === "female"
        let rehomed = form.nest.rehomed === "yes"
        let salvagable = form.nest.salvageable == "true"

        let MR = form.turtle.markings.rifhtSide == null

        console.log(form)
        return (


            <TableRow>
                <TableCell align="center">{moment(form.shift.date).format("L")}</TableCell>
                <TableCell align="center">{form.observation.location}</TableCell>
                <TableCell align="center">{form.shift.lastName}</TableCell>
                <TableCell align="center">{form.shift.firstName}</TableCell>
                <TableCell align="center">
                    L:{form.turtle.dimensions.plain.length}, W:{form.turtle.dimensions.plain.width}
                </TableCell>
                <TableCell align="center">
                    L:{form.turtle.dimensions.curve.length}, W:{form.turtle.dimensions.curve.width}
                </TableCell>
                <TableCell align="center">{form.turtle.species}</TableCell>
                <TableCell align="center">{gender ? "F" : "M"}</TableCell>
                <TableCell align="center">{form.turtle.condition.status}</TableCell>
                <TableCell align="center">{form.turtle.condition.stage}</TableCell>
                <TableCell align="center">{MR ? "-" : form.turtle.markings.rifhtSide}</TableCell>
                <TableCell align="center">{form.turtle.markings.leftSide}</TableCell>
                <TableCell align="center"> {moment(form.nest.layTime).format("LTS")}</TableCell>
                <TableCell align="center">{form.nest.eggCount}</TableCell>
                <TableCell align="center">{moment(form.nest.hatchEst).format("LTS")}</TableCell>
                <TableCell align="center">{rehomed ? "√" : "X"}</TableCell>
                <TableCell align="center">{salvagable ? "√" : "X"}</TableCell>
                <TableCell align="center">Icon</TableCell>
                <TableCell align="center">{form.observation.tide}</TableCell>
                <TableCell align="center"><Tooltip title={form.observation.comments}><div>{form.observation.comments.slice(0, 5) + "..."}</div></Tooltip></TableCell>
            </TableRow>


        )
    }
}



export default SpreadsheetContainer;