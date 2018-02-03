import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions/posts';

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
            <div>{
                console.log(this.props)
            }
                <ul className="post-wrapper">
                    {
                        this.props.posts.map((post, id) => (

                            <li key={id} className="single-post-wrapper">
                                <h2 className="single-post-title">
                                    {post.title}
                                </h2>
                                <div className="single-post-body">
                                    {post.body}
                                </div>
                                <footer className="single-post-footer"></footer>
                                <br />
                            </li>
                        ))
                    }
                </ul>
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