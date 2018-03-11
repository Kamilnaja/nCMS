import React, { Component } from 'react';
import { getArticles, deleteArticle } from './../../../actions/articlesActions';
import { connect } from 'react-redux';
import { DataFetcher } from './../../../utils/DataFetcher';
import { localUrl } from './../../../utils/AppConfig';

class ManageArticles extends Component {
    componentDidMount() {
        let secondFetcher = new DataFetcher(`${localUrl}/api/posts`)
        this.props.getArticles(secondFetcher.getDataFromApi());
    }

    removeItem(itemId) {
        this.props.deleteArticle(itemId);
    }

    render() {
        if (this.props.articles.data) {
            var dataLength = this.props.articles.data.length;
            var data = this.props.articles.data.map((item) =>
                <li key={item._id} className="single-post-wrapper">
                    <h2 className="single-post-title">{item.title}{item._id}</h2>
                    <p className="single-post-body">{item.content}</p>
                    <h3>{item.author}</h3>
                    <div className="edit-options">
                        <i >Edytuj</i>
                        <i onClick={(itemId) => this.removeItem(item._id)} key={item._id}>
                            Usuń
                        </i>
                    </div>
                    <hr />
                </li >
            )
        }
        return (
            <div className="articles-edit">
                <div className="info-box">
                    {this.props.articles.statusInfo}
                </div>
                <h2>Lista artykułów {dataLength}</h2>
                {data}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        statusInfo: state.statusInfo,
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