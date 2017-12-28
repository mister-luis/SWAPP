import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PeopleList from './List/PeopleList'
import PlanetsList from './List/PlanetsList'
import Home from './Home/Home'
import NavBar from './Navbar/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Route
        path="/"
        exact
        component={Home}
        />
        <Route
        path="/people"
        exact
        component={PeopleList}
        />
        <Route
        path="/planets"
        exact
        component={PlanetsList}
        />
      </div>
      </Router>
    );
  }
}

export default App;
