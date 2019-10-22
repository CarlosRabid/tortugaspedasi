import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/NavBar.css';
import { withTranslation } from 'react-i18next';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import Form from './Form/Form';
// import Spreadsheet from './Spreadsheet/Spreadsheet';
// import Analytics from './Analytics/Analytics';
// import Landing from './Landing';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    updateNavBar = () => {
        this.props.updateNavBar("")
    }

    render() {
        const { t, i18n } = this.props;
         
        return (
            <nav>
                <div className="navigation" id={this.props.location}>
                    <Link to="/home"><span>{t('Home')}</span></Link>
                    {" "}
                    <Link to="/form"><span >{t('Form')}</span></Link>
                    {" "}
                    <Link to="/spread"><span>{t('Spreadsheet')}</span></Link>
                    {" "}
                    <Link to="/analytics"><span>{t('Analytics')}</span></Link>
                    <span className= "currentUser"><Link to="/">{!this.props.name ? "Login" : this.props.name}</Link></span>
                </div>
            </nav>
        );
    }
}

export default withTranslation('translation')(NavBar);

// MATERIAL UI CODE //
            // <div>
            //     <Router>
            //         <div><AppBar position="static">

            //             <Toolbar>
            //                 <div className="navbarLinks">
            //                     <Link to="/">Home</Link>
            //                     <Link to="/form">Form</Link>
            //                     <Link to="/spread">Spreadsheet</Link>
            //                     <Link to="/analytics">Analytics</Link>

            //                 </div>
            //                 <div id="logoutButton">
            //                     <Button edge="end" variant="contained" >Logout</Button>
            //                 </div>
            //             </Toolbar>

            //         </AppBar>
            //             <Route path="/" exact render={() => <Landing />} />
            //             <Route path="/form" exact render={() => <Form />} />
            //             <Route path="/spread" exact render={() => <Spreadsheet />} />
            //             <Route path="/analytics" exact render={() => < Analytics />} />
            //         </div>
            //     </Router>

            // </div>