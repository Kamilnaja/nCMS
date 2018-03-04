import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Main extends Component {

    // componentDidMount() {
    //     this.props.fetchData('http://localhost:8080/api/posts')
    //     console.log(this.state);
    // }

    render() {
        const { articles } = this.props;
        return (
            <section>
                <div>
                    {/* {articles.map((item, index) => {
                        return (<div key={index}>
                            {item.title}
                        </div>);
                    })} */}
                </div>
                {/* <ArticlesList articles={this.props.posts}></ArticlesList> */}
            </section>
        )
    }
};