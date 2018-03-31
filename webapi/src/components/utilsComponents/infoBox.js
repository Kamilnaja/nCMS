import React from 'react';
export const InfoBox = (props) => {
    const classes = `${props.modalType} info-box`;
    return (
        <div className={classes}>
            {props.title}
        </div>
    )
}
