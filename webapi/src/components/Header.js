import { Main } from './main';
import { AdminPanel } from './adminPanel/adminPanel';
import { Settings } from './settings';
import React, { Component } from 'react';
import {
    Link, BrowserRouter as Router,
    withRouter,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import SiteTitle from './siteTitle';

export const Header = (props) => {
    // componentDidMount() {
    //     this.props.fetchData('http://localhost:8080/api/settings')
    // }

    // render() {
    //     if (this.props.hasErrored) {
    //         return <p>Sorry! There was an eror loading the items</p>
    //     }
    //     if (this.props.isLoading) {
    //         return <p>Loading</p>
    //     }
    return (
        <Router>
            <div>
                <header className="header">
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                    {/* <SiteTitle settings={this.props.items}></SiteTitle> */}
                    {/* todo - menu w formie listy  */}
                    <ul className="header-site-main-menu">
                        <li>
                            <Link to="/" >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin">
                                Admin Panel
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings">
                                settings
                            </Link>
                        </li>
                    </ul>
                    {/* <Route exact path='/' component={Main} /> */}
                </header>
                <Route exact path='/' component={Main} />
                <Route path='/admin' component={AdminPanel} />
            </div>
        </Router>
    )
    // }
}