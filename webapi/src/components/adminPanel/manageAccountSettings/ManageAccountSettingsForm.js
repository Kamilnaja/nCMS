import React, { Component } from 'react';
import appConfig from './../../../utils/AppConfig';

class ManageAccountSettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPasswordForm: false,
            password: '',
            passwordRepeated: ''
        };

        this.togglePasswordForm = this.togglePasswordForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        }
    }

    render() {
        return (
            <form id="changeSettings" className="form-fullwidth" onSubmit={(e) => this.handleSubmit(e)}>
                <h2 className="form-title">
                    Change the account data
                </h2>
                <div className="input-wrap">
                    <button className='btn' onClick={(e) => this.togglePasswordForm(e)}>Change Password</button>
                    {
                        this.state.showPasswordForm && <div>
                            <label>New password</label>
                            <input
                                type="text"
                                value={this.state.password}
                                onChange={e => this.handleChange(e)}
                                name="password"
                            />
                            <label>Repeat</label>
                            <input
                                type="text"
                                value={this.state.passwordRepeated}
                                onChange={e => this.handleChange(e)}
                                name="passwordRepeated"
                            />
                            <input type="submit" value="Save" className="btn btn-default" />
                        </div>
                    }
                </div>
            </form >
        );
    }
}

export default ManageAccountSettingsForm;