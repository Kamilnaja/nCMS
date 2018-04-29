/**
 * @description wrapper for all articles 
 * @param numberOfDisplayedArticles
 */

import React, { Component } from 'react';
import SingleArticle from './singleArticle';

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