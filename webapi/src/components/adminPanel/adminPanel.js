import React, { Component } from 'react';
import ManageArticles from './manageArticles/manageArticles';
import ManagePages from './managePages/managePages';
import AddArticle from './AddArticles/AddArticle';
import ChangeSettings from './siteSettings/changeSettings';

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: 'Edit settings' }
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
                <section className="admin-panel-forms-wrapper">
                    {this.state.isVisible === 'Edit settings' && <ChangeSettings></ChangeSettings>}

                    {this.state.isVisible === 'Edit articles' && <ManageArticles></ManageArticles>}

                    {this.state.isVisible === 'Add article' && <AddArticle></AddArticle>}

                    {this.state.isVisible === 'Pages' && <ManagePages></ManagePages>}

                </section>
            </section>
        )
    }
}
