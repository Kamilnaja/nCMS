import React, { Component } from 'react';
import axios from 'axios';

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: ''
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/authors/1/articles")
            .then(res => {
                this.setState({
                    author: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.author.content && this.state.author.content.map((item, idx) => <li key={idx}>{item.id}</li>)}
                </ul>
            </div>
        );
    }
}

export default Author;