import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/authActions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: true
        }
    }

    toggleMenu() {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        })
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div>
                        <Link to="/">
                            <h1 className="site-title">
                                {this.props.settings.title}
                            </h1>
                            <h2>
                                {this.props.settings.subtitle}
                            </h2>
                        </Link>
                    </div>
                    <div
                        onClick={this.toggleMenu.bind(this)} className={"hamburger-menu is-open-" + this.state.menuIsOpen}  >
                        <div>
                            ...
                        </div>
                    </div>
                    {
                        this.state.menuIsOpen &&
                        <ul className="header-site-main-menu">
                            <li>
                                <Link to="/" >
                                    Home
                                </Link>
                            </li>
                            {this.props.isAuthenticated}
                            {
                                !this.props.isAuthenticated &&
                                [<li key="logIn">
                                    <Link to="/login">
                                        Log In
                                </Link>
                                </li>
                                    ,
                                <li key="createAccount">
                                    <Link to="/createAccount">
                                        Create account
                                </Link>
                                </li>]
                            }

                            {this.props.isAuthenticated &&
                                [
                                    <li key="logOut">
                                        <a onClick={logOut} href="logout">
                                            Log out
                                        </a>
                                    </li>,
                                    <li key="adminPanel">
                                        <Link to="/admin">
                                            Admin Panel
                                    </Link>
                                    </li>
                                ]}
                        </ul>
                    }
                </header>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    settings: state.settings,
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: () => {
            dispatch(logOut());
        }
    }
}

Header.propTypes = {
    settings: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string
    }),
    isAuthenticated: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
