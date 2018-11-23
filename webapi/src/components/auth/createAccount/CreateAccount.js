import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enableRegisterAnotherUser } from '../../../actions/authActions';
import { InfoStrip } from '../../utilsComponents/InfoStrip';
import CreateAccountForm from './CreateAccountForm';

class CreateAccount extends Component {
    componentWillMount() {
        if (this.props.statusInfo === "success") { enableRegisterAnotherUser() }
    }

    render() {
        return (
            <section>
                {/* todo - refactor this  */}
                {this.props.statusInfo === "userAlreadyExists" &&
                    <InfoStrip
                        type="warning"
                    >Account cannot be created, user already exists</InfoStrip>
                }
                {
                    this.props.statusInfo === "tooShortPassword" &&
                    <InfoStrip
                        type="warning"
                    >Password is to short</InfoStrip>
                }
                {
                    this.props.statusInfo === "emailAlreadyExists" &&
                    <InfoStrip
                        type="warning"
                    >This email already exists</InfoStrip>
                }

                {this.props.statusInfo === "success" ?
                    <InfoStrip
                        link={"/login"}
                        linkText="Go to login page"
                        type="standard"
                    >
                        Account has been created and activated. Please try login into your account!
                    </InfoStrip> :
                    <CreateAccountForm></CreateAccountForm>


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
    enableRegisterAnotherUser: (data) => {
        dispatch(enableRegisterAnotherUser());
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);