import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddNewArticle } from './../../../actions/articlesActions';
import { InfoBox } from '../../utilsComponents/infoBox';
import NEditor from './../../editor/editor';

class AddArticles extends Component {

    handleSubmit(e) {
        var submitPayload = {
            articleTitle: this.articleTitle.value,
            articleSubtitle: this.articleSubtitle.value,
            articleMainContent: this.articleMainContent.value,
            articleAuthor: this.props.user
        }
        e.preventDefault();
        AddNewArticle(submitPayload);
    }

    render() {
        if (this.props.statusInfo === "success") {
            var info = <InfoBox title="You have successfully added new article" />
        }
        return (
            <div className="form-fullwidth">
                {info && <div>{info}</div>}
                <form onSubmit={(e) => this.handleSubmit(e)}>
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
                        {/* <textarea
                            name="articleMainContent"
                            type="text"
                            ref={(input) => this.articleMainContent = input}
                            className="article-content"
                        ></textarea> */}
                        <NEditor></NEditor>
                    </div>

                    <input type="submit" value="submit" className="btn btn-default"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    statusInfo: state.articles.statusInfo,
    user: state.auth.userName
})

const mapDispatchToProps = (dispatch) => ({
    saveArticle: (data) => {
        dispatch(AddNewArticle(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddArticles);