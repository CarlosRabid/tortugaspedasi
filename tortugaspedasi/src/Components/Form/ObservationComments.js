import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import './form.css'

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: "" //free input

        }
    }
    handleInput = (event) => {
        return this.props.handleComments(event.target.value)
    }

    render() {
        const { t } = this.props;
        return <div id="comments">
            <TextField
                id="commentaries"
                name="comments"
                label={t('Comments')}
                style={{ marginLeft: '5%' , color: 'green'}}
                placeholder={t('Observation notes...')}
                // helperText="Full width!"
                multiline
                rowsMax="2"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                    // style: {
                    //     color: "green"
                    // }
                }}
                // variant="filled"
                onChange={this.handleInput}
                // color='#ffffff'
            />

        </div>
    }
}
export default withTranslation('translation')(Comments);