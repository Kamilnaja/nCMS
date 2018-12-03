import React, { Component } from 'react';
import InfoBox from '../../utilsComponents/InfoBox';
import InfoboxToggler from './../../utilsComponents/InfoboxToggler';
import ManageAccountSettingsForm from './ManageAccountSettingsForm';

class ManageAccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.showInfo && <InfoBox>You have successfully changed the settings</InfoBox>
                }
                <div>Account settings</div>
                <ManageAccountSettingsForm toggleInfoBar={InfoboxToggler.toggleInfoBox.bind(this)}></ManageAccountSettingsForm>
            </React.Fragment>
        );
    }
}

export default ManageAccountSettings;