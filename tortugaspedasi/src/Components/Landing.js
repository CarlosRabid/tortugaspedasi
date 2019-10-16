import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Form from './Form/Form';
import Spreadsheet from './Spreadsheet/Spreadsheet';
import Analytics from './Analytics/Analytics';

const divStyle = {
    margin: '40px',
    textdecoration: "none"
  };

class Landing extends Component {
    
    render() {

        return (
            <Router>
                <div className="landing">
                    <Link to="/form" className = "links">Form</Link>
                    <Link to="/spread" className="links">Spread</Link>
                    <Link to="/analytics" className="links">Analytics</Link>

                    
                    <Route path="/form" exact render={() => <Form />} />
                    <Route path="/spread" exact render={() => <Spreadsheet />} />
                    <Route path="/analytics" exact render={() => < Analytics/>} />

                </div>
            </Router>
        )
    }
}

export default Landing;