import React from 'react';

export default (props) => {
    let style = {
        textAlign: 'center',
        color: 'red',
    };
    return <footer style={style}>Copyright by {props.author}.</footer>
};