import React from 'react';
import '../css/style.css';
import ToDo from './Todo';
import Header from './Header';
import AddTodo from './AddTodo';

export default class extends React.Component {

    state = {
        todos: [
            { name: 'JavaScript', isFinished: false },
            { name: 'HTML, CSS', isFinished: true },
            { name: 'React', isFinished: false },
            { name: 'GitHub', isFinished: false },
            { name: 'Angular', isFinished: false }
        ]
    };

    newTodoList = (inputValue) => {
        const newTodoList = { name: inputValue , isFinished: false };
        this.setState(() => ( {todos: [...this.state.todos, newTodoList]}));
    };

    render() {
        return  <React.Fragment>
            <Header/>
            {this.state.todos.map((todo,id) =>
            <ToDo name={todo.name} isFinished={todo.isFinished} key={id}/>)}
            <AddTodo onInputChange={this.newTodoList}/>
        </React.Fragment>
    }
};


