import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPaginationPage, setPaginatorProperties } from '../../actions/paginatorActions';
import { getArticles } from './../../actions/articlesActions';
import PaginatorItem from './PaginatorItem';

class Paginator extends Component {

    constructor() {
        super();
        this.state = {
            isActive: false
        }
        this.handlePaginatorClick = this.handlePaginatorClick.bind(this);
    }

    componentDidMount() {
        setPaginatorProperties();
    }

    _scrollToBottom() {
        setTimeout(() => {
            window.scrollTo(0, document.querySelector("#root").scrollHeight);
        }, 200);
    }

    handlePaginatorClick(elem) {
        this.props.setCurrentPaginationPage(parseInt(elem.target.innerHTML, 10));
        getArticles({ page: parseInt(elem.target.innerHTML, 10), size: this.props.size });
        this._scrollToBottom();
    }

    render() {
        this.pages = [];
        for (let i = 0; i < this.props.totalPages; i++) {
            this.pages.push(i);
        }

        return (
            <div className="paginator">
                <ul className="paginator-list">
                    {
                        this.pages.map(idx => (
                            <PaginatorItem
                                key={idx}
                                idx={idx}
                                handleClick={this.handlePaginatorClick}
                                currentPage={this.props.currentPage}
                            >
                                {idx}
                            </PaginatorItem>
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