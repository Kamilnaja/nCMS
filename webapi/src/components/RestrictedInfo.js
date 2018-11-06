import React from 'react';
import {
    Link
} from 'react-router-dom';

export const RestrictedInfo = () => {

    function redirectToMain() {
        setTimeout(() => {
            window.location.href = '/';
        }, 3000)
    }

    return (
        <section className="restricted">
            <div>
                <p>NO Access</p>
                <br />
                <Link to="/login">You will be redirected to the main page...</Link>
                {
                    redirectToMain()
                }
            </div>
        </section>
    )
}