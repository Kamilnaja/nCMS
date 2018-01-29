import React, { Component } from 'react';
import ChangeSettings from './changeSettings';
import axios from 'axios';
export default class adminPanel extends Component {
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
                    <p>This is admin panel</p>
                    <ChangeSettings
                        ChangeSettings={() => this.props.ChangeSettings()}
                    >
                    </ChangeSettings>
                </section>

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        settings: state.settings
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ChangeSettings(data) {
            console.log(data)
            dispatch({
                type: "CHANGE_SETTINGS"
            })
        }
    }
}