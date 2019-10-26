import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Landing from './Components/Landing';
import Form from './Components/Form/Form';
import Spreadsheet from './Components/Spreadsheet/Spreadsheet';
import Analytics from './Components/Analytics/Analytics';
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
      location: "",
      userName: "",
      lng: "en",
    })
    localStorage.clear() }

  render() {

    return (<>
      {/* <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('es')}>es</button> */}
      {/* <FormControlLabel
        control={<Switch checked={(this.state.lng === "es") ? true : false} onChange={this.changeLanguage} />}
        label={(this.state.lng === "es") ? "Switch to English" : "Cambiar a Español"}
      /> */}
      <div>

        <BrowserRouter>

          <NavBar location={this.state.location}
            logOut={this.logOut}
            name={this.state.userName}
            updateNavBar={this.updateNavBar}
            lng={this.state.lng}
            changeLanguage={this.changeLanguage}>
          
          </NavBar>


          <Route path="/" exact render={() =>
            (this.state.userName ?
              <Redirect to="/home" /> :
              <Login updateUser={this.updateUser}
                updateNavBar={this.updateNavBar} />)}>
          </Route>

          <Route path="/home" exact render={() =>
            <Landing updateNavBar={this.updateNavBar} isLoggedIn={this.isLoggedIn} />}>
          </Route>

          <Route path="/form" exact render={() =>
            <Form updateNavBar={this.updateNavBar} isLoggedIn={this.isLoggedIn} />}>
          </Route>

          <Route path="/spread" exact render={() =>
            <Spreadsheet updateNavBar={this.updateNavBar} isLoggedIn={this.isLoggedIn} />}>
          </Route>

          <Route path="/analytics" exact render={() =>
            <Analytics updateNavBar={this.updateNavBar} isLoggedIn={this.isLoggedIn} />}>
          </Route>

        </BrowserRouter>

      </div></>
    );
  }
}

export default withTranslation('translation')(App);