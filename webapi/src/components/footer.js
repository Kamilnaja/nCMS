import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Footer extends Component {

    render() {
        if (this.props.hasErrored) {
            return <p>Nie można załadować stopki</p>
        }
        if (this.props.isLoading) {
            return <p>Ładowanie stopki</p>
        }
        return (
            <footer className="footer">
                <div>
                    {/* {
                        this.props.items.map((item, id) => (
                            <p key={id}>
                                {item.footer}
                            </p>
                        ))
                    } */}
                </div>
            </footer>
        )
    }
}
