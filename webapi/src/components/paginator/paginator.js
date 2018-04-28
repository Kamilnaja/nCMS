/* @Author: Kamil Naja
*  @Params: int itemsPerOnePage 
*
*
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { localUrl } from './../../utils/AppConfig';
import { connect } from 'react-redux';

class Paginator extends Component {
    numberArray = [];
    itemsPerOnePage = 5; // todo - remove magical number


    render() {

        for (let i = 1; i < this.props.dataLength; i++) {
            if (i % this.itemsPerOnePage === 0) {
                this.numberArray[i] = i;
            }
        }
        return (
            <div>
                <section>
                    {this.numberArray.map((currentItem) =>
                        <Link
                            to={currentItem}
                            key={currentItem}
                            className="paginator-number active">
                            {currentItem}
                        </Link>
                    )}

                </section>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        // todo 
    }
}

export default connect(mapStateToProps, null)(Paginator);