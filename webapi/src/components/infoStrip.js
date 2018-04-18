import React from 'react';

export const InfoStrip = (props) => {
    return (
        <div className="loginInfoStrip"> {props.text} {props.user}</div>
    )
}