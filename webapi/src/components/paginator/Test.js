import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ["lorem", "ipsum", "dolor", "sit", "amet"]
        }
    }
    render() {
        return (
            <div>
                {this.state.data.map(item => <div>{item}</div>)}
            </div>
        );
    }
}

export default Test;