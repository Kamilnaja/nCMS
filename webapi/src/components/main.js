import React, { Component } from 'react';
// import axios from 'axios';
import ArticlesList from './articlesList';
export default class Main extends Component {

    render() {
        return (
            <section>
                <ArticlesList></ArticlesList>
            </section>
        )
    }
}