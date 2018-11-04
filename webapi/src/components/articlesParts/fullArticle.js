import React, { Component } from 'react';
import axios from 'axios';
import SingleArticleContent from './SingleArticleContent';
import appConfig from './../../utils/AppConfig';

class FullArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `${appConfig.serverUrl}${window.location.href}`
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
            <div className="articles-list">
                <div className="single-post-wrapper">
                    <SingleArticleContent item={this.state.item}></SingleArticleContent>
                    <div>My</div>
                </div>
            </div>
        )
    }
}

export default FullArticle;