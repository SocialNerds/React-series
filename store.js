import { observable } from 'mobx';

class Store {
    @observable todos = [];
}


const store = new Store();
export default store;
