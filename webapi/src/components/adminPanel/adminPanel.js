import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminPanelMain } from './adminPanelMain';

var adminMain = ""

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: 'Edit settings' }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ isVisible: event.target.text })
    }

    componentWillMount() {
        if (!this.props.isAuthenticated) {
            adminMain = <div>NO Access</div>
        } else {
            adminMain = <AdminPanelMain isVisible={this.state.isVisible}></AdminPanelMain>
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.isAuthenticated) {
            adminMain = <div>NO Access</div>

        } else {
            adminMain = <AdminPanelMain isVisible={this.state.isVisible}></AdminPanelMain>
        }
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

                {adminMain}

            </section >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);