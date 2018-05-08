import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setCurrentPaginationPage,
} from './../../actions/settingActions';

class Paginator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstPage: true,
            isLastPage: false
        }
    }
    numberArray = [];
    itemsPerOnePage = 10; // todo - remove magical number
    currentPage;

    setCurrentPaginatorPage(e) {
        this.currentPage = e.target.innerHTML;
        setCurrentPaginationPage(parseInt(this.currentPage, 10));
        this.checkIfFirst();
        this.checkIfLast();
        setTimeout(this.scrollToEnd, 100);
    }

    scrollToEnd() {
        console.log('scrolling')
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }

    checkIfLast() {
        if (this.currentPage >= this.numberArray.length - this.itemsPerOnePage / 10) {
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
        if (this.currentPage < this.itemsPerOnePage / 10) {
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

    setPaginator() {
        for (let i = 0; i < this.props.dataLength; i++) {
            this.numberArray[i / this.itemsPerOnePage] = i / this.itemsPerOnePage;
        }
    }


    render() {
        this.setPaginator();

        return (
            <div>
                <section>
                    {!this.state.isFirstPage && <span> previous</span>}
                    {this.numberArray.map((currentItem) =>
                        <span
                            key={currentItem}
                            onClick={this.setCurrentPaginatorPage.bind(this)}
                            className="paginator-number active">
                            {currentItem}
                        </span>
                    )}
                    {!this.state.isLastPage && <span>next</span>}
                    {/* <PaginatorSizeChooser></PaginatorSizeChooser> */}
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        paginationSize: state.settings.paginationSize
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