import {observable, computed} from 'mobx';
import axios from 'axios';
import Todo from './TodoModel';

const BACKEND = 'http://localhost:3000';
const HEADERS = {
    'Content-Type': 'application/json',
};

class Store {
    @observable todos = [];
    @observable filter = "";

    @computed get filteredTodos() {
        const match = new RegExp(this.filter, 'i');
        return this.todos.filter(todo => !this.filter || match.test(todo.title))
    }

    loadTodos() {
        axios.get(BACKEND).then((response) => {
            const todos = response.data.map(todo => new Todo(todo.id, todo.title, todo.done))
            this.todos.replace(todos);
        });
    }

    createTodo(title) {
        axios.post(BACKEND, {title}, HEADERS).then((response) => {
            const todo = response.data;
            this.todos.push(new Todo(todo.id, todo.title, todo.done));
        });
    }

    toggleComplete(todo) {
        axios.patch(`${BACKEND}/${todo.id}`, {}, HEADERS)
            .then((response) => {
                todo.done = response.data.done;
            });
    }

    deleteTodo(item) {
        axios.delete(`${BACKEND}/${item.id}`, HEADERS)
            .then((response) => {
                if (response.data) {
                    const todos = this.todos.filter(todo => todo.id !== item.id);
                    this.todos.replace(todos);
                }
            });
    }

    clearCompleted() {
        axios.get(`${BACKEND}/clear`).then((response) => {
            const todos = response.data.map(todo => new Todo(todo.id, todo.title, todo.done))
            this.todos.replace(todos);
        });
    }
}

const store = new Store();
export default store;
