// @flow 
import React from 'react';
import {
    Link
} from 'react-router-dom';

export const RestrictedInfo = () => {
    return (
        <section className="restricted">
            <div>
                <p>NO Access</p>
                <br />
                <Link to="/login">Go to the login screen </Link>
            </div>
        </section>

    )
}