import React, { Component } from 'react';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
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
            </form>);
    }
}

export default ChangePassword;