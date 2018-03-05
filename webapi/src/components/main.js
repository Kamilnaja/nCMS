import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArticles } from './../actions/articlesActions';
import { DataFetcher } from './../utils/DataFetcher';

class Main extends Component {

    componentDidMount() {
        let secondFetcher = new DataFetcher('http://localhost:8080/api/posts')
        this.props.setArticles(secondFetcher.getDataFromApi());
    }

    render() {
        if (this.props.articles.data) {
            var data = this.props.articles.data.map((item) =>
                <li key={item._id}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <h3>{item.author}</h3>
                    <hr />
                </li>)
        }

        return (
            <ul>
                {data}
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setArticles: (data) => {
            dispatch(setArticles(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)