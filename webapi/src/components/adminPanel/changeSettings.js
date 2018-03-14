import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSettings } from './../../actions/settingActions';

class ChangeSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            footer: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
        this.handleChangeFooter = this.handleChangeFooter.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeSubtitle(event) {
        this.setState({ subtitle: event.target.value });
    }

    handleChangeFooter(event) {
        this.setState({ footer: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        setSettings(this.state);
    }

    render() {
        return (
            <div>
                <div className="form-wrapper">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <h2 className="form-title">
                            Zmień tytuł
                        </h2>
                        <div>
                            <div>
                                <div className="input-wrap">
                                    <label>Nowy tytuł</label>
                                    <input
                                        type="text"
                                        required
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="input-wrap">
                                    <label>Zmień podtytuł</label>
                                    <input
                                        type="text"
                                        required
                                        value={this.state.subtitle}
                                        onChange={this.handleChangeSubtitle}
                                    />
                                </div>
                                <div className="input-wrap">
                                    <label>Zmień tekst stopki</label>
                                    <input
                                        type="text"
                                        required
                                        value={this.state.footer}
                                        onChange={this.handleChangeFooter}
                                    />
                                </div>
                            </div>
                            <input type="submit" value="Save" className="btn" />
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        settings: state.settings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSettings: (data) => {
            dispatch(setSettings(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSettings)