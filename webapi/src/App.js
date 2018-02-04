import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import AdminPanel from './components/adminPanel/adminPanel';
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