import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    componentDidMount() {
        this.props.getTitle()
    }
    render() {
        return (
            <div>
                <header className="header">
                    <Link to='/'>
                        <h1 className="header-site-title">
                            {this.props.title}
                        </h1>
                        <h2 className="">{this.props.subtitle}</h2>
                    </Link>
                    <ul className="header-site-main-menu">
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
        )
    }
}
