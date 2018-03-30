import React from 'react';

export const Footer = (props) => {

    return (
        <footer className="footer">
            <div>
                <h1>{props.settings.footer}</h1>
            </div>
        </footer>
    )
}