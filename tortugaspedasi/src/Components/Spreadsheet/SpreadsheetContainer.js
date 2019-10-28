import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import { withTranslation } from 'react-i18next'
const moment = require('moment');


class SpreadsheetContainer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    // showPopUp = (event) => {
    //     console.log(event.target.id)
    //     this.props.showPop(event.target.id)
    // }

    render() {


        let form = this.props.form


        let gender = form.turtle.gender
        if (gender) {
            gender = gender === "male" ? "M" : "F"
        }
        else {
            gender = "-"
        }

        let rehomed = form.nest.rehomed
        if (rehomed) {
            rehomed = rehomed === "yes" ? "√" : "X"
        }
        else {
            rehomed = "-"
        }

        let salvageable = form.nest.salvageable
        if (salvageable) {
            salvageable = salvageable === "yes" ? "√" : "X"
        }
        else {
            salvageable = "-"
        }
        let MR = form.turtle.markings.rightSide == null
        let ML = form.turtle.markings.leftSide == null







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

                <TableCell align="center">{form.turtle.species ? form.turtle.species : "-"}</TableCell>
                <TableCell align="center">{gender}</TableCell>
                <TableCell align="center">{form.turtle.condition.status ? form.turtle.condition.status : "-"}</TableCell>
                <TableCell align="center">{form.turtle.condition.stage ? form.turtle.condition.stage : "-"}</TableCell>

                <TableCell align="center"> {MR ?
                    '-' : <Tooltip title={form.turtle.markings.rightSide}>
                        <div>
                            {form.turtle.markings.rightSide.slice(0, 5) + "..."}
                        </div>
                    </Tooltip>}
                </TableCell>

                <TableCell align="center"> {ML ?
                    '-' : <Tooltip title={form.turtle.markings.leftSide}>
                        <div>
                            {form.turtle.markings.leftSide.slice(0, 5) + "..."}
                        </div>
                    </Tooltip>}
                </TableCell>

                <TableCell align="center"> {form.nest.layTime ? moment(form.nest.layTime).format("LT") : "-"}</TableCell>
                <TableCell align="center">{form.nest.eggCount ? form.nest.eggCount : "-"}</TableCell>
                <TableCell align="center">{form.nest.hatchEst ? moment(form.nest.hatchEst).format("LT") : "-"}</TableCell>
                <TableCell align="center">{rehomed}</TableCell>
                <TableCell align="center">{salvageable}</TableCell>

                <TableCell align="center">
                    {form.observation.comments ? <Tooltip title={form.observation.comments}>
                        <div>
                            {form.observation.comments.slice(0, 5) + "..."}
                        </div>
                    </Tooltip> : "-"}
                </TableCell>
            </TableRow>


        )
    }
}



export default withTranslation('translation')(SpreadsheetContainer);