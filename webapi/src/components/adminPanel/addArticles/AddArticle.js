import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddNewArticle } from '../../../actions/articlesActions';
import InfoBox from './../../utilsComponents/InfoBox';
import AddArticleForm from './AddArticleForm';

class AddArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        };
        this.toggleInfoBar = this.toggleInfoBar.bind(this);
    }

    toggleInfoBar() {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.showInfo && <InfoBox>Article added successfully</InfoBox>
                }
                <AddArticleForm toggleInfoBar={this.toggleInfoBar} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    author: state.auth.userName
})

const mapDispatchToProps = (dispatch) => ({
    saveArticle: (data) => {
        dispatch(AddNewArticle(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddArticles);