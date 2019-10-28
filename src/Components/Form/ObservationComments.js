import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import './form.css'
import Typography from 'material-ui/styles/typography';

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
            {/* <Typography variant="h6" component="h6"></Typography> */}
            <TextField
                id="commentaries"
                name="comments"
                label={t('Comments')}
                style={{ marginLeft: '1vw', color: 'white' }}
                placeholder={t('Add notes...')}
                // helperText="Full width!"
                multiline
                rowsMax="2"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                    style: {
                        color: 'white'
                    }
                }}
                variant="outlined"
                onChange={this.handleInput}
                color='#ffffff'
            />

        </div>
    }
}
export default withTranslation('translation')(Comments);