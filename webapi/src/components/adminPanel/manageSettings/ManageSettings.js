import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InfoBox } from '../../utilsComponents/InfoBox';
import ManageSettingsForm from './ManageSettingsForm';

class ManageSettings extends Component {
    render() {
        return (
            <div>
                {
                    this.props.statusInfo === "success" ? <InfoBox
                        title="You have successfully changed the settings"
                        type="standard"
                    /> : <ManageSettingsForm></ManageSettingsForm>
                }
            </div>
        )
    };
}

const mapStateToProps = (state) => ({
    settings: state.settings,
    statusInfo: state.settings.statusInfo
})


export default connect(mapStateToProps)(ManageSettings)