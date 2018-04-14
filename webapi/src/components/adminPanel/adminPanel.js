import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminPanelMain } from './adminPanelMain';
import { RestrictedInfo } from './../restrictedInfo';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: 'Add article' }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ isVisible: event.target.text })
    }

    render() {
        return (
            <section className="admin-panel" >
                <section className="admin-panel-sidebar">
                    <ul className="admin-panel-sidebar-menu">
                        <li>
                            <a onClick={this.handleClick}>Edit settings</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick}>Edit articles</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick}>Add article</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick}>Pages</a>
                        </li>
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