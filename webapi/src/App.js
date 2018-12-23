import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getSettings } from './actions/settingActions';
import './assets/styles/App.css';
import AdminPanel from './components/adminPanel/AdminPanel';
import SingleArticleWrapper from './components/articlesParts/SingleArticleWrapper';
import CreateAccount from './components/auth/createAccount/CreateAccount';
import LoginScreen from './components/auth/login/LoginScreen';
import Author from './components/author/Author';
import Main from './components/Main';
import { Footer } from './components/pagesParts/Footer';
import Header from './components/pagesParts/Header';

class App extends Component {

    componentDidMount() {
        getSettings();
    }

    render() {
        return (
            <Router>
                <div className="background-app">
                    <div className="App container-app">
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route path='/admin' component={AdminPanel} />
                            <Route path='/login' component={LoginScreen} />
                            <Route path='/createAccount' component={CreateAccount} />
                            <Route path='/articles/:articleId' component={SingleArticleWrapper} />
                            <Route path="/authors/:authorId" component={Author} />
                        </Switch>
                        <Footer settings={this.props.settings} />
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    settings: state.settings
});

const mapDispatchToProps = (dispatch) => {
    return {
        getSettings: (data) => {
            dispatch(getSettings(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);