import React from 'react';
import {
    Link
} from 'react-router-dom';

export const Header = (props) => {

    return (
        <div>
            <header className="header">
                <div>
                    <Link to="/">
                        <h1 className="header-site-title">
                            {props.settings.title}
                        </h1>
                        <h2>{props.settings.subtitle}</h2>
                    </Link>

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
                        <Link to="/login">
                            Log In
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}