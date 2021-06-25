import React, { Component } from 'react';

export default class SetStateIndex extends Component {
  state = {
    count: 0
  }
  add = () => {
    const { count } = this.state
    // 1. 对象式的 state
    this.setState({ count: count + 1 }, () => {
      // 是 render 之后执行
      console.log('cb value:', this.state.count)
    })
    // 这里的 值永远比 state 中的 count 少1, 因为 react 调用
    // setState 的后续操作是异步的
    console.log(this.state.count)
  }
  addFn = () => {
    this.setState((state, props) => {
      console.log('props', props)
      return { count: state.count + 1 }
    })
  }
  render() {
    return (
      <div>
        <h2>当前和是: { this.state.count }</h2>
        <button onClick={ this.add }>add 1</button>
        <button onClick={ this.addFn }>函数式add 1</button>
      </div>
    )
  }
}
