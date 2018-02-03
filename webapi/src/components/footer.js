import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
class Footer extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/api/settings')
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Nie można załadować stopki</p>
        }
        if (this.props.isLoading) {
            return <p>Ładowanie stopki</p>
        }
        return (
            <footer>
                <div>
                    {
                        this.props.items.map((item, id) => (
                            <p key={id}>
                                {item.footer}
                            </p>
                        ))
                    }
                </div>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);