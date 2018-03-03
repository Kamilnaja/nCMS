import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/items';
import { ArticlesItems } from './ArticlesItems';

export class ArticlesPage extends Component {

    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/posts')
    }

    render() {
        const { articles } = this.props;
        console.log(this.props);
        return (
            <section>
                <div>
                    return (
                    <ArticlesItems props={this.props.articles}>
                    </ArticlesItems>
                    );
                })}
                </div>
                {/* <ArticlesList articles={this.props.posts}></ArticlesList> */}
            </section>
        )
    }
}

