import React, { Component } from 'react';
import ArticlesList from './articlesList';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions/posts';
import { PropTypes } from 'prop-types';

class Main extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/posts')
    }
    render() {
        return (
            <section>
                <ArticlesList articles={this.props.posts}></ArticlesList>
            </section>
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

Main.PropTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);