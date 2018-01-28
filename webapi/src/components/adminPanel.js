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
        getTitle() {
            axios.get('http://localhost:8080/site_title')
                .then((res) => {
                    var title = res.data[0].title;
                    dispatch({
                        type: "GET_TITLE",
                        payload: title
                    });
                })
        },
        ChangeSettings(data) {
            console.log(data)
            dispatch({
                type: "SET_TITLE"
            })
        }
    }

}
