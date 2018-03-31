import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/footer';
import { connect } from 'react-redux';
import { getSettings } from './actions/settingActions';
import Main from './components/main';
import AdminPanel from './components/adminPanel/adminPanel';

class App extends Component {

  componentDidMount() {
    getSettings()
  }

  render() {
    return (
      <Router>
        <div className="background-app">
          <div className="App container-app">
            <Header settings={this.props.settings} />
            <Route exact path='/' component={Main} />
            <Route path='/admin' component={AdminPanel} />
            <Footer settings={this.props.settings} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSettings: (data) => {
      dispatch(getSettings(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);