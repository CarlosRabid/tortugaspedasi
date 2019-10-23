import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
        comments: "" //free input

        }
    }
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
    }
    render() {
        const { t, i18n } = this.props;
        return <div>
            <TextField
                id="comments"
                name="comments"
                label={t('Comments')}
                style={{ marginLeft: '5%' }}
                placeholder={t('Observation notes...')}
                // helperText="Full width!"
                multiline
                rowsMax="2"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={this.handleInput}
                color="inherit"
            />

        </div>
    }
}
export default withTranslation('translation')(Comments);