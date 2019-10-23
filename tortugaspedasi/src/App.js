import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Landing from './Components/Landing';
import Form from './Components/Form/Form';
import Spreadsheet from './Components/Spreadsheet/Spreadsheet';
import Analytics from './Components/Analytics/Analytics';
import { FormControlLabel, Switch } from '@material-ui/core';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      location: "",
      userName: "",
      lng: false,
    }
  }

  updateUser = (name) => {
    this.setState({
      userName: name
    })
  }
  updateNavBar = (location) => {
    this.setState({
      location: location
    })
  }

  render() {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      console.log(this.props)
      i18n.changeLanguage(lng);
    };

    return (<>
      {/* <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('es')}>es</button> */}
      <FormControlLabel
        control={<Switch checked={this.state.lng} onChange={() => changeLanguage('es')} />}
        label="Español"
      />
      <div>
        <Router>
          <NavBar location={this.state.location}
            name={this.state.userName}
            updateNavBar={this.updateNavBar}>
          </NavBar>
          <Route path="/" exact render={() =>
            (this.state.userName ?
              (<Redirect to="/home" />) :
              (<Login updateUser={this.updateUser}
                updateNavBar={this.updateNavBar} />))}>
          </Route>
          <Route path="/home" exact render={() =>
            <Landing updateNavBar={this.updateNavBar} />}>
          </Route>
          <Route path="/form" exact render={() =>
            <Form updateNavBar={this.updateNavBar} />}>
          </Route>
          <Route path="/spread" exact render={() =>
            <Spreadsheet updateNavBar={this.updateNavBar} />}>
          </Route>
          <Route path="/analytics" exact render={() =>
            <Analytics updateNavBar={this.updateNavBar} />}>
          </Route>
        </Router>
      </div></>
    );
  }
}

export default withTranslation('translation')(App);