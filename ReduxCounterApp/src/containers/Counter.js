import React, { Component } from 'react'
import { connect } from "react-redux";
import { onIncrement, onDecrement } from "../actions/index";
import { bindActionCreators } from "redux";

class Counter extends Component {
  render() {
    console.log('state: ', this.props);
    return (
      <div>
        <h2>Counter Application</h2>
        <h3>Count: {this.props.count} </h3>
        <button onClick={this.props.onIncrement}>
        ++ Increment
        </button>
        {' '}
        <button onClick={this.props.onDecrement}>
        -- Decrement
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onIncrement: onIncrement, onDecrement: onDecrement }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
