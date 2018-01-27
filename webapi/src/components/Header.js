import React, { Component } from 'react';
export default class Header extends Component {
    componentDidMount() {
        this.props.getTitle()
    }
    render() {
        return (
            <div>
                <header>{this.props.title}</header>
            </div>

        )
    }
}