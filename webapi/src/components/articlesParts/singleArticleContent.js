import React from 'react';
import ArticleFooter from './ArticleFooter';

const SingleArticleContent = props => {
    return (
        <article>
            {
                props.item &&
                <div>
                    <h2 data-key={props.item._id}
                        className="single-post-title">
                        {props.item.title}
                    </h2>
                    <h3 className="single-post-subtitle">{props.item.subtitle}</h3>
                    <p className="single-post-body">{props.item.content}</p>
                    <ArticleFooter author={props.item.author}></ArticleFooter>
                </div>
            }
        </article>
    )
}

export default SingleArticleContent;