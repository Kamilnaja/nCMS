import React from 'react';
import { Link } from 'react-router-dom';

export const InfoStrip = (props) => {
    return (
        <div className={`info-strip info-strip-${props.type}`}>
            <p>
                {props.children} {props.user}
            </p>
            <p>
            {props.link && <Link to={props.link}>
                 {props.linkText}
            </Link>}
            </p>
        </div>
    )
}