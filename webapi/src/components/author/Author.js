import React, { Component } from 'react';
import axios from 'axios';
import appConfig from './../../utils/AppConfig';
import { Link } from 'react-router-dom';

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authorArticles: '',
            author: ''
        }
    }

    componentDidMount() {
        axios.get(`${appConfig.serverUrl}/api${window.location.pathname}/articles`)
            .then(res => {
                this.setState({
                    authorArticles: res.data
                })
            });
        // authors/:authorId
        axios.get(`${appConfig.serverUrl}/api${window.location.pathname}`)
            .then(res => {
                this.setState({
                    author: res.data
                })
            })
    }

    render() {
        return (
            <div className="page-wrapper">
                <h3 className="page-title">Articles written by : {this.state.author.firstname} {this.state.author.lastname}</h3>
                <ul className="page-list">
                    {this.state.authorArticles.content && this.state.authorArticles.content.map((item, idx) =>
                        <li key={idx}>
                            <Link to={`/articles/${item.id}`}>{item.id} {item.title}</Link>
                        </li>)}
                </ul>
            </div>
        );
    }
}

export default Author;