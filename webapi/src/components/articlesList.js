import React from 'react';
import { getOneArticle } from './../actions/articlesActions';

const ArticlesList = (props) => {

    function returnFormattedData(item) {
        var formattedData = item.replace(/T/, ' o godzinie ');
        formattedData = formattedData.replace(/Z/, '');
        formattedData = formattedData.substr(0, formattedData.length - 3);
        return (
            formattedData
        )
    }

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
            <h3>Written by: {props.item.author}</h3>
            <time>Utworzono: {returnFormattedData(props.item.createdAt)}</time>
            <br />
            <time>Edytowano: {returnFormattedData(props.item.updatedAt)}</time>

        </li >
    )
}

export default ArticlesList;