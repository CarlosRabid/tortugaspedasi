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
import * as constant from './Components/Form/constant'
import Loader from './Components/Loader';
const axios = require('axios')
const dinamicRoute = window.location.host.includes("localhost") ? constant.LOCAL_GET : constant.PROD_GET


class App extends Component {
  constructor() {
    super()
    this.state = {
      location: "",
      userName: "",
      lng: "en",
      loadingData: true,
    }
  }

  componentDidMount() {
    if (navigator.onLine) {
      let savedForms = JSON.parse(localStorage.getItem('savedForms') || "[]")

      if (savedForms.length < 1) {
        this.setState({ loadingData: false })
        return
      }

      axios.post(`${dinamicRoute}/mega-forms`, savedForms).then((response) => {
        localStorage.removeItem('savedForms')
        console.log('Sent saved forms to DB')
        this.setState({ loadingData: false })
      })
    }
    else {
      console.log('there isnt anything sooo...')
      this.setState({ loadingData: false })
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

  isLoggedIn = () => localStorage.getItem("isLoggedIn") || this.state.userName

  logOut = () => {
    this.setState({
      isLoggedIn: false,
      userName: '',
      lng: "en"
    })
    localStorage.removeItem('isLoggedIn')
  }

  render() {

    return (<>
      <div>

        <BrowserRouter>

          <NavBar location={this.state.location}
            logOut={this.logOut}
            name={this.state.userName}
            updateNavBar={this.updateNavBar}
            lng={this.state.lng}
            changeLanguage={this.changeLanguage}>

          </NavBar>

          {this.state.loadingData ? <Loader /> : null}


          <Route path="/" exact render={() =>
            (this.isLoggedIn() ?
              <Redirect to="/home" /> :
              <Login updateUser={this.updateUser} />)}>
          </Route>

          <Route path="/home" exact render={() =>
            <Landing updateNavBar={this.updateNavBar} isLoggedIn={this.isLoggedIn} />}>
          </Route>

          <Route path="/form" exact render={() =>
            <Form updateNavBar={this.updateNavBar} isLoggedIn={this.isLoggedIn} saveForm={this.saveForm} />}>
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