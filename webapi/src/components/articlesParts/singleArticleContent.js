import React from 'react';
import TimeInfo from './../articlesParts/timeInfo';

const SingleArticleContent = (props) => {
    return (
        <article>
            {
                props.item &&
                <div>
                    <h2
                        data-key={props.item._id}
                        className="single-post-title"
                    >
                        {props.item.title}
                    </h2>
                    <h3 className="single-post-subtitle">{props.item.subtitle}</h3>
                    <p className="single-post-body">{props.item.content}</p>
                    <h3>Written by: {props.item.author}</h3>
                    <TimeInfo time={props.item}></TimeInfo>
                </div>
            }
        </article>
    )
}

export default SingleArticleContent;