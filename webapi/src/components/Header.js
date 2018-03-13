import React from 'react';
import {
    Link, BrowserRouter as Router
} from 'react-router-dom';

export const Header = (props) => {

    return (
        <Router>
            <div>
                <header className="header">
                    <div>
                        <h1 className="header-site-title">
                            {props.settings.title}
                        </h1>
                        <h2>{props.settings.subtitle}</h2>
                    </div>

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
                                Settings
                            </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </Router>
    )
}