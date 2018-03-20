import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddNewArticle } from './../../../actions/articlesActions';

class AddArticles extends Component {
    constructor(props) {

        super(props);
        this.state = {
            articleTitle: '',
            articleMainContent: '',
            articleSubtitle: '',
            articleAuthor: '',
            statusInfo: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        AddNewArticle(this.state);
        this.setState({
            articleTitle: '',
            articleMainContent: '',
            articleSubtitle: '',
            articleAuthor: '',
        })
    }

    render() {
        if (this.props.statusInfo === 'pending') {
            return <p>Loading</p>
        }
        return (

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h2 className="form-title">
                    Dodaj artykuł
                </h2>
                <div className="input-wrap">
                    <label>Tytuł</label>
                    <input
                        name="articleTitle"
                        type="text"
                        required
                        value={this.state.articleTitle}
                        onChange={this.handleChange}
                    >
                    </input>
                </div>

                <div className="input-wrap">
                    <label>Podtytuł</label>
                    <input
                        name="articleSubtitle"
                        type="text"
                        value={this.state.articleSubtitle}
                        onChange={this.handleChange}
                    ></input>
                </div>

                <div className="input-wrap">
                    <label>Treść artykułu</label>
                    <textarea
                        name="articleMainContent"
                        type="text"
                        value={this.state.articleMainContent}
                        onChange={this.handleChange}
                        className="article-content"
                    ></textarea>
                </div>

                <input type="submit" value="submit"></input>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        statusInfo: state.statusInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveArticle: (data) => {
            dispatch(AddNewArticle(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticles);