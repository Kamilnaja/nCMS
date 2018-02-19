// import React, { Component } from 'react';
// import ArticlesList from './articlesList';
// import { connect } from 'react-redux';
// import { postsFetchData } from '../actions/posts';

// export class Main extends Component {

//     componentDidMount() {
//         // this.props.posts.dispatch(postsFetchData('http://localhost:8080/api/posts'))
//         // console.log(this.props.postsFetchData());
//         console.log(this.props);
//     }

//     render() {
//         return (
//             <section>
//                 <ArticlesList articles={this.props.posts}></ArticlesList>
//             </section>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         posts: state.posts,
//         articles: state.articles
//     };
// };

// const mapDispatchToProps = {
//     postsFetchData
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Main);