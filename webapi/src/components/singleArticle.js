import React from 'react';

export default function ({ articles }) {

    return (
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
}
