// @flow 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from './../actions/articlesActions';
import { InfoBox } from './utilsComponents/infoBox';
import SingleArticle from './articlesParts/singleArticle';
import Paginator from './paginator/paginator';

class Main extends Component {

    componentDidMount() {
        getArticles()
    }

    render() {

        if (this.props.articles.data) {
            var dataLength = this.props.articles.data.length;

            var articlesListToDisplay = this.props.articles.data
                .slice(
                    this.props.currentPaginationPage, this.props.currentPaginationPage + this.props.paginationSize
                );

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
                    <InfoBox
                        title="Connection error" modalType="info-box-warning"></InfoBox>
                }
                {
                    dataLength === 0 && <InfoBox
                        title="No articles in db"></InfoBox>
                }
                <ul className="articles-list" >
                    {articlesList}
                </ul>
                <Paginator dataLength={dataLength}></Paginator>
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
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);