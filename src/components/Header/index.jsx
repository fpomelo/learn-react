import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {

  static propTypes = {
    addNewTodo: PropTypes.func.isRequired
  }

  // 判断输入回车
  handlerKeyup = (event) => {
    const { target } = event;
    if (event.key !== "Enter") return;
    if (target.value.trim() === '') return;

    const newTodo = {id: nanoid(), msg: target.value, done: false};
    this.props.addNewTodo(newTodo);
    target.value = '';
  }

  render() {
    return (
      <input 
        className="input-todo" 
        type="text" 
        placeholder="请输入你的任务名称，按回车确认" 
        onKeyUp={this.handlerKeyup}
      />
    )
  }
}
