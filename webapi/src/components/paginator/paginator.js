/* @Author: Kamil Naja
*  @Params: int, itemsPerOnePage 
*
*
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Paginator extends Component {
    numberArray = [];
    itemsPerOnePage = 5;
    constructor(props) {
        super(props);
        this.state = {
            currentPagination: 1
        }
    }
    setCurrentPagination(e) {
        this.setState({
            currentPagination: e.target.text,
        })
    }
    render() {

        for (let i = 1; i < this.props.dataLength; i++) {
            if (i % this.itemsPerOnePage === 0) {
                this.numberArray[i] = i;
            }
        }
        return (
            <div>
                <section>
                    current = {this.state.currentPagination}
                    {this.numberArray.map((currentItem) =>
                        <Link
                            to={currentItem}
                            key={currentItem}
                            onClick={this.setCurrentPagination.bind(this)}
                            className="paginator-number active">
                            {currentItem}
                        </Link>
                    )}

                </section>
            </div>)
    }
}

export default Paginator;