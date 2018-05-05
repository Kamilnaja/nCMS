// @flow 
import React from 'react';

type Props = {
    settings: {
        footer: String
    }
}

export const Footer = (props: Props) => {

    return (
        <footer className="footer">
            <div>
                <h1>{props.settings.footer}</h1>
            </div>
        </footer>
    )
}