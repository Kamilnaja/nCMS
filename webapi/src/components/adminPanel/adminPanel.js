import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManageArticles from './manageArticles/manageArticles';
import ManagePages from './managePages/managePages';
import { withRouter } from 'react-router-dom';
import AddArticle from './AddArticles/AddArticle';
import ChangeSettings from './siteSettings/changeSettings';

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
            <section className="admin-panel">
                <section className="admin-panel-sidebar">
                    <ul className="admin-panel-sidebar-menu">
                        <li>
                            <a onClick={this.handleClick}>Settings</a>
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
                <section className="admin-panel-forms-wrapper">
                    {this.state.isVisible === 'Settings' && <div><ChangeSettings></ChangeSettings></div>}

                    {this.state.isVisible === 'Edit articles' && <ManageArticles></ManageArticles>}

                    {this.state.isVisible === 'Add article' && <AddArticle></AddArticle>}

                    {this.state.isVisible === 'Pages' && <ManagePages></ManagePages>}

                </section>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, null)(AdminPanel));