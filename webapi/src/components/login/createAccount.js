import React, { Component } from 'react';
import { SendNewAccountData } from './../../actions/authActions';
import { connect } from 'react-redux';
import { InfoStrip } from '../InfoStrip';
import { enableRegisterAnotherUser } from './../../actions/authActions';

class CreateAccount extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        var submitPayload = {
            login: this.login.value,
            password: this.password.value,
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
                {this.props.statusInfo === 'notUniqueUserName' && <InfoStrip text="Your username is not unique"></InfoStrip>
                }
                {this.props.statusInfo === "success" ?
                    <InfoStrip
                        user={this.props.user}
                        text={"Account has been created"}
                    >
                    </InfoStrip> :
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
                                    required
                                    ref={(input) => this.login = input}
                                    placeholder="someUser"
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
                                ></input>
                            </div>

                            <div className="input-wrap">
                                <label>Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    ref={(input) => this.password = input}
                                    placeholder="very strong password"
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