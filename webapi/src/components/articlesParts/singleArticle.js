import React from 'react';
import { Link } from 'react-router-dom';
import SingleArticleContent from './singleArticleContent';

const SingleArticle = (props) => {

    return (
        <li key={props.item._id}>
            <SingleArticleContent item={props.item}></SingleArticleContent>
            <Link to={`/api/posts/${props.item._id}`}>
                Read More
            </Link>
        </li>
    )
}

export default SingleArticle;