/** 
* @author Kamil Naja
* @description Content of opened article 
*/

import React, { Component } from 'react';
import axios from 'axios';
import SingleArticleContent from './SingleArticleContent';
import { localUrl } from './../../utils/AppConfig';

class FullArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `${localUrl}/api${window.location.pathname}`

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
                </div>
            </div>
        )
    }
}

export default FullArticle;