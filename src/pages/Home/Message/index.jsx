import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {

  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'}
    ]
  }

  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map(message => {
              return (
                <li key={message.id}>
                  {/* 携带 params参数 */}
                  {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}

                  {/* 携带 search参数 */}
                  {/* <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

                  {/* 携带 state参数 */}
                  <Link to={{path: "/home/message/detail", state: {id: message.id, title:message.title}}}>{message.title}</Link>
                </li>
              )
            })
          }
        </ul>

        {/* 声明接收 params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
       
        {/* search参数 和 state参数 无需声明接收 */}
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}
