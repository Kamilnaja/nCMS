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
          setTitle={() => this.props.setTitle("Anna")}
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
            type: "GET_TITLE",
            payload: title
          });
        })
    },
    setTitle(data) {
      console.log(data)
      dispatch({
        type: "SET_TITLE"
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
