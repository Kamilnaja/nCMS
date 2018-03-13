import React, { Component } from 'react';
import ChangeSettings from './changeSettings';
import { connect } from 'react-redux';
import ManageArticles from './manageArticles/manageArticles';
import ManagePages from './managePages/managePages';
import { withRouter } from 'react-router-dom';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: '' }
        this.handleClick = this.handleClick.bind(this);
        console.log(this.state);
    }

    handleClick(event) {
        this.setState({ isVisible: event.target.text })
    }

    render() {
        return (
            <section className="admin-panel">
                <section className="admin-panel-sidebar">

                    <ul className="admin-panel-sidebar-menu">
                        <li>
                            <a onClick={this.handleClick}>Settings</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick}>Articles</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick}>Pages</a>
                        </li>
                    </ul>
                </section>
                <div className="admin-panel-forms-wrapper">
                    {this.state.isVisible === 'Settings' && <div><ChangeSettings></ChangeSettings></div>}

                    {this.state.isVisible === 'Articles' && <ManageArticles></ManageArticles>}

                    {this.state.isVisible === 'Pages' && <ManagePages></ManagePages>}

                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, null)(AdminPanel));