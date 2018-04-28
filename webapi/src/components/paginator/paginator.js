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
    constructor(props) {
        super(props);
        this.state = {
            currentPagination: 1
        }
    }
    getNewDataSet() {
        axios.get(`${localUrl}/api/posts/1`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('error');
            })
    }
    setCurrentPagination(e) {
        e.preventDefault();
        this.setState({
            currentPagination: e.target.text,
        });
        this.getNewDataSet();
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

const mapStateToProps = (state) => {
    return {
        // todo 
    }
}

export default connect(mapStateToProps, null)(Paginator);