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
import { itemsFetchData } from '../actions/items';
import SiteTitle from './siteTitle';

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
            <Router>
                <div>
                    <header className="header">
                        <SiteTitle settings={this.props.items}></SiteTitle>
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
                    <Route path='/' component={Main} />
                    <Route path='/admin' component={AdminPanel} />
                    <Route path='/settings' component={Settings} />
                </div>


            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));