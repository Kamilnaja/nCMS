import React from 'react';
import { Link } from 'react-router-dom';

const ArticleFooter = (props) => {
    return (
        <footer className="single-post-footer">
            <p>
                Written by:
                <Link to={`/authors/${props.author.id}`}>
                    {props.author.firstName} {props.author.lastName}
                </Link>
            </p>
        </footer>
    )
}

export default ArticleFooter;