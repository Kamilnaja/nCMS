import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setCurrentPaginationPage,
    // setPaginationSize
} from './../../actions/settingActions';

class Paginator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPaginatorPage: 1,
            itemsPerOnePage: 5
        }
    }

    setCurrentPaginatorPage(e) {
        setCurrentPaginationPage(parseInt(e.target.innerHTML, 10));
        // setPaginationSize(this.itemsPerOnePage);
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
                </section>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setPagination: (data) => {
            dispatch(setCurrentPaginationPage(data))
        },
        // setPaginationSize: (data) => {
        //     dispatch(setPaginationSize(data))
        // }
    }
}

export default connect(null, mapDispatchToProps)(Paginator);