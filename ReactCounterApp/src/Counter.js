import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onDecrementClick = this.onDecrementClick.bind(this);
  }

  onIncrementClick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  onDecrementClick() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  render() {
    return (
      <div>
        <h2>Counter Application</h2>
        <h3>Count: {this.state.count} </h3>
        <button onClick={this.onIncrementClick}>
        ++ Increment
        </button>
        {' '}
        <button onClick={this.onDecrementClick}>
        -- Decrement
        </button>
      </div>
    )
  }
}

export default Counter;
