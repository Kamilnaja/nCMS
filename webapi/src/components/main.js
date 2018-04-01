import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles, getOneArticle } from './../actions/articlesActions';
import ArticlesList from './articlesList';
import { InfoBox } from './utilsComponents/infoBox';

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
                    <ArticlesList item={item}></ArticlesList>
                </div>
            )
        }

        return (
            <div>
                {this.props.articles.statusInfo === 'error' &&
                    <InfoBox title="Connection error" modalType="info-box-warning"></InfoBox>}
                {dataLength === 0 && <InfoBox title="No articles in db"></InfoBox>}
                < ul className="articles-list" >
                    {data}
                </ul >

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

        getOneArticle: (data) => {
            dispatch(getOneArticle(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);