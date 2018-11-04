import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticleContent = (props) => {
    return (
        <article>
            {
                props.item &&
                <div>
                    <h2
                        data-key={props.item._id}
                        className="single-post-title">
                        {props.item.title}
                    </h2>
                    <h3 className="single-post-subtitle">{props.item.subtitle}</h3>
                    <p className="single-post-body">{props.item.content}</p>
                    <footer className="single-post-footer">
                        <p>Written by:
                            <Link to={`authors/${props.item.author.id}`}>
                                {props.item.author.firstname} {props.item.author.lastname}
                            </Link>
                        </p>
                        {/* todo - check time info */}
                    </footer>
                </div>
            }
        </article>
    )
}

export default SingleArticleContent;