import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SendLoginData } from './../actions/loginActions';

class LoginScreen extends Component {

    handleSubmit(e) {
        var submitPayload = {
            username: this.username.value,
            password: this.password.value
        }
        e.preventDefault();
        SendLoginData(submitPayload);
    }

    render() {
        return (
            <section>
                <div className="small-form-wrap">
                    <h2>
                        Logged as {this.props.currentUser}
                    </h2>
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
                        <input type="submit" value="submit" className="btn btn-default"></input>
                    </form>
                </div>
            </section >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.login.userName
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendLoginData: (data) => {
        dispatch(SendLoginData(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)