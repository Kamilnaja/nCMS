import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setCurrentPaginationPage,
} from './../../actions/settingActions';
import PaginatorSizeChooser from './paginatorSizeChooser';
class Paginator extends Component {

    setCurrentPaginatorPage(e) {
        setCurrentPaginationPage(parseInt(e.target.innerHTML, 10));
    }

    numberArray = [];
    itemsPerOnePage = 5; // todo - remove magical number

    render() {

        for (let i = 0; i < this.props.dataLength; i++) {
            if (i % this.itemsPerOnePage === 0) {
                this.numberArray[i] = i;
            }
        }

        return (
            <div>
                <section>
                    {this.numberArray.map((currentItem) =>
                        <span
                            key={currentItem}
                            onClick={this.setCurrentPaginatorPage.bind(this)}
                            className="paginator-number active">
                            {currentItem}
                        </span>
                    )}
                    <PaginatorSizeChooser></PaginatorSizeChooser>
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