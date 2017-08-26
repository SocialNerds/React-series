import React from 'react';
import { observer } from 'mobx-react';
import TodoList from "./TodoList";
import store from '../store';

@observer
export default class App extends React.Component {
    constructor() {
        super();
        this.createTodo = this.createTodo.bind(this);
        this.filterTodos = this.filterTodos.bind(this);
    }

    createTodo(e) {
        if (e.which === 13) {
            store.createTodo(e.target.value, false);
            e.target.value = ""
        }
    }

    filterTodos(e) {
        store.filter = e.target.value;
    }

    render() {
        return (
            <div>
                <input onKeyPress={this.createTodo} placeholder="New todo"/>
                <input onChange={this.filterTodos} placeholder="Filter" />
                <TodoList store={store}/>
            </div>
        );
    }
}