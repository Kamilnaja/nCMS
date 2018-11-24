import React, { Component } from 'react';
import Articles from './pagesParts/Articles';
import Paginator from './paginator/Paginator';

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