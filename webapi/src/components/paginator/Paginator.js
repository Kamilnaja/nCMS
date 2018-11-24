import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPaginationPage, setPaginatorProperties } from '../../actions/paginatorActions';
import { getArticles } from './../../actions/articlesActions';

class Paginator extends Component {

    constructor() {
        super();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        setPaginatorProperties();
    }

    scrollToEnd() {
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }

    handlePageChange(elem) {
        this.props.setCurrentPaginationPage(parseInt(elem.target.innerHTML, 10));
        getArticles({ page: parseInt(elem.target.innerHTML, 10), size: this.props.size })
    }

    render() {
        this.pages = [];
        for (let i = 0; i < this.props.totalPages; i++) {
            this.pages.push(i);
        }

        return (
            <div className="paginator">
                <ul>
                    {
                        this.pages.map((item, idx) => (
                            <li key={idx} onClick={this.handlePageChange}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        size: state.paginator.size,
        totalPages: state.paginator.totalPages,
        currentPage: state.paginator.currentPaginationPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPaginatorProperties: () => {
            dispatch(setPaginatorProperties())
        },
        setCurrentPaginationPage: (data) => {
            dispatch(setCurrentPaginationPage(data))
        },
        getArticles: (data) => {
            dispatch(getArticles());
        }

    }
}

Paginator.propTypes = {
    size: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setPaginatorProperties: PropTypes.func.isRequired,
    setCurrentPaginationPage: PropTypes.func.isRequired,
    getArticles: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);