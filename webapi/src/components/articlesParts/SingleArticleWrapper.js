import React, { Component } from 'react';
import axios from 'axios';
import SingleArticleContent from './SingleArticleContent';
import appConfig from '../../utils/AppConfig';

class SingleArticleWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `${appConfig.serverUrl}/api${window.location.pathname}`
        })
            .then(
                res => {
                    const article = res.data;
                    this.setState({
                        item: article
                    })
                }
            )
    }

    render() {
        return (
            <div className="single-article-wrapper">
                <SingleArticleContent item={this.state.item}></SingleArticleContent>
            </div>
        )
    }
}

export default SingleArticleWrapper;