import React, { Component } from 'react';
import axios from 'axios';
import appConfig from './../../utils/AppConfig';
import { connect } from 'react-redux';

class ActivateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.activateAccount = this.activateAccount.bind(this);
    }

    activateAccount() {
        axios.get(`${appConfig.serverUrl}/activate?key=${this.props.activation_key}`)
            .then(() => {
                alert('done');
            })
            .catch(() => {
                alert('not done')
            })
    }

    render() {
        return (
            <div className="">
                <h2>Action activation!</h2>
                <button onClick={this.activateAccount}>Activate Account</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activation_key: state.auth.activation_key
    }
}

export default connect(mapStateToProps)(ActivateAccount);