import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Landing from './Components/Landing';
import Form from './Components/Form/Form';
import Spreadsheet from './Components/Spreadsheet/Spreadsheet';
import Analytics from './Components/Analytics/Analytics';
import { FormControlLabel, Switch } from '@material-ui/core';
import './App.css';
const axios = require('axios')




class App extends Component {
  constructor() {
    super()
    this.state = {
      location: "",
      userName: "",
      lng: "en",
      isOnline: true
    }
  }

  componentDidMount (){
    this.setState({isOnline: navigator.onLine})
    if(this.state.isOnline) {
      let storage = localStorage.getItem('form')
      //axios.post('http://localhost:7777/newForm', {shift, observation, turtle, nest})
      console.log('there is something in there')
    }
    else {
      console.log('there isnt anything sooo...')

    }
  }

  saveForm (shift, observation, turtle, nest) {
    if (navigator.onLine) {
      axios.post('http://localhost:7777/newForm', { shift, observation, turtle, nest })
      console.log('online')
    }
    else {
      let form = { shift: '', observation: '', turtle: '', nest: '' } 
      localStorage.form = JSON.stringify(form)
      console.log('offline')
    }
  }

 
  //     // 
  //     // localStorage.clear()
  //   }
  //   else {
  //     console.log('nothing in localStorage')
  //   }
    
  // }


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
    if (this.state.lng==="en") {

      i18n.changeLanguage("es");
      return this.setState({ lng: "es" })
    } else {
      i18n.changeLanguage("en")
      return this.setState({ lng: "en" })
    }
  };

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
            <Form saveForm={this.saveForm} />}>
          </Route>

          <Route path="/spread" exact render={() =>
            <Spreadsheet updateNavBar={this.updateNavBar} />}>
          </Route>

          <Route path="/analytics" exact render={() =>
            <Analytics updateNavBar={this.updateNavBar} />}>
          </Route>

            {/* testing local storage being saved offline
          <button onClick={this.saveForm} >SAVE FORM</button> */}

        </BrowserRouter>

      </div></>
    );
    
  }
}

export default withTranslation('translation')(App);