import React from 'react';
import { PropTypes } from 'prop-types';

export const Footer = (props) => {

    return (
        <footer className="footer" id="footer">
            <div>
                <h1>{props.settings.footer}</h1>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    footer: PropTypes.string
}