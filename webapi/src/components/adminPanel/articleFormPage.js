import React, { Component } from 'react';
import ArticleForm from './articleForm';

class ArticleFormPage extends Component {
    saveArticle = ({ title }) => {
        return this.props.saveArticle({ title }).then(
            () => { this.setState({ redirect: true }) },
        );
    }

    state = {
        redirect: false
    }

    render() {
        return (
            <ArticleForm article={this.props.article} saveArticle={this.props.saveArticle}></ArticleForm>
        )
    }
}

export default ArticleFormPage;