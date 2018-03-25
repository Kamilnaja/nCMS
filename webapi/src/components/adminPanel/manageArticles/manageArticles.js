import React, { Component } from 'react';
import {
    getArticles,
    deleteArticle,
    editArticle,
} from './../../../actions/articlesActions';
import EditArticleForm from "./editArticleForm";
import { connect } from 'react-redux';

class ManageArticles extends Component {

    componentDidMount() {
        getArticles();
    }

    render() {
        if (this.props.articles.isOnEdition) {
            var editForm = <EditArticleForm></EditArticleForm>
        }

        else if (this.props.articles.data) {
            var dataLength = this.props.articles.data.length;
            var articlesList = this.props.articles.data.map((item) =>
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
                {articlesList}
                {editForm}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticles);