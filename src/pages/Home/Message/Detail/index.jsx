import React, { Component } from 'react';
import qs from 'querystring';

const data = [
  {id: '01', content: "Hello World"},  
  {id: '02', content: "你好世界"},
  {id: '03', content: "世界和平"}
];

export default class Detail extends Component {
  render() {
    // 接收 params 参数
    // const { id, title } = this.props.match.params;

    // 接收 search 参数
    // const { search } = this.props.location; // ?id=01&title=消息1
    // const { id, title } = qs.parse(search.slice(1));

    // 接收 state 参数
    const { id, title } = this.props.location.state || {};

    const findObj = data.find(mes => {
      return mes.id === id;
    }) || {};
    return (
      <div>
        <ul>
          <li>ID: {id}</li>
          <li>Title: {title}</li>
          <li>Content: {findObj.content}</li>
        </ul>
      </div>
    );
  }
}
