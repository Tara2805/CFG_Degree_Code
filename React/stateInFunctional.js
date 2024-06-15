//Managing State in Class Components
//Before hooks, class components used the state property and the setState method to manage state.

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = { count: 0 };
  }

  // Method to update state
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.incrementCount}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
