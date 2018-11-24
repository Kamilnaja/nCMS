import React from 'react';

function PaginatorItem(props) { // make dumb element

    return (
        <li
            onClick={(elem) => { props.handleClick(elem) }}
            className={props.idx === props.currentPage ? 'active' : ''}>
            {props.children}
        </li>
    );
}

export default PaginatorItem;