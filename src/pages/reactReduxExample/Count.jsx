import React, { Component } from 'react'
import './index.css'

export default class Count extends Component {
  increment = () => {
    const { value } = this.selectValue
    this.props.increment(value * 1)
  }
  incrementUn = () => {
    const { value } = this.selectValue
    this.props.decrement(value * 1)
  }
  incrementIfOdd = () => {
    const { value } = this.selectValue
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectValue
    this.props.incrementAsync(value * 1, 1000)
  }
  
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>react-redux写法</h1>
        <h4>当前求和为: { count }</h4>
        <select ref={ c => this.selectValue = c }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={ this.increment }>+</button>
        <button onClick={ this.incrementUn }>-</button>
        <button onClick={ this.incrementIfOdd }>和为基数再相加</button>
        <button onClick={ this.incrementAsync }>异步相加</button>
      </div>
    )
  }
}
