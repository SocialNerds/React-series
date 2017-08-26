import { observable, action, computed } from 'mobx';
import Todo from './TodoModel';

class Store {
    @observable todos = [];
    @observable filter = "";

    @computed get filteredTodos() {
        const match = new RegExp(this.filter, 'i');
        return this.todos.filter(todo => !this.filter || match.test(todo.title))
    }

    @action createTodo(title, done) {
       this.todos.push(new Todo(Date.now(), title, done));
    }
}


const store = new Store();
export default store;
