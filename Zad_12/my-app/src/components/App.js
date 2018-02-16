import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

    render() {

        return  <React.Fragment>
            <Header/>
            {this.state.todos.map((todo,id) =>
            <ToDo name={todo.name} isFinished={todo.isFinished} key={id}/>)}
            <AddTodo/>
        </React.Fragment>
    }
    };


