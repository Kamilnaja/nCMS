import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSettings } from './../../../actions/settingActions';
import FormReseter from './../../../utils/FormReseter';

class ManageSettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit(e) {
        let submitPayload = {
            title: this.title.value,
            subtitle: this.subtitle.value,
            footer: this.footer.value
        }

        e.preventDefault();
        setSettings(submitPayload);
        FormReseter.resetForm("changeSettings");
        this.props.toggleInfoBar();
        setTimeout(() => {
            this.props.toggleInfoBar();
        }, 3000)
    }

    render() {
        return (
            <form id="changeSettings" className="form-fullwidth" onSubmit={(e) => this.handleSubmit(e)}>
                <h2 className="form-title">
                    Change the website data
                </h2>
                <div className="input-wrap">
                    <label>New website name</label>
                    <input
                        type="text"
                        ref={(input) => this.title = input}
                        required
                    />
                </div>
                <div className="input-wrap">
                    <label>New website slogan</label>
                    <input
                        type="text"
                        required
                        ref={(input) => this.subtitle = input}
                    />
                    <div className="input-wrap">
                        <label>Text for footer</label>
                        <input
                            type="text"
                            required
                            ref={(input) => this.footer = input}
                        />
                    </div>
                </div>
                <input type="submit" value="Save" className="btn btn-default" />
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    settings: state.settings,
})

const mapDispatchToProps = (dispatch) => ({
    setSettings: (data) => {
        dispatch(setSettings(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageSettingsForm);