import React, { Component } from 'react';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to React Template!</h1>
        <Counter/>
      </div>
    )
  }
}
