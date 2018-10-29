import React from 'react';
import { Link } from 'react-router-dom';

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
                    <footer className="single-post-footer">
                        <Link to={`/author/${props.item.author.id}`}>
                            Written by: {props.item.author.firstname} {props.item.author.secondname}
                        </Link>
                    </footer>
                </div>
            }
        </article>
    )
}

export default SingleArticleContent;