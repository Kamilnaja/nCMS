// @flow 
import React from 'react';

type Props = {
    text: string,
}

export const InfoStrip = (props: Props) => {
    return (
        <div className="login-info-strip"> {props.text} {props.user}</div>
    )
}