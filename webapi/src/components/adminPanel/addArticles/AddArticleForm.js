import React, { Component } from 'react';
import FormReseter from '../../../utils/FormReseter';
import { AddNewArticle } from './../../../actions/articlesActions';
import Editor from './../../editor/Editor';

export default class AddArticleForm extends Component {

    handleChange(e) {
        this.setState({
            currentText: e.target.value
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            currentText: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var submitPayload = {
            articleTitle: this.articleTitle.value,
            articleSubtitle: this.articleSubtitle.value,
            articleMainContent: this.state.currentText,
            articleAuthor: this.props.user
        }

        AddNewArticle(submitPayload);
        this.props.toggleInfoBar();
        setTimeout(() => {
            this.props.toggleInfoBar();
        }, 3000)
        FormReseter.resetForm("addArticleForm");
    }

    render() {
        return (
            <form id="addArticleForm" onSubmit={(e) => this.handleSubmit(e)} className="form-fullwidth">
                <h2 className="form-title">
                    Add new article
                </h2>
                <div className="input-wrap">
                    <label>Tytuł</label>
                    <input
                        name="articleTitle"
                        type="text"
                        required
                        ref={(input) => this.articleTitle = input}
                    >
                    </input>
                </div>
                <div className="input-wrap">
                    <label>Podtytuł</label>
                    <input
                        name="articleSubtitle"
                        type="text"
                        ref={(input) => this.articleSubtitle = input}
                    ></input>
                </div>
                <div className="input-wrap">
                    <label>Treść artykułu</label>
                    <Editor
                        name="articleMainContent"
                        handleChange={this.handleChange.bind(this)}
                        textLength={this.state.currentText.length}
                    ></Editor>
                </div>
                <input type="submit" value="submit" className="btn btn-default"></input>
            </form>
        );
    }
}