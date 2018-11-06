import React from 'react';
import { Link } from 'react-router-dom';

export const InfoStrip = (props) => {
    return (
        <div className="login-info-strip">
            <p>
                {props.text} {props.user}
            </p>
            {props.link && <Link to={props.link}>Login page</Link>}
        </div>
    )
}