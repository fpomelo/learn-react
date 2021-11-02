import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css';

export default class Item extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired, 
    msg: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const { id, msg, done, updateTodo, deleteTodo } = this.props;
    return (
      <div className="todo">
        <label>
          <input 
            type="checkbox" 
            checked={done}
            onChange={event => updateTodo(event.target.checked, id)}
          />
          {msg}
        </label>
        <button className="delete-btn" onClick={() => deleteTodo(id)}>删除</button>
      </div>
    )
  }
}
