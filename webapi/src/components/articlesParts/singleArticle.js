import React from 'react';
import { Link } from 'react-router-dom';
import SingleArticleContent from './SingleArticleContent';

const SingleArticle = (props) => {
    return (
        <li key={props.item.id}>
            <div
                className="single-article-wrapper">
                <SingleArticleContent
                    item={props.item}></SingleArticleContent>
                <Link to={`/api/articles/${props.item.id}`}>
                    Read More
                </Link>
            </div>
        </li>
    )
}

export default SingleArticle;