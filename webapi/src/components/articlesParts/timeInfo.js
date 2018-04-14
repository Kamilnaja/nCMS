import React from 'react';

function returnFormattedData(item) {
    var formattedData = item.replace(/T/, ' o godzinie ');
    formattedData = formattedData.replace(/Z/, '');
    formattedData = formattedData.substr(0, formattedData.length - 3);
    return (
        formattedData
    )
}


function checkItemWasEdited(props) {
    if (props.time.createdAt !== props.time.updatedAt) {
        return true // item was edited
    }
}

const TimeInfo = (props) => {
    return (
        <div>

            <time>Created at: {returnFormattedData(props.time.createdAt)}</time>
            <br />
            {checkItemWasEdited(props) &&
                <time>
                    Edited at: {returnFormattedData(props.time.updatedAt)}</time>
            }
        </div>

    )
}

export default TimeInfo;