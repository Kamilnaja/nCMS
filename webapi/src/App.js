import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import axios from 'axios';
import SetTitle from './components/setTitle';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title={this.props.settings.title}
          getTitle={() => this.props.getTitle()}
        ></Header>
        <SetTitle
          title={this.props.settings.title}
          setTitle={() => this.props.setTitle()}
        >
        </SetTitle>
      </div>
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
            type: "SET_TITLE",
            payload: title
          });
        })
    },
    setTitle() {
      console.log('new title was setted')
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
