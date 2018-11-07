import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cleanInfoStrip } from '../../../actions/utilsActions';
import { InfoStrip } from '../../InfoStrip';
import LoginForm from './LoginForm';

class LoginScreen extends Component {

    componentDidMount() {
        cleanInfoStrip();
    }

    render() {
        return (
            <section>
                <div className="small-form-wrap">
                    {
                        this.props.loginStatus === "error" &&
                        <InfoStrip
                            text={"Wrong username or password. Please check and try again!"}
                            type="warning">
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

const mapDispatchToProps = (dispatch) => ({
    cleanInfoStrip: (data) => {
        dispatch(cleanInfoStrip());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)