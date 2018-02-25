import React, { Component } from 'react';
import ChangeSettings from './changeSettings';

export class AdminPanel extends Component {
    render() {
        return (
            <div className="admin-panel">
                <section className="admin-panel-sidebar">
                    <ul className="admin-panel-sidebar-menu">
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Articles</a>
                        </li>
                        <li>
                            <a>
                                Pages
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="admin-panel-main">
                    <div className="admin-panel-forms-wrapper">
                        <ChangeSettings></ChangeSettings>
                    </div>
                </section>
            </div>
        )
    }
}