import React from 'react';
import { Link } from 'react-router-dom';

const ArticleFooter = (props) => {
    return (
        <footer className="single-post-footer">
            <p>
                Written by:
                <Link to={`/authors/${props.author.id}`}>
                    {props.author.firstname} {props.author.lastname}
                </Link>
            </p>
        </footer>
    )
}

export default ArticleFooter;