import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions/posts';
import SingleArticle from './singleArticle';

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
                <SingleArticle articles={this.props.posts}></SingleArticle>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        hasErrored: state.postsHasErrored,
        isLoading: state.postsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(postsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);