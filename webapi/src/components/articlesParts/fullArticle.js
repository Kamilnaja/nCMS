/** 
* @author Kamil Naja
* @description Content of opened article 
*/

import React, { Component } from 'react';
import axios from 'axios';
import SingleArticleContent from './SingleArticleContent';

class FullArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `${window.location.href}`
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