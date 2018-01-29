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
                    <h2 className="">{this.props.subtitle}</h2>
                </header>
            </div>
        )
    }
}