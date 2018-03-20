import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles, getOneArticle } from './../actions/articlesActions';

class Main extends Component {
    componentDidMount() {
        getArticles()
    }

    render() {
        if (this.props.articles.data) {
            var data = this.props.articles.data.map((item) =>
                <li
                    key={item._id}
                    className="single-post-wrapper">
                    <h2
                        data-key={item._id}
                        className="single-post-title"
                        onClick={getOneArticle}
                    >
                        {item.title}
                    </h2>
                    <h3 className="single-post-subtitle">{item.subtitle}</h3>
                    <p className="single-post-body">{item.content}</p>
                    <h3>{item.author}</h3>
                </li >
            )
        }

        return (
            <ul className="articles-list">
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
        getArticles: (data) => {
            dispatch(getArticles(data))
        },

        getOneArticle: (data) => {
            dispatch(getOneArticle(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);