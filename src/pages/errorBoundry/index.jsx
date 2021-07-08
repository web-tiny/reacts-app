import React, { Component } from 'react';

export default class Parent extends Component {
  state = {
    hasError: ''
  }
  // 当parent 的子组件 的生命周期 出现错误的时候, 会触发 getDerivedStateFromError 调用,并携带错误信息, 但是只在生产环境有用
  static getDerivedStateFromError(error) {
    return { hasError: error }
  }
  componentDidCatch () {
    // 当组件发生错误的时候会执行这个生命周期钩子
    console.log('此处统计错误,反馈给服务器');
  }
  render() {
    return (
      <div> 
        我是父亲组件
        {
          this.state.hasError
            ? <h1>网络开小差了,请重试</h1>
            : <Child />
        }
      </div>
    );
  }
}

class Child extends Component {
  state = {
    // user: [
    //   { name: 'tony', id: 9, age: 90 },
    //   { name: 'jeck', id: 10, age: 80 },
    // ]
    user: ''
  }
  render() {
    return (
      <div>
        我是孩子组件
        {
          this.state.user.map(item => {
            return (
              <div key={item.id} >{item.name}==={item.age}</div>
            )
          })
        }
      </div>
    );
  }
}