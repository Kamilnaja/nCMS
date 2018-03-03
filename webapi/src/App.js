import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/footer';
import { connect } from 'react-redux';
import { logger } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title={this.props.title} subtitle={this.props.subtitle}></Header>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.settings.title,
    subtitle: state.settings.subtitle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setTitle: (title) => {
    //   dispatch(setTitle(title));
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
