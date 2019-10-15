import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Form from './Form/Form';
import Spreadsheet from './Spreadsheet/Spreadsheet';
import Analytics from './Analytics/Analytics';

class Landing extends Component {
    
    render() {
        return (
            <Router>
                <div className="landing">

                    <Link to="/form">Form</Link>
                    <Link to="/spread">Spread</Link>
                    <Link to="/analytics">Analytics</Link>

                    <Route path="/form" exact render={() => <Form />} />
                    <Route path="/spread" exact render={() => <Spreadsheet />} />
                    <Route path="/analytics" exact render={() => < Analytics/>} />

                </div>
            </Router>
        )
    }
}

export default Landing;