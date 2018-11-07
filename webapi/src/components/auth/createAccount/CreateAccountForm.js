import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SendNewAccountData } from '../../../actions/authActions';

class CreateAccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        var submitPayload = {
            login: this.login.value,
            password: this.password.value,
            email: this.email.value
        }
        e.preventDefault();
        SendNewAccountData(submitPayload);
    }

    render() {
        return (
            <div className="small-form-wrap">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h2 className="form-title">
                        Create new account
                    </h2>
                    <div className="input-wrap">
                        <label>Login</label>
                        <input
                            name="login"
                            type="text"
                            ref={(input) => this.login = input}
                            placeholder="someUser"
                            required
                        >
                        </input>
                    </div>

                    <div className="input-wrap">
                        <label>Email</label>
                        <input
                            name="email"
                            type="text"
                            ref={(input) => this.email = input}
                            placeholder="youremail@gmail.com"
                            required
                        ></input>
                    </div>

                    <div className="input-wrap">
                        <label>Password (at least 4 characters)</label>
                        <input
                            name="password"
                            type="password"
                            ref={(input) => this.password = input}
                            placeholder="very strong password"
                            required title="Password is to short"
                            pattern=".{4,}"
                        ></input>
                    </div>

                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-default"></input>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        statusInfo: state.auth.statusInfo
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendNewAccountData: (data) => {
        dispatch(SendNewAccountData(data));
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);