import React from 'react';

export const Footer = (props: Props) => {

    return (
        <footer className="footer" id="footer">
            <div>
                <h1>{props.settings.footer}</h1>
            </div>
        </footer>
    )
}