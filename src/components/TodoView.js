import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer class TodoView extends Component {
  render() {
    let { todos } = this.props.store;
    let listview = todos.map((todo) => {
      return (
        <div>
          <p><input type="checkbox"/> {todo.text}</p>
        </div>
      )
    });
    return (
      <div>
        <h3>TODO LIST</h3>
        {listview}
      </div>
    );
  }
}

export default TodoView;
