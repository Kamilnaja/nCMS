import React from 'react';
import { getOneArticle } from './../actions/articlesActions';

const ArticlesList = (props) => {

    return (
        <li key={props.item._id}>
            <h2
                data-key={props.item._id}
                className="single-post-title"
                onClick={getOneArticle}
            >
                {props.item.title}
            </h2>
            <h3 className="single-post-subtitle">{props.item.subtitle}</h3>
            <p className="single-post-body">{props.item.content}</p>
            <h3>{props.item.author}</h3>
            {props.item.dateOfAdding && <div>{props.item.dateOfAdding.toString()}</div>}
        </li >
    )
}

export default ArticlesList;