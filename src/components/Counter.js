import React, { Component } from 'react';
import { observer } from 'mobx-react';
import CounterState from '../store/CounterState'


@observer class Counter extends Component {
  plus() {
    CounterState.increment();
  }
  minus() {
    CounterState.decrement();
  }
  render() {
    return (
      <div className="text-center">
        <h1>COUNTER</h1>
        Counter: {CounterState.count} <br/>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

export default Counter;
