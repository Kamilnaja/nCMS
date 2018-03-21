import React, { Component } from 'react';
import { getArticles, deleteArticle, editArticle } from './../../../actions/articlesActions';
import { connect } from 'react-redux';

class ManageArticles extends Component {

    componentDidMount() {
        getArticles();
    }

    render() {
        if (this.props.articles.isOnEdition) {
            // todo - return html
            var data = <form onSubmit={(e) => this.handleSubmit(e)}>
                <h2 className="form-title">
                    Edytuj artykuł
                </h2>
                <div className="input-wrap">
                    <label>Tytuł</label>
                    <input
                        name="articleTitle"
                        type="text"
                        required
                        value={this.props.articles.articleTitle}
                        onChange={this.handleChange}
                    >
                    </input>
                </div>

                <div className="input-wrap">
                    <label>Podtytuł</label>
                    <input
                        name="articleSubtitle"
                        type="text"
                        value={this.props.articles.articleSubtitle}
                        onChange={this.handleChange}
                    ></input>
                </div>

                <div className="input-wrap">
                    <label>Treść artykułu</label>
                    <textarea
                        name="articleMainContent"
                        type="text"
                        value={this.props.articles.articleMainContent}
                        onChange={this.handleChange}
                        className="article-content"
                    ></textarea>
                </div>

                <input type="submit" value="submit"></input>
            </form>
        }

        else if (this.props.articles.data) {
            var dataLength = this.props.articles.data.length;
            var data = this.props.articles.data.map((item) =>
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
    isOnEdition: state.isOnEdition
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticles);