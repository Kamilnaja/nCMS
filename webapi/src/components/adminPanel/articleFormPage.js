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
            <div className="form-wrapper">
                <form>
                    <h2 className="form-title">
                        Dodaj nowy artykuł
                    </h2>
                    <div className="input-wrap">
                        <label>Tytuł artykułu</label>
                        <input type="text" />
                    </div>
                    <input className="btn" type="submit" value="zapisz" />
                </form>
            </div>
        )
    }
}

export default ArticleFormPage;