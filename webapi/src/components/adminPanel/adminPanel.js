import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminPanelMain } from './AdminPanelMain';
import { RestrictedInfo } from '../RestrictedInfo';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: 'Add article' }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ isVisible: event.target.text })
    }

    menuItems = ["Edit settings", "Edit articles", "Add article", "Pages", "Users"];

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
                    <AdminPanelMain isVisible={this.state.isVisible}></AdminPanelMain>
                    :
                    <RestrictedInfo></RestrictedInfo>
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