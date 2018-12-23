import React, { Component } from 'react';
import { InfoStrip } from '../../utilsComponents/InfoStrip';
import appConfig from './../../../utils/AppConfig';

class ManageAccountSettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPasswordForm: false,
            password: '',
            passwordRepeated: '',
            isAlertVisible: false
        };

        this.togglePasswordForm = this.togglePasswordForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    togglePasswordForm(e) {
        e.preventDefault();
        this.setState({
            showPasswordForm: !this.state.showPasswordForm
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.password === this.state.passwordRepeated) {
            let url = appConfig.serverUrl + '/api/account/change-password';
            fetch(url, {
                method: 'POST'
            })
                .then(res => res.json())
                .then(response => console.log(JSON.stringify(response)));
        } else {
            this.setState({
                isAlertVisible: true
            })
        }
    }

    cancelEdit() {

    }

    render() {
        return (
            <React.Fragment>
                <h2 className="form-title">
                    Change account data
                </h2>
                <div className="input-wrap">
                    <button className='btn' onClick={(e) => this.togglePasswordForm(e)}>
                        Change Password
                    </button>
                    <button className='btn'>
                        Change user data
                    </button>
                    {
                        this.state.isAlertVisible && <InfoStrip>Passwords do not match!!!</InfoStrip>
                    }
                    {
                        this.state.isAlertVisible
                    }
                    {
                        this.state.showPasswordForm &&
                        <form id="changeSettings" className="form-fullwidth" onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="input-wrap">
                                <label>New password</label>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={e => this.handleChange(e)}
                                    name="password"
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Repeat</label>
                                <input
                                    type="password"
                                    value={this.state.passwordRepeated}
                                    onChange={e => this.handleChange(e)}
                                    name="passwordRepeated"
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Show passwords?</label>
                                <input type="checkbox" className="input-checkbox"></input>
                            </div>
                            <input type="submit" value="Save" className="btn btn-default" />
                            <input type="cancel" value="Cancel" className="btn btn-default" />
                        </form>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default ManageAccountSettingsForm;