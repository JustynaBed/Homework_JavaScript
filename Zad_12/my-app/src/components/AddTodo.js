import React from 'react';

export default class AddTodo extends React.Component {

    state = {
        currentInputValue: '',
        todos: []
    };

    onInputChange = (inputText) => {
        this.setState({
            currentInputValue: inputText.target.value
        });
        console.log(this.state.currentInputValue);
    };

    onBtnClicked = () => {
        this.props.onInputChange(this.state.currentInputValue);
    };

    render() {
        let style = {
            textAlign: 'center',
            color: 'blue',
        };

        return <React.Fragment>
            <header style={style}>Add To-Do</header>
            <input value={this.state.currentInputValue} onChange={this.onInputChange} type="text"/>
            <button onClick={this.onBtnClicked}
                    disabled={!this.state.currentInputValue}>
                        <i class="material-icons">&#xE146;</i>
            </button>
            </React.Fragment>
    }
};


