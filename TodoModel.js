import { observable } from 'mobx';

export default class Todo {
    id;
    @observable title;
    @observable done;

    constructor(id, title, done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }
}
