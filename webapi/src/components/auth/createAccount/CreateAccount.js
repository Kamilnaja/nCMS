import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enableRegisterAnotherUser } from '../../../actions/authActions';
import { InfoStrip } from '../../InfoStrip';
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
                        text="Account cannot be created, user already exists"
                        type="warning"
                    ></InfoStrip>
                }
                {
                    this.props.statusInfo === "tooShortPassword" &&
                    <InfoStrip
                        text="Password is to short"
                        type="warning"
                    ></InfoStrip>
                }
                {
                    this.props.statusInfo === "emailAlreadyExists" &&
                    <InfoStrip
                        text="Duplicated Email"
                        type="warning"
                    ></InfoStrip>
                }

                {this.props.statusInfo === "success" &&
                    <InfoStrip
                        link={"/login"}
                        linkText="Go to login page"
                        text={`Account has been created and activated. Please try login into your account!`}
                        type="standard"
                    >
                    </InfoStrip>
                }
                <CreateAccountForm></CreateAccountForm>
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