import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../actions/articlesActions';
import SingleArticle from './articlesParts/SingleArticle';
import { InfoStrip } from './InfoStrip';
import Paginator from './paginator/Paginator';

class Main extends Component {

    componentDidMount() {
        getArticles()
    }

    render() {
        if (this.props.articles.data) {
            var dataLength = this.props.articles.data.length;
            var articlesListToDisplay = this.props.articles.data;
            var articlesList = articlesListToDisplay.map(
                (item, key) =>
                    <SingleArticle
                        item={item}
                        key={key}></SingleArticle>
            )
        }

        return (
            <div>
                {
                    this.props.articles.statusInfo === 'error' &&
                    <InfoStrip
                        title="Connection error" modalType="info-box-warning"></InfoStrip>
                }
                {
                    dataLength === 0 &&
                    <InfoStrip type="warning">
                        No articles in db
                    </InfoStrip>
                }
                <ul className="articles-list" >
                    {articlesList}
                </ul>
                <Paginator></Paginator>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        currentPaginationPage: state.settings.currentPaginationPage,
        paginationSize: state.settings.paginationSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: (data) => {
            dispatch(getArticles(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);