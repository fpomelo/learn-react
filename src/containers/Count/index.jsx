import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  decrementAction,
  incrementAction,
  incrementAsyncAction
} from '../../redux/count_action';

class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(+value);
  }

  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(+value);
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(+value);
    }
  }

  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(+value, 500);
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>和为奇数时加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}


const mapStateToProps = state => ({count: state})

// const mapDispatchToProps = dispatch => ({
//   increment: number => dispatch(incrementAction(number)),
//   decrement: number => dispatch(decrementAction(number)),
//   incrementAsync: (number, time) => dispatch(incrementAsyncAction(number, time))
// })
const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
  incrementAsync: incrementAsyncAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);