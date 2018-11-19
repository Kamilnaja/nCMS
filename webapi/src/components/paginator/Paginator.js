import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPaginationPage } from '../../actions/paginatorActions';

class Paginator extends Component {

    constructor(props) {
        super(props);
        this.setCurrentPaginatorPage = this.setCurrentPaginatorPage.bind(this);
    }

    setPaginator() {
        // total pages
    }

    setCurrentPaginatorPage(e) {
        let pageNumber = e.target.innerHTML;
        setCurrentPaginationPage(parseInt(e.target.innerHTML, this.props.size));
        this.setState({
            currentPage: parseInt(pageNumber, 10)
        })
        this.checkIfFirst();
        this.checkIfLast();
        setTimeout(this.scrollToEnd, 50);
    }

    scrollToEnd() {
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }

    checkIfLast() {

    }

    checkIfFirst() {

    }


    render() {
        this.setPaginator();

        return (
            <div className="paginator">
                {
                    this.props.totalPages
                }
                {/* <ul>
                    {this.numberArray.map(currentItem =>
                        <li
                            key={currentItem}
                            onClick={this.setCurrentPaginatorPage}
                            className={currentItem === this.state.currentPage ? 'active' : ''}>
                            {currentItem}
                        </li>
                    )}
                </ul> */}
            </div >
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
        setPagination: (data) => {
            dispatch(setCurrentPaginationPage(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);