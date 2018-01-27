import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import ChangeTitle from './components/newPostForm/changeTitle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ChangeTitle></ChangeTitle>
      </div>
    );
  }
}

export default App;
