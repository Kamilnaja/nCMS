import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/footer';
import { connect } from 'react-redux';
import { getSettings } from './actions/settingActions';
import Main from './components/main';
import AdminPanel from './components/adminPanel/adminPanel';
import LoginScreen from './components/loginScreen';
import CreateAccount from './components/login/createAccount';
import SingleArticle from './components/articlesParts/singleArticle';
import FullArticle from './components/articlesParts/fullArticle';

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
            <Route path='/login' component={LoginScreen} />
            <Route path='/createAccount' component={CreateAccount} />
            <Route path='/api/posts/:articleId' component={FullArticle} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);