import React from 'react';
import ArticleFooter from './ArticleFooter';

const SingleArticleContent = props => {
    return (
        <article>
            {
                props.item &&
                <div>
                    <h2 data-key={props.item._id}
                        className="page-title">
                        {props.item.title}
                    </h2>
                    <h3 className="single-post-subtitle">{props.item.subtitle}</h3>
                    <p className="single-post-body">{props.item.content}</p>
                    <ArticleFooter author={props.item.user}></ArticleFooter>
                </div>
            }
        </article>
    )
}

export default SingleArticleContent;