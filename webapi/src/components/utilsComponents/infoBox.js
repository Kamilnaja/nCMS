import React from 'react';

export const InfoBox = (props) => {
    const classes = `${props.modalType} info-box`;

    function disableVisibility() {
        var hideContent = document.getElementById('hideContent');
        // hideContent.style.display = 'none'
    }

    return (
        <div id="hideContent">
            {
                setTimeout(disableVisibility, 3000)
            }
            <div className={classes}>
                {props.title}
            </div>
        </div>
    )
}
