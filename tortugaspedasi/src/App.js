import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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
      lng: "en",
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
    console.log(location)
  }

  changeLanguage = () => {
    const { i18n } = this.props;
    if (this.state.lng === "en") {

      i18n.changeLanguage("es");
      return this.setState({ lng: "es" })
    } else {
      i18n.changeLanguage("en")
      return this.setState({ lng: "en" })
    }
  };

  isLoggedIn = () => localStorage.getItem('user') || this.state.userName

  logOut = () => {
    this.setState({
      userName: "",
      lng: "en",
    })
    localStorage.admin= "" 
  //localStorage.clear()
  // this.setState = {
  //   location: "",
  //   userName: "",
  //   lng: "en",
  // }
  }

  render() {

    return (<>
      {/* <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('es')}>es</button> */}
      <FormControlLabel
        control={<Switch checked={(this.state.lng === "es") ? true : false} onChange={this.changeLanguage} />}
        label={(this.state.lng === "es") ? "Switch to English" : "Cambiar a Español"}
      />
      <div>

        <BrowserRouter>

          <NavBar logOut={this.logOut}
            location={this.state.location}
            name={this.state.userName}
            updateNavBar={this.updateNavBar}>
          </NavBar>

          <Route exact path="/" render={() =>
            (this.state.userName ?
              (<Redirect to="/landing" />) :
              (<Login updateUser={this.updateUser}
                updateNavBar={this.updateNavBar} />))}>
          </Route>

          <Route exact path="/landing" render={() =>
            <Landing />}>
          </Route>

          <Route exact path="/form" render={() =>
            <Form isLoggedIn={this.isLoggedIn} updateNavBar={this.updateNavBar} />}>
          </Route>

          <Route exact path="/spread" render={() =>
            <Spreadsheet isLoggedIn={this.isLoggedIn} updateNavBar={this.updateNavBar} />}>
          </Route>

          <Route exact path="/analytics" render={() =>
            <Analytics isLoggedIn={this.isLoggedIn} updateNavBar={this.updateNavBar} />}>
          </Route>

        </BrowserRouter>

      </div></>
    );
  }
}

export default withTranslation('translation')(App);