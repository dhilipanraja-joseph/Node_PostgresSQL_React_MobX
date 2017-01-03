import { observable } from 'mobx';

class TodoStore {
  @observable todos = [];

  addTodo(todo) {
    // console.log("from store",todo);
    this.todos.push({
      "text": todo
    });
  }
}

let Todos = new TodoStore

export default Todos;
