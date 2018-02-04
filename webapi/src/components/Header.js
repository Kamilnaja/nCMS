import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import SiteTitle from './siteTitle';
import { BrowserRouter } from 'react-router-dom';

class Header extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/settings')
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an eror loading the items</p>
        }
        if (this.props.isLoading) {
            return <p>Loading</p>
        }
        return (
            <BrowserRouter>
                <header className="header">
                    <SiteTitle settings={this.props.items}></SiteTitle>
                    <ul className="header-site-main-menu">
                        <li>
                            <NavLink to="/" activeClassName="active" exact={true}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName="active" exact={true}>
                                Admin Panel
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" activeClassName="active" exact={true}>
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);