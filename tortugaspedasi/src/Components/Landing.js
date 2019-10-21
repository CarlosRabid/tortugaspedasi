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
                    <span className="button"><button id="form" className="link"><Link to="/form" className = "links">Form</Link></button></span>
                    <span className="button"><button id="spreadsheet" className="link"><Link to="/spread" className="links">Spreadsheet</Link></button></span>
                    <span className="button"><button id="analytics" className="link"><Link to="/analytics" className="links">Analytics</Link></button></span>
                </div>
                       
                        <Route path="/form" exact render={() => <Form />} />
                        <Route path="/spread" exact render={() => <Spreadsheet />} />
                        <Route path="/analytics" exact render={() => < Analytics/>} />
                     
            </Router>
        )
    }
}





export default Landing;
