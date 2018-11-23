import React, { Component } from 'react';
import { getArticles } from '../../actions/articlesActions';
import { InfoStrip } from '../utilsComponents/InfoStrip';
import { connect } from 'react-redux';
import SingleArticle from '../articlesParts/SingleArticle';

class Articles extends Component {
    componentDidMount() {
        getArticles({ page: this.props.currentPaginationPage, size: this.props.paginationSize })
    }

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (this.props.articles.data) {
            var dataLength = this.props.articles.data.length;
            var articlesListToDisplay = this.props.articles.data;
            var articlesList = articlesListToDisplay.map(
                (item, key) =>
                    <SingleArticle
                        item={item}
                        key={key} />
            )
        }
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        currentPaginationPage: state.paginator.currentPaginationPage,
        paginationSize: state.paginator.paginationSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle: (data) => {
            dispatch(getArticles(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);