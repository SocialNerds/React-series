import React from 'react';
import {observer} from 'mobx-react';

@observer
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.renderTodos = this.renderTodos.bind(this);
    }

    renderTodos() {
        return this.props.store.filteredTodos.map((todo) =>
            <li key={todo.id}>
                <input type="checkbox" onChange={() => this.props.store.toggleComplete(todo)} checked={todo.done}/>
                {todo.title}
                <a href="#" onClick={(e) => {
                    e.preventDefault;
                    this.props.store.deleteTodo(todo);
                }}>Delete</a>
            </li>
        );
    }

    render() {
        return (
            <ul>
                {this.renderTodos()}
            </ul>
        );
    }
}
