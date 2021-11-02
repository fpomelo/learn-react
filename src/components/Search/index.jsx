import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

  search = () => {
    const { value: keyword } = this.keyWordElem;
    this.props.updateAppState({isFirst: false, isLoading: true});

    axios.get(`http://localhost:3000/search/users?q=${keyword}`).then(
      response => {
        this.props.updateAppState({isLoading: false, users: response.data.items});
      },
      error => {
        this.props.updateAppState({isLoading: false, err: error.message});}
    );
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div>
          <input ref={c => this.keyWordElem = c} type="text" placeholder="输入关键词搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
