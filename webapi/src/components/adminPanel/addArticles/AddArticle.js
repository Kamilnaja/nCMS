import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddNewArticle } from '../../../actions/articlesActions';
import InfoboxToggler from '../../utilsComponents/InfoboxToggler';
import InfoBox from './../../utilsComponents/InfoBox';
import AddArticleForm from './AddArticleForm';

class AddArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        };
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.showInfo && <InfoBox>Article added successfully</InfoBox>
                }
                <AddArticleForm toggleInfoBar={InfoboxToggler.toggleInfoBox.bind(this)} />
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