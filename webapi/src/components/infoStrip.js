import React from 'react';

export const InfoStrip = (props: Props) => {
    return (
        <div className="login-info-strip"> {props.text} {props.user}</div>
    )
}