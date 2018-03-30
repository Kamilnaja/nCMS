import React from 'react';
export const InfoBox = (props) => {

    return (
        <div className="info-box">
            <p>Infobox</p>
            {props.statusInfo}
        </div>
    )
}
