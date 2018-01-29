import React, { Component } from 'react';
import ChangeSettings from './changeSettings';
import axios from 'axios';
export default class adminPanel extends Component {
    render() {
        return (
            <section className="admin-panel">
                <p>This is admin panel</p>
                <ChangeSettings
                    ChangeSettings={() => this.props.ChangeSettings()}
                >
                </ChangeSettings>
            </section>
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
                type: "SET_TITLE"
            })
        }
    }
}