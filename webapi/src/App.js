import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';

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