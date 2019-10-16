import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import '../styles/NavBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Router>
                        <Toolbar>
                                <div className="navbarLinks"><Link to="/landing">Home</Link>
                                    <Link to="/analytics">Analytics</Link>
                                    <Link to="/spreadsheet">Spreadsheet</Link>
                                </div>
                            <div id="logoutButton">
                                <Button edge="end" variant="contained" >Logout</Button>
                            </div>
                        </Toolbar>
                    </Router>
                </AppBar>

            </div>
        );
    }
}

export default NavBar;