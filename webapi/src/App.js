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
            subtitle={this.props.settings.subtitle}
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
      axios.get('http://localhost:8080/api/settings')
        .then((res) => {
          var title = res.data[0].title;
          var subtitle = res.data[0].subtitle;
          dispatch({
            type: "GET_SETTINGS",
            payload: {
              title: title,
              subtitle: subtitle
            }
          });
        })
    },

    getPosts() {
      axios.get('http://localhost:8080/api/posts')
        .then((res) => {
          let post = res.data.map((record) => record.date);
          console.log(post);
        })
    },
    ChangeSettings(data) {
      console.log(data);
      dispatch({
        type: "CHANGE_SETTINGS"
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
