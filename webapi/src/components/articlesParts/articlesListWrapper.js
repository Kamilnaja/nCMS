import React, { Component } from 'react';
import SingleArticle from './SingleArticle';

class ArticlesListWrapper extends Component {

    render() {
        if (this.props.data) {
            // todo - dodać 
        }

        return (
            <ul className="articles-list">
                {data}
            </ul>
        )
    }
}

export default ArticlesListWrapper;