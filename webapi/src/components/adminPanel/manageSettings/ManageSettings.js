import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoBox from '../../utilsComponents/InfoBox';
import InfoboxToggler from '../../utilsComponents/InfoboxToggler';
import ManageSettingsForm from './ManageSettingsForm';

class ManageSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        };
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.showInfo && <InfoBox>You have successfully changed the settings</InfoBox>
                }
                <ManageSettingsForm toggleInfoBar={InfoboxToggler.toggleInfoBox.bind(this)}></ManageSettingsForm>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    settings: state.settings
})


export default connect(mapStateToProps)(ManageSettings)