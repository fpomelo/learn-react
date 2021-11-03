import React, { Component } from 'react';
import store from '../../redux/store';
import { increment, decrement, incrementAsync } from '../../redux/count_action';

export default class Count extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(increment(+value));
  }

  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(decrement(+value));
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(increment(+value));
    }
  }

  incrementAsync = () => {
    const { value } = this.selectNumber;
    // setTimeout(() => {
      store.dispatch(incrementAsync(+value, 500));
    // }, 500);
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
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
