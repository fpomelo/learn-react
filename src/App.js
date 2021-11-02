import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';


export default class App extends Component {
  
  state = {todos: [{id: nanoid(), msg: "打代码", done: false}, {id: nanoid(), msg: "睡觉", done: false}]}

  // 添加新任务
  addNewTodo = (todo) => {
    const { todos } = this.state;
    this.setState({todos: [todo, ...todos]});
  }

  // 任务完成单选
  updateTodo = (done, id) => {
    let { todos } = this.state;
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, done};
      }
      return todo;
    });
    this.setState({todos: newTodos});
  }

  // 任务完成全选
  updateTodos = (done) => {
    let { todos } = this.state;
    const newTodos = todos.map(todo => {
      return {...todo, done};
    });
    this.setState({todos: newTodos});
  }

  // 删除任务
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({todos: newTodos});
  }

  // 删除已完成任务
  deleteDoneTodos = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => !todo.done);
    this.setState({todos: newTodos});
  }

  render() {
    const { todos } = this.state;
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    return (
      <div className="container">
        <Header addNewTodo={this.addNewTodo} />
        <List todos={todos} 
          updateTodo={this.updateTodo} 
          deleteTodo={this.deleteTodo}
        />
        <Footer 
          doneCount={doneCount} 
          total={todos.length} 
          updateTodos={this.updateTodos} 
          deleteDoneTodos={this.deleteDoneTodos}
        />
      </div>
    );
  }
}
