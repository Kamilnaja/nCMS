import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getSettings } from './actions/settingActions';
import AdminPanel from './components/adminPanel/AdminPanel';
import FullArticle from './components/articlesParts/FullArticle';
import { Footer } from './components/Footer';
import Header from './components/Header';
import CreateAccount from './components/login/createAccount';
import LoginScreen from './components/LoginScreen';
import Main from './components/Main';
import AuthorPage from './components/articlesParts/AuthorPage';
import './styles/App.css';

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
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route path='/admin' component={AdminPanel} />
                            <Route path='/login' component={LoginScreen} />
                            <Route path='/createAccount' component={CreateAccount} />
                            <Route path='/post/:articleId' component={FullArticle} />
                            <Route path='/author' component={AuthorPage} />
                        </Switch>
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