import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './detail'
export default class Message extends Component {
  state = {
    messageArray: [
      { id: 1, title: 'message1' },
      { id: 2, title: 'message2' },
      { id: 3, title: 'message3' },
      { id: 4, title: 'message4' },
    ]
  }
  render() {
    const { messageArray } = this.state
    return (
      <div>
        <ul>
          {
            messageArray.map(item => {
              return (
                // 向路由组件传递params路由参数
                <li key={item.id}>
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{ item.title }</Link>
                </li>
              )
            })
          }
        </ul>
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
      </div>
    )
  }
}
