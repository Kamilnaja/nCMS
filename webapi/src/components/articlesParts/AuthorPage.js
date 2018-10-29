import axios from 'axios';
import React, { Component } from 'react';
import { localUrl } from './../../utils/AppConfig';
import { Link } from 'react-router-dom';

class AuthorPage extends Component {
    constructor() {
        super();
        this.state = {
            titles: []
        }
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: `${localUrl}/api${window.location.pathname}/post`
        })
            .then(
                res => {
                    const data = res.data;
                    this.setState({
                        titles: data.content
                    })
                }
            )
    }

    render() {
        return (
            <div className="articles-list">
                <div className="single-post-wrapper">
                    <h2>Hello author page</h2>
                    <p>Here you can see all author articles</p>
                    <ul>
                        {this.state.titles.map((item, idx) =>
                            <li key={idx}>
                                <Link to={`../post/${item.id}`}>
                                    {item.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default AuthorPage;