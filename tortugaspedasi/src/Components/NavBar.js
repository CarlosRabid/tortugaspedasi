import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import '../styles/NavBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Form from './Form/Form';
import Spreadsheet from './Spreadsheet/Spreadsheet';
import Analytics from './Analytics/Analytics';
import Landing from './Landing';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Router>
                    <div><AppBar position="static">

                        <Toolbar>
                            <div className="navbarLinks">
                                <Link to="/">Home</Link>
                                <Link to="/form">Form</Link>
                                <Link to="/spread">Spreadsheet</Link>
                                <Link to="/analytics">Analytics</Link>

                            </div>
                            <div id="logoutButton">
                                <Button edge="end" variant="contained" >Logout</Button>
                            </div>
                        </Toolbar>

                    </AppBar>
                        <Route path="/" exact render={() => <Landing />} />
                        <Route path="/form" exact render={() => <Form />} />
                        <Route path="/spread" exact render={() => <Spreadsheet />} />
                        <Route path="/analytics" exact render={() => < Analytics />} />
                    </div>
                </Router>

            </div>
        );
    }
}

export default NavBar;