import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPaginatorProperties } from '../../actions/paginatorActions';

class Paginator extends Component {

    componentDidMount() {
        this.props.setPaginatorProperties();
    }

    scrollToEnd() {
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
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
                        this.pages.map((item, idx) => <li key={idx}>{item}</li>)
                    }
                </ul>
            </div>
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