import React from 'react';

export const LoginInfo = (props) => {
    return (
        <div className="loginInfoStrip"> Logged as {props.user}</div>
    )
}