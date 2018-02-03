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
                    {console.log(this.props.items[0])}
                    {/* {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.label}
                        </li>
                    ))} */}
                    <Link to='/'>
                        <h1 className="header-site-title">
                            {/* {this.props.title} */}
                        </h1>
                        {/* <h2 className="">{this.props.subtitle}</h2> */}
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