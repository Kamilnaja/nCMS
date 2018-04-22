import React from 'react';

export const InfoStrip = (props) => {
    return (
        <div className="login-info-strip"> {props.text} {props.user}</div>
    )
}