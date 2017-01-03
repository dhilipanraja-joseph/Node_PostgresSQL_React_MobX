import React, { Component } from 'react';
import Counter from './Counter';
import TodoView from './TodoView';
import AddTodos from './AddTodos';
import Todos from '../store/TodoStore';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter />
        <AddTodos store={Todos} />
        <TodoView store={Todos} />
      </div>
    )
  }
}
