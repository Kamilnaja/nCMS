import React, { Component } from 'react';
import axios from 'axios';
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/site_title').then(
            (res) => {
                this.setState({
                    title: res.data[0].title
                })
            }
        )
    }
    // componentDidMount()
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}