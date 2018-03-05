import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArticles } from './../actions/articlesActions';
import { DataFetcher } from './../utils/DataFetcher';

class Main extends Component {

    componentDidMount() {
        let secondFetcher = new DataFetcher('http://localhost:8080/api/posts')
        this.props.setArticles(secondFetcher.getDataFromApi());
    }
    render() {
        return (

            // <ArticlesItems data={this.props.articles} />
            <div>
                {/* {this.props.articles} */}
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
        setArticles: (data) => {
            dispatch(setArticles(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)