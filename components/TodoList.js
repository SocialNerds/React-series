import React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.renderTodos = this.renderTodos.bind(this);
    }

    renderTodos() {
        return this.props.store.todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
    }
    render() {
        return(
            <ul>
                {this.renderTodos()}
            </ul>
        );
    }
}
