import React from 'react';

function LiveUsersConter(props) {
    console.log("live user counter")
    return (
        <div>
            <p>Live User Counter{props.counter}</p>
        </div>
    );
}

export default LiveUsersConter;