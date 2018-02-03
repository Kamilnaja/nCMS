import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ChangeSettings from './components/changeSettings';
import AdminPanel from './components/adminPanel';
import Main from './components/main';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Route exact path="/" component={Main} />
          <Route exact path="/admin" component={AdminPanel} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App