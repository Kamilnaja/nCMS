import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

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
            <div>
                <header className="header">
                    <Link to='/'>
                        {
                            this.props.items.map((item) => (
                                <div key={item._id}>
                                    <h1 className="header-site-title" key={item.title}>
                                        {item.title}
                                    </h1>
                                    <h2 className="header-site-subtitle" key={item.subtitle}>
                                        {item.subtitle}
                                    </h2>
                                </div>
                            ))
                        }
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