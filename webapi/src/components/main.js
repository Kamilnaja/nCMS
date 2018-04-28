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
            var data = this.props.articles.data.map((item, key) =>
                <div
                    className="single-post-wrapper"
                    key={key}>
                    <SingleArticle item={item}></SingleArticle>
                </div>
            )
        }

        return (
            <div>
                {
                    this.props.articles.statusInfo === 'error' &&
                    <InfoBox title="Connection error" modalType="info-box-warning"></InfoBox>
                }
                {
                    dataLength === 0 && <InfoBox title="No articles in db"></InfoBox>
                }
                <ul className="articles-list" >
                    {data}
                </ul>
                <Paginator dataLength={dataLength}></Paginator>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles
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