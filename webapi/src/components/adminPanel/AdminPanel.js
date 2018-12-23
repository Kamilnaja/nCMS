import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RestrictedInfo } from '../RestrictedInfo';
import { AdminPanelMain } from './AdminPanelMain';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: 'Edit settings' }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ isVisible: e.target.text })
    }

    menuItems = ["Add article", "Edit settings", "Edit articles", "Edit account settings"];

    render() {
        return (
            <section className="admin-panel" >
                <section className="admin-panel-sidebar">
                    <ul className="admin-panel-sidebar-menu">
                        {this.menuItems.map((item, key) =>
                            <li key={key}>
                                <a onClick={this.handleClick} href={item}>
                                    {item}
                                </a>
                            </li>
                        )}
                    </ul>
                </section>

                {this.props.isAuthenticated ?
                    <AdminPanelMain isVisible={this.state.isVisible}></AdminPanelMain> : <RestrictedInfo />
                }
            </section >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.userName
    }
}

export default connect(mapStateToProps, null)(AdminPanel);