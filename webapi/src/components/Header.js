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

    return (
        <Router>
            <div>
                <header className="header">
                    <h1>{props.settings.title}</h1>
                    <h2>{props.settings.subtitle}</h2>
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