import { observable } from 'mobx';

const CounterState = observable ({
  count: 0
})

CounterState.increment = function() {
  this.count++;
}

CounterState.decrement = function() {
  this.count--;
}

export default CounterState;
