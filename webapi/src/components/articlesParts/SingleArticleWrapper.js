import React, { Component } from 'react';
import axios from 'axios';
import SingleArticleContent from './SingleArticleContent';
<<<<<<< HEAD:webapi/src/components/articlesParts/SingleArticleWrapper.js
import appConfig from '../../utils/AppConfig';
=======
import { localUrl } from './../../utils/AppConfig';
>>>>>>> bff59e0a0bf7b1bffa66387ac36e4a29482e30c0:webapi/src/components/articlesParts/fullArticle.js

class SingleArticleWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' }
    }

    componentDidMount() {
        axios({
            method: "GET",
<<<<<<< HEAD:webapi/src/components/articlesParts/SingleArticleWrapper.js
            url: `${appConfig.serverUrl}/api${window.location.pathname}`
=======
            url: `${localUrl}/api${window.location.pathname}`

>>>>>>> bff59e0a0bf7b1bffa66387ac36e4a29482e30c0:webapi/src/components/articlesParts/fullArticle.js
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
<<<<<<< HEAD:webapi/src/components/articlesParts/SingleArticleWrapper.js
            <div className="page-wrapper">
                <SingleArticleContent item={this.state.item}></SingleArticleContent>
=======
            <div className="articles-list">
                <div className="single-post-wrapper">
                    <SingleArticleContent item={this.state.item}></SingleArticleContent>
                </div>
>>>>>>> bff59e0a0bf7b1bffa66387ac36e4a29482e30c0:webapi/src/components/articlesParts/fullArticle.js
            </div>
        )
    }
}

export default SingleArticleWrapper;