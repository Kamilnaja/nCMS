import React, { Component } from 'react';
import { getArticles, deleteArticle } from './../../../actions/articlesActions';
import { connect } from 'react-redux';
import { DataFetcher } from './../../../utils/DataFetcher';

class ManageArticles extends Component {
    componentDidMount() {
        let secondFetcher = new DataFetcher('http://localhost:8080/api/posts')
        this.props.getArticles(secondFetcher.getDataFromApi());
    }

    editItem(itemId) {
        this.props.deleteArticle(itemId);
    }

    render() {
        if (this.props.articles.data) {
            var dataLenght = this.props.articles.data.length;
            var data = this.props.articles.data.map((item) =>
                <li key={item._id} className="single-post-wrapper">
                    <h2 className="single-post-title">{item.title}</h2>
                    <p className="single-post-body">{item.content}</p>
                    <h3>{item.author}</h3>
                    <div className="edit-options">
                        <i >Edytuj</i>
                        <i onClick={(itemId) => this.editItem(item._id)} key={item._id}>Usuń</i>
                    </div>
                    <hr />
                </li >
            )
        }
        return (
            <div className="articles-edit">
                <h2>Lista artykułów {dataLenght}</h2>
                {data}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: (data) => {
            dispatch(getArticles(data))
        },
        deleteArticle: (data) => {
            dispatch(deleteArticle(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticles);