import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteTitle({ settings }) {

    return (
        <div>
            <Link to='/'>
                {
                    settings.map((item, id) => (
                        <div key={id}>
                            <h1 className="header-site-title" key={item.title}>
                                {item.title}
                            </h1>
                            <h2 className="header-site-subtitle" key={item.subtitle}>
                                {item.subtitle}
                            </h2>
                        </div>
                    ))
                }
            </Link>
        </div>
    )
}
