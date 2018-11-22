import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPaginatorProperties, setCurrentPaginationPage } from '../../actions/paginatorActions';

class Paginator extends Component {
    constructor() {
        super();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this.props.setPaginatorProperties();
    }

    scrollToEnd() {
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }

    handlePageChange(elem) {
        this.props.setCurrentPaginationPage(elem.target.innerHTML);
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
                            </li>)
                        )
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
        currentPage: state.paginator.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPaginatorProperties: (data) => {
            dispatch(setPaginatorProperties(data))
        },
        setCurrentPaginationPage: (data) => {
            dispatch(setCurrentPaginationPage(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);