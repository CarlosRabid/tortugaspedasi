import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import Login from './Components/Login';
// import ObservationInput from './Components/Form/ObservationInput';
import './App.css';
import Form from './Components/Form/Form';
import Spreadsheet from './Components/Spreadsheet/Spreadsheet';
import Analytics from './Components/Analytics/Analytics';


class App extends Component {
  constructor() {
    super()
    this.state = {
      location: "",
      userName: "",
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
    
    return (
      <Router>
      <div>
          <NavBar location = {this.state.location} 
                  name = {this.state.userName}
                  updateNavBar={this.updateNavBar}>
          </NavBar>
          <Route path ="/" exact render={() => 
            (this.state.userName ? 
              (<Redirect to="/home"/>) : 
              (<Login updateUser={this.updateUser}
                updateNavBar={this.updateNavBar}/>))}>
          </Route>
          <Route path="/home" exact render = {() =>
          <Landing updateNavBar ={this.updateNavBar}/>}>  
          </Route>
          <Route path ="/form" exact render={() => 
            <Form updateNavBar={this.updateNavBar}/>}>
          </Route>
          <Route path = "/spread" exact render={() => 
            <Spreadsheet updateNavBar={this.updateNavBar}/>}>
          </Route>
          <Route path = "/analytics" exact render={() => 
            <Analytics updateNavBar={this.updateNavBar}/>}>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;






