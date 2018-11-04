import React from 'react';
import { Link } from 'react-router-dom';
import SingleArticleContent from './SingleArticleContent';

const SingleArticle = (props) => {
    return (
        <li key={props.item.id}>
            <div
                className="page-wrapper">
                <SingleArticleContent
                    item={props.item}></SingleArticleContent>

                <Link to={`/articles/${props.item.id}`}>
                    Read More
                </Link>
            </div>
        </li>
    )
}

export default SingleArticle;