import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { cleanInfoStrip } from '../actions/utilsActions';
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
        cleanInfoStrip();
    }
    // todo - maybe get common form parts and put to one file
    render() {
        return (
            <section>
                <div className="small-form-wrap">
                    {
                        this.props.loginStatus === "error" &&
                        <InfoStrip text={"Wrong username or password. Please check and try again!"}>
                        </InfoStrip>
                    }
                    {
                        // todo - change this
                        this.props.loginStatus === "" && <InfoStrip
                            user={this.props.user}
                            text={"Logged as: "}></InfoStrip>
                    }
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
                                placeholder="you@gmail.com"
                            >
                            </input>
                        </div>

                        <div className="input-wrap">
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                ref={(input) => this.password = input}
                                placeholder="your password"
                            ></input>
                        </div>

                        <input type="submit" value="submit" className="btn btn-default"></input>
                    </form>
                </div>
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