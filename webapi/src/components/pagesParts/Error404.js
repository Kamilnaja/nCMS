import React, { Component } from 'react';

class Error404 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section>
                <p>
                    404 Not found
                </p>
            </section>
        )
    }
}

export default Error404;