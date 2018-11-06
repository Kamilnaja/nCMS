import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPaginationPage } from '../../actions/settingActions';

class Paginator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFirstPage: true,
            isLastPage: false,
            currentPage: 0
        }
        this.numberArray = [];
        this.setCurrentPaginatorPage = this.setCurrentPaginatorPage.bind(this);
    }

    setPaginator() {
        for (let i = 0; i < this.props.dataLength; i++) {
            this.numberArray[i / this.props.paginationSize] = i / this.props.paginationSize;
        };

    }

    setCurrentPaginatorPage(e) {
        let pageNumber = e.target.innerHTML;
        setCurrentPaginationPage(parseInt(e.target.innerHTML, this.props.paginationSize));
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
        if (this.currentPage >= this.numberArray.length - this.props.paginationSize / this.props.paginationSize) {
            this.setState({
                isLastPage: true
            });
        }
        else {
            this.setState({
                isLastPage: false
            });
        }
    }

    checkIfFirst() {
        if (this.currentPage < this.props.paginationSize / this.props.paginationSize) {
            this.setState({
                isFirstPage: true
            });
        }
        else {
            this.setState({
                isFirstPage: false
            });
        }
    }


    render() {
        this.setPaginator();

        return (
            <div className="paginator">
                <ul>
                    {this.numberArray.map(currentItem =>
                        <li
                            key={currentItem}
                            onClick={this.setCurrentPaginatorPage}
                            className={currentItem === this.state.currentPage ? 'active' : ''}>
                            {currentItem}
                        </li>
                    )}
                </ul>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        paginationSize: state.settings.paginationSize,
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