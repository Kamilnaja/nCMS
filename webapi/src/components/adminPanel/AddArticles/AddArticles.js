import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddNewArticle } from './../../../actions/articlesActions';

class AddArticles extends Component {
    constructor(props) {

        super(props);
        this.state = {
            articleTitle: '',
            articleMainContent: '',
            articleSubtitle: '',
            articleAuthor: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeMainContent = this.handleChangeMainContent.bind(this);
        this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            articleTitle: e.target.value
        })
    }

    handleChangeMainContent(e) {
        this.setState({
            articleMainContent: e.target.value
        })
    }

    handleChangeSubtitle(e) {
        this.setState({
            articleSubtitle: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        AddNewArticle(this.state);
    }

    render() {
        return (
            <div>
                <h2 className="form-title">
                    Dodaj artykuł
                </h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="input-wrap">
                        <label>Tytuł</label>
                        <input
                            type="text"
                            required
                            value={this.state.articleTitle}
                            onChange={this.handleChangeTitle}
                        >
                        </input>
                    </div>

                    <div className="input-wrap">
                        <label>Podtytuł</label>
                        <input
                            type="text"
                            value={this.state.articleSubtitle}
                            onChange={this.handleChangeSubtitle}
                        ></input>
                    </div>

                    <div className="input-wrap">
                        <label>Treść artykułu</label>
                        <textarea
                            type="text"
                            value={this.state.articleMainContent}
                            onChange={this.handleChangeMainContent}
                            className="article-content"
                        ></textarea>
                    </div>

                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // AddNewArticle: state.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSettings: (data) => {
            dispatch(AddNewArticle(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticles);