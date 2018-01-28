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
          <Header
            title={this.props.settings.title}
            getTitle={() => this.props.getTitle()}
          ></Header>
          <Route exact path="/" component={Main} />
          <Route exact path="/admin" component={AdminPanel} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTitle() {
      axios.get('http://localhost:8080/site_title')
        .then((res) => {
          var title = res.data[0].title;
          dispatch({
            type: "GET_TITLE",
            payload: title
          });
        })
    },
    ChangeSettings(data) {
      console.log(data)
      dispatch({
        type: "SET_TITLE"
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
