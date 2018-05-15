import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getSettings } from './actions/settingActions';
import Header from './components/Header';
import AdminPanel from './components/adminPanel/adminPanel';
import FullArticle from './components/articlesParts/fullArticle';
import { Footer } from './components/footer';
import CreateAccount from './components/login/createAccount';
import LoginScreen from './components/loginScreen';
import Main from './components/main';
import Error404 from './components/pagesParts/Error404';
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
                            <Route path='/api/posts/:articleId' component={FullArticle} />
                            <Route component={Error404}></Route>
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