import React from 'react';

export default class Header extends React.Component {
    render() {
        let style = {
            textAlign: 'center',
            color: 'blue',
        };

        return <React.Fragment>
                <header style={style}>Contacts</header>
               </React.Fragment>
    }
};