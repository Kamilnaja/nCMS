import React, { Component } from 'react';
import { getArticles, deleteArticle, editArticle, cancelEdit, handleSubmit, articleEdited } from './../../../actions/articlesActions';
import { connect } from 'react-redux';

class ManageArticles extends Component {

    componentDidMount() {
        getArticles();
    }

    findEditedElementIndex(element) {
        return (
            this.props.articles.data.findIndex((x => x._id === this.props.articles.articleEdited))
        )
    }
    render() {
        if (this.props.articles.isOnEdition) {
            var data = <form onSubmit={(e) => this.handleSubmit(e)}>
                <h2 className="form-title">
                    Edit an article
                </h2>
                <div className="input-wrap">
                    <label>Tytuł</label>
                    <input
                        name="articleTitle"
                        type="text"
                        required
                        defaultValue={
                            this.props.articles.data[
                                this.findEditedElementIndex()
                            ].title
                        }
                        onChange={this.handleChange}
                    >
                    </input>
                </div>
                <div className="input-wrap">
                    <label>Podtytuł</label>
                    <input
                        name="articleSubtitle"
                        type="text"
                        defaultValue={
                            this.props.articles.data[
                                this.findEditedElementIndex()
                            ].subtitle
                        }
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className="input-wrap">
                    <label>Treść artykułu</label>
                    <textarea
                        name="articleMainContent"
                        type="text"
                        defaultValue={
                            this.props.articles.data[
                                this.findEditedElementIndex()
                            ].content
                        }
                        onChange={this.handleChange}
                        className="article-content"
                    ></textarea>
                </div >
                <input type="submit" value="submit"></input>
                <input type="button" value="cancel" onClick={() => cancelEdit()}></input>
            </form >
        }

        else if (this.props.articles.data) {
            var dataLength = this.props.articles.data.length;
            var data = this.props.articles.data.
                map((item) =>
                    <li key={item._id} className="single-post-wrapper">
                        <h2 className="single-post-title">
                            {item.title}
                        </h2>
                        <p className="single-post-body">
                            {item.content}
                        </p>
                        <h3>
                            {item.author}
                        </h3>
                        <div className="edit-options">
                            <i onClick={(itemId) => editArticle(item._id)}>
                                Edytuj
                        </i>
                            <i onClick={(itemId) => deleteArticle(item._id)}>
                                Usuń
                        </i>
                        </div>
                    </li>
                )
        }

        return (
            <div className="articles-edit" >
                <div className="info-box">
                </div>
                <h2>Lista artykułów {dataLength}</h2>
                {data}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    statusInfo: state.statusInfo,
})

const mapDispatchToProps = (dispatch) => ({
    getArticles: (data) => {
        dispatch(getArticles(data))
    },
    deleteArticle: (data) => {
        dispatch(deleteArticle(data))
    },
    editArticle: (data) => {
        dispatch(editArticle(data))
    },
    cancelEdit: (data) => {
        dispatch(cancelEdit(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticles);