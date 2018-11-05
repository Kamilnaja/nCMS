import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enableRegisterAnotherUser, SendNewAccountData } from '../../actions/authActions';
import { InfoStrip } from '../InfoStrip';

class CreateAccount extends Component {
    constructor() {
        super();
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

    componentWillMount() {
        if (this.props.statusInfo === "success") { enableRegisterAnotherUser() }
    }

    render() {
        return (
            <section>
                {this.props.statusInfo === "userexists" &&
                    <InfoStrip text="Account cannot be created, user already exists"></InfoStrip>
                }
                {
                    this.props.statusInfo === "toshort" &&
                    <InfoStrip text="Password is to short"></InfoStrip>
                }
                {this.props.statusInfo === "success" ?
                    <InfoStrip
                        {...this.props}
                        text={`Account has been created. Please check your email and activate your account!`}>
                    </InfoStrip> :
                    <div className="small-form-wrap">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            {/* todo - move form to separate file */}
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
                                <label>Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    ref={(input) => this.password = input}
                                    placeholder="very strong password"
                                    required
                                ></input>
                            </div>

                            <input
                                type="submit"
                                value="submit"
                                className="btn btn-default"></input>
                        </form>
                    </div>
                }
            </section >
        )
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
    enableRegisterAnotherUser: (data) => {
        dispatch(enableRegisterAnotherUser());
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);