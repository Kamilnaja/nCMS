import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, cleanInfoStrip } from './../actions/authActions';
import { InfoStrip } from './InfoStrip';

class LoginScreen extends Component {
    handleSubmit(e) {
        var submitPayload = {
            username: this.username.value,
            password: this.password.value
        }
        e.preventDefault();
        login(submitPayload);
    }

    componentWillMount() {
        if (this.props.loginStatus === "error") {
            cleanInfoStrip();
        }
    }

    render() {
        return (
            <section>
                {!this.props.user ?
                    <div className="small-form-wrap">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <h2 className="form-title">
                                Login
                            </h2>
                            <div className="input-wrap">
                                <label>Name</label>
                                <input
                                    name="username"
                                    type="text"
                                    required
                                    ref={(input) => this.username = input}
                                    placeholder="someUser@gmail.com"
                                >
                                </input>
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
                            {
                                this.props.loginStatus === "error" &&
                                <div>
                                    <InfoStrip text={"Wrong username or password. Please check and try again!"}>
                                    </InfoStrip>
                                </div>
                            }
                            <input type="submit" value="submit" className="btn btn-default"></input>
                        </form>
                    </div> :
                    <InfoStrip
                        user={this.props.user}
                        text={"Logged as: "}></InfoStrip>
                }
            </section >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
        loginStatus: state.auth.loginStatus
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendLoginData: (data) => {
        dispatch(login(data))
    },
    cleanInfoStrip: (data) => {
        dispatch(cleanInfoStrip());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)