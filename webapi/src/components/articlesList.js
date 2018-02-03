import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ArticlesList extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/posts')
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Ups! Problem z załadowaniem postów</p>
        }
        if (this.props.isLoading) {
            return <p>Wczytywanie postów</p>
        }
        return (
            <div>
                {/* {
                    this.props.items.map((item, id) => (
                        <ul key={id}>
                            <li key={item}>
                                {item.title}
                            </li>
                        </ul>
                    ))
                } */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);