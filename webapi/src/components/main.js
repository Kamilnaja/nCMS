import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/items';

export class Main extends Component {

    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/posts')
        console.log(this.state);
    }

    render() {
        const { articles } = this.props;
        console.log(this.props);
        return (
            <section>
                <div>
                    {articles.map((item, index) => {
                        return (<div key={index}>
                            {item.title}
                        </div>);
                    })}
                </div>
                {/* <ArticlesList articles={this.props.posts}></ArticlesList> */}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchArticles(url))
    }
}

Main = connect(mapStateToProps, mapDispatchToProps)(Main);