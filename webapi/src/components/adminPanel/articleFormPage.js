import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle, fetchArticle, updateArticle } from '../../actions/posts';
import ArticleForm from './articleForm';

class ArticleFormPage extends Component {
    state = {
        redirect: false
    }
    componentDidMount = () => {
        const { match } = this.props;
    }
    render() {
        return (
            <ArticleForm></ArticleForm>
        )
    }
}

export default ArticleFormPage;