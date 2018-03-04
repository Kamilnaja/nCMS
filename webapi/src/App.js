import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/footer';
import { connect } from 'react-redux';
import { logger } from 'react-redux';
import { setTitle, setSettings } from './actions/settingActions';
import { DataFetcher } from './utils/DataFetcher';
import { checkObjectHasAllValues } from './utils/objectValuesChecker';

class App extends Component {

  componentDidMount() {
    if (
      !checkObjectHasAllValues(this.props.settings)
    ) {
      let dataFetcher = new DataFetcher('http://localhost:8080/api/settings');
      this.props.setSettings(dataFetcher.getDataFromApi());
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            // title={this.props.title}
            // subtitle={this.props.subtitle}
            settings={this.props.settings}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.settings.title,
    subtitle: state.settings.subtitle,
    settings: state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    },
    setSettings: (data) => {
      dispatch(setSettings(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
