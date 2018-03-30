import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles, getOneArticle } from './../actions/articlesActions';
import ArticlesList from './articlesList';

class Main extends Component {
    componentDidMount() {
        getArticles()
    }
    render() {
        if (this.props.articles.data) {
            var data = this.props.articles.data.map((item, key) =>
                <div className="single-post-wrapper" key={key}>
                    <ArticlesList item={item}></ArticlesList>
                </div>
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