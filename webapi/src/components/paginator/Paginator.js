import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPaginatorProperties } from '../../actions/paginatorActions';

class Paginator extends Component {

    componentDidMount() {
        this.props.setPaginatorProperties();
    }

    setCurrentPaginatorPage(e) {
        let pageNumber = e.target.innerHTML;
        this.setState({
            currentPage: parseInt(pageNumber, 10)
        })
        setTimeout(this.scrollToEnd, 50);
    }

    scrollToEnd() {
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }

    render() {
        return (
            <div className="paginator"></div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        size: state.paginator.size,
        totalPages: state.paginator.totalPages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPaginatorProperties: (data) => {
            dispatch(setPaginatorProperties(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);