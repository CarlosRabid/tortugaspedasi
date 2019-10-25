import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' //do not delete Router Route
import { withTranslation } from 'react-i18next';
import Form from './Form/Form';
import Spreadsheet from './Spreadsheet/Spreadsheet';
import Analytics from './Analytics/Analytics';
import './landing.css'
import Login from './Login';

class Landing extends Component {  
    constructor() {
        super ();
        this.state = {
            user: {},
            users: []
        }
    }

 

    render() {
        const { t } = this.props;
        return (
           
                <div className="container">
                    <span className="button"><button id="form" className="link"><Link to="/form" className ="links">{t('Form')}</Link></button></span>
                    <span className="button"><button id="spreadsheet" className="link"><Link to="/spread" className="links">{t('Spreadsheet')}</Link></button></span>
                    <span className="button"><button id="analytics" className="link"><Link to="/analytics" className="links">{t('Analytics')}</Link></button></span>
                </div>                  
                  
        )
    }
}


export default withTranslation('translation')(Landing);