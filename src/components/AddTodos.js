import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(e) {
    e.preventDefault();
    this.props.store.addTodo(this.state.text);
    this.setState({ text: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={e => this.setState({ text: e.target.value })} />
        </form>
      </div>
    )
  }
}

export default AddTodo;
