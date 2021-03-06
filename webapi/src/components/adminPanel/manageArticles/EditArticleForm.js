import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancelEdit, saveEditedArticle } from '../../../actions/articlesActions';
import InfoBox from '../../utilsComponents/InfoBox';

class EditArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTitle: '',
            articleMainContent: '',
            articleSubtitle: '',
            articleAuthor: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let editPayload = {
            articleTitle: this.articleTitle.value,
            articleSubtitle: this.articleSubtitle.value,
            articleMainContent: this.articleMainContent.value,
        }

        saveEditedArticle(editPayload, this.props.articles.articleEdited);
    }

    findEditedElementIndex(element) {
        return (
            this.props.articles.data.findIndex(
                (x => x._id === this.props.articles.articleEdited)
            )
        )
    }

    render() {
        if (this.props.statusInfo === "success") {
            var info = <InfoBox title="You have successfully edited article" />
        }
        return (
            <div className="form-fullwidth">
                < div > {info}</div >
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <h2 className="form-title">
                        Edit an article
                    </h2>
                    <div className="input-wrap">
                        <label>Title</label>
                        <input
                            name="articleTitle"
                            type="text"
                            required
                            defaultValue={
                                this.props.articles.data[
                                    this.findEditedElementIndex()
                                ].title
                            }
                            ref={(input) => this.articleTitle = input}
                        >
                        </input>
                    </div>
                    <div className="input-wrap">
                        <label>Subtitle</label>
                        <input
                            name="articleSubtitle"
                            type="text"
                            defaultValue={
                                this.props.articles.data[
                                    this.findEditedElementIndex()
                                ].subtitle
                            }
                            ref={(input) => this.articleSubtitle = input}
                        />
                    </div>
                    <div className="input-wrap">
                        <label>Article content</label>
                        <textarea
                            name="articleMainContent"
                            type="text"
                            defaultValue={
                                this.props.articles.data[
                                    this.findEditedElementIndex()
                                ].content
                            }
                            ref={(input) => this.articleMainContent = input}
                            className="article-content"
                        ></textarea>
                    </div>
                    <input type="submit" value="submit" className="btn btn-default"></input>
                    <input type="button" value="cancel" className="btn btn-default"
                        onClick={() => cancelEdit()}></input>
                </form >
            </div >
        )
    }
}

EditArticleForm.propTypes = {
    articles: PropTypes.any.isRequired,
    statusInfo: PropTypes.string
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    statusInfo: state.articles.statusInfo
})

const mapDispatchToProps = (dispatch) => ({
    cancelEdit: (data) => {
        dispatch(cancelEdit(data))
    },
    saveEditedArticle: (data) => {
        dispatch(saveEditedArticle(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditArticleForm);