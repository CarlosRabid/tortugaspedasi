import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import { withTranslation } from 'react-i18next';
import Login from './Components/Login';
// import ObservationInput from './Components/Form/ObservationInput';
import './App.css';
import Form from './Components/Form/Form';
import Spreadsheet from './Components/Spreadsheet/Spreadsheet';
import Analytics from './Components/Analytics/Analytics';
import { FormControlLabel, Switch } from '@material-ui/core';


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
    const { t, i18n } = this.props;
    if (this.state.lng=="en") {
      i18n.changeLanguage("es");
      return this.setState({lng: "es"})
    }else{i18n.changeLanguage("en")
    return this.setState({lng: "en"})
  }
  };

  render() {

    return (<>
      {/* <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('es')}>es</button> */}
      <FormControlLabel
        control={<Switch checked={(this.state.lng==="es")?true:false} onChange={this.changeLanguage} />}
        label={(this.state.lng==="es")? "Switch to English":"Cambiar a Español"}
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