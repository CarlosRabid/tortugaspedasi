import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Form from './Form/Form';
import Spreadsheet from './Spreadsheet/Spreadsheet';
import Analytics from './Analytics/Analytics';
import './landing.css'

class Landing extends Component {    
    render() {
        return (
            <Router>
                <div className="container">
                    <span className="button"><div id="form" className="link"><Link to="/form" className = "links">Form</Link></div></span>
                    <span className="button"><div id="spreadsheet" className="link"><Link to="/spread" className="links">Spreadsheet</Link></div></span>
                    <span className="button"><div id="analytics" className="link"><Link to="/analytics" className="links">Analytics</Link></div></span>
                </div>
                       
                        <Route path="/form" exact render={() => <Form />} />
                        <Route path="/spread" exact render={() => <Spreadsheet />} />
                        <Route path="/analytics" exact render={() => < Analytics/>} />
                     
            </Router>
        )
    }
}





export default Landing;
