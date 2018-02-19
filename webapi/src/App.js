import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AdminPanel from './components/adminPanel/adminPanel';
import Main from './components/main';
import Footer from './components/footer';
import Settings from './components/settings';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App