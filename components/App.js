import React from 'react';
import { observer } from 'mobx-react';
import TodoList from "./TodoList";
import store from '../store';

@observer
export default class App extends React.Component {

    render() {
        return (
            <div>
                <TodoList store={store} />
            </div>
        );
    }
}