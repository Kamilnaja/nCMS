import React from 'react';
import {
    Link, BrowserRouter as Router
} from 'react-router-dom';

export const Header = (props) => {

    return (
        <Router>
            <div>
                <header className="header">
                    <h1>{props.settings.title}</h1>
                    <h2>{props.settings.subtitle}</h2>
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
                </header>
            </div>
        </Router>
    )
}