import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
        const { t, i18n } = this.props;
        return (<>
            <Router>
                <div className="container">
                    <span className="button"><button id="form" className="link"><Link to="/form" className ="link">{t('Form')}</Link></button></span>
                    <span className="button"><button id="spreadsheet" className="link"><Link to="/spread" className="link">{t('Spreadsheet')}</Link></button></span>
                    <span className="button"><button id="analytics" className="link"><Link to="/analytics" className="link">{t('Analytics')}</Link></button></span>
                </div>

                <p>
                </p>
                    
                    <Route exact path="/" exact render={() => <Login />} />
                    <Route exact path="/form" exact render={() => <Form />} />
                    <Route exact path="/spread" exact render={() => <Spreadsheet />} />
                    <Route exact path="/analytics" exact render={() => < Analytics/>} />

                     
            </Router></>
        )
    }
}


export default withTranslation('translation')(Landing);