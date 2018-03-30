import React, { Component } from 'react';
import {
    getArticles,
    deleteArticle,
    showEditionForm,
} from './../../../actions/articlesActions';
import EditArticleForm from "./editArticleForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
                        <i onClick={(itemId) => showEditionForm(item._id)}>
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
            <div className="articles-edit">
                <h2>Chose an item from {dataLength} articles and edit or delete</h2>
                {articlesList}
                {editForm}
            </div>
        )
    }
}

ManageArticles.propTypes = {
    articles: PropTypes.any.isRequired, // todo - remove any
    statusInfo: PropTypes.string
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
        dispatch(showEditionForm(data))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticles);