import React, { Component } from 'react';
import SetTitle from './setTitle';
import axios from 'axios';
export default class adminPanel extends Component {
    render() {
        return (
            <section className="admin-panel">
                <p>This is admin panel</p>
                <SetTitle
                    setTitle={() => this.props.setTitle()}
                >
                </SetTitle>
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
        setTitle(data) {
            console.log(data)
            dispatch({
                type: "SET_TITLE"
            })
        }
    }

}
