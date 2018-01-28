import React, { Component } from 'react';
export default class Header extends Component {
    componentDidMount() {
        this.props.getTitle()
    }
    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="header-site-title">{this.props.title}</h1>
                </header>
            </div>
        )
    }
}