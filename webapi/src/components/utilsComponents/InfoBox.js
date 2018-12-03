import React from 'react';
import { PropTypes } from 'prop-types';

const InfoBox = (props) => {
    let classes = `${props.type} info-box`;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default InfoBox;

InfoBox.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
};