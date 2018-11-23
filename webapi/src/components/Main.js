import React, { Component } from 'react';
import Articles from './pagesParts/Articles';
import Paginator from './paginator/Paginator';
// todo - maybe move paginator and main to separate syblings 
class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Articles></Articles>
                <Paginator></Paginator>
            </React.Fragment>
        )
    }
};


export default Main;