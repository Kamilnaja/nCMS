import React from 'react';
import PropTypes from 'prop-types';

export default function ArticlesList({ articles }) {
    const emptyMessage = (
        <p>Na stronie nie ma żadnych artykułów. Zaloguj się i coś dodaj!</p>
    )

    const articlesList = (
        <ul className="post-wrapper">
            {
                articles.map((article, id) => (
                    <li key={id} className="single-post-wrapper">
                        <h2 className="single-post-title">
                            {article.title}
                        </h2>
                        <div className="single-post-body">
                            {article.content}
                        </div>
                        <footer className="single-post-footer">
                            {article.author}
                        </footer>
                        <br />
                    </li>
                ))
            }
        </ul>
    )

    return (
        <div>
            {
                articles.length === 0 ? emptyMessage : articlesList
            }
        </div>

    )
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
}