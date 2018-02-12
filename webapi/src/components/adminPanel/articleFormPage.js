import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle, fetchArticle, updateArticle } from '../../actions/posts';
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
    componentDidMount = () => {
        const { match } = this.props;
    }
    render() {
        return (
            <ArticleForm article={this.props.article} saveArticle={this.props.saveArticle}></ArticleForm>
        )
    }
}

export default ArticleFormPage;