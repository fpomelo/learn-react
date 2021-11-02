import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css';

export default class Footer extends Component {

  static propTypes = {
    doneCount: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired,
    updateTodos: PropTypes.func.isRequired,
    deleteDoneTodos: PropTypes.func.isRequired,
  }

  render() {
    const { doneCount, total, updateTodos, deleteDoneTodos } = this.props;
    return (
      <div className="info">
        <input 
          type="checkbox"
          checked={doneCount===total && total !== 0}
          onChange={event => updateTodos(event.target.checked)}
        />
        已完成{doneCount}/全部{total}
        <button className="delete-btn" onClick={deleteDoneTodos}>删除全部任务</button>
      </div>
    )
  }
}
