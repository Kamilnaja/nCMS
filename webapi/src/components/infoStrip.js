import React from 'react';
import { Link } from 'react-router-dom';

export const InfoStrip = (props) => {
    return (
        <div className="login-info-strip">
            {props.text} {props.user}
            <Link to="/activateaccount">Aktywacja</Link>
        </div>
    )
}