import React from 'react';

export default class Header extends React.Component {
    render() {
        let style = {
            textAlign: 'center',
            color: 'blue',
        };
        return <React.Fragment>
            <header style={style}>This is the best players of this season</header>
        </React.Fragment>
    }
};