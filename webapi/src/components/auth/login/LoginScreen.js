import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InfoStrip } from '../../utilsComponents/InfoStrip';
import LoginForm from './LoginForm';

class LoginScreen extends Component {

    render() {
        return (
            <section>
                <div className="small-form-wrap">
                    {
                        this.props.loginStatus === "error" &&
                        <InfoStrip type="warning">
                            Wrong username or password. Please check and try again!
                        </InfoStrip>
                    }
                    {
                        this.props.loginStatus === "success" ?
                            <InfoStrip
                                type="standard"
                                link="/"
                                linkText=" Go to main page"
                            >
                                Login success. Logged as {this.props.username}</InfoStrip> :
                            <LoginForm></LoginForm>
                    }
                </div>
            </section >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.auth.loginStatus,
        username: state.auth.userName
    }
}

export default connect(mapStateToProps)(LoginScreen)