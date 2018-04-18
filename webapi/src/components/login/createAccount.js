import React, { Component } from 'react';
import { SendNewAccountData } from './../../actions/authActions';
import { connect } from 'react-redux';
import { InfoStrip } from './../infoStrip';

class CreateAccount extends Component {
    handleSubmit(e) {
        var submitPayload = {
            username: this.username.value,
            password: this.password.value
        }
        e.preventDefault();
        SendNewAccountData(submitPayload);
    }

    render() {
        return (
            <section>
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
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);