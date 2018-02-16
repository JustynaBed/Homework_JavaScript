import React from 'react';

export default class AddTodo extends React.Component {

    state = {
        currentInputValue: ''
    };

    render() {
        let style = {
            textAlign: 'center',
            color: 'blue',
        };
        return <React.Fragment>
        <header style={style}>Add To-Do</header>
        <input type="text" onChange={e => this.setState({ value: e.target.value })} value={this.state.value}/>
            <button  disabled={!this.state.value}><i class="material-icons">&#xE146;</i></button>

            </React.Fragment>
    }
};


