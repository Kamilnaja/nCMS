import React from 'react';

export const InfoBox = (props) => {
    const classes = `${props.type} info-box`;

    return (
        <div id="hideContent">

            <div className={classes}>
                {props.title}
            </div>
        </div>
    )
}
