import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.renderTodos = this.renderTodos.bind(this);
    }

    renderTodos() {
        return this.props.store.filteredTodos.map((todo) => <li key={todo.id}>{todo.title}</li>)
    }

    render() {
        return(
            <ul>
                {this.renderTodos()}
            </ul>
        );
    }
}
