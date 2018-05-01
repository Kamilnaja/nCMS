import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setPaginationSize
} from './../../actions/settingActions';

class PaginatorSizeChooser extends Component {

    handleChange(e) {
        setPaginationSize(parseInt(e.target.value, 10));
    }

    render() {
        const paginationSizes = [5, 10, 50];

        return (
            <div className="paginator-size-chooser">
                <select onChange={this.handleChange.bind(this)}>
                    {
                        paginationSizes.map((item, key) =>
                            <option value={item} key={key}>
                                {item}
                            </option>)
                    }
                </select>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPaginationSize: (data) => {
            dispatch(setPaginationSize(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(PaginatorSizeChooser)