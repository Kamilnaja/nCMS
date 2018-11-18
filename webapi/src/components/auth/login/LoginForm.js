import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        var submitPayload = {
            username: this.username.value,
            password: this.password.value
        }
        e.preventDefault();
        login(submitPayload);
    }

    render() {
        return (
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
                        required
                    ></input>
                </div>
                <input type="submit" value="submit" className="btn btn-default"></input>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendLoginData: (data) => {
        dispatch(login(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

