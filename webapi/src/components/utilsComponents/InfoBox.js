import React from 'react';

const InfoBox = (props) => {
    let classes = `${props.type} info-box`;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default InfoBox;