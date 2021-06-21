import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store'
import { increment, decrement, incrementAsync } from '../../redux/actions/count.js'

export default class Count extends Component {
  // state = {
  //   count: 1
  // }
  //检测 redux中 状态的变化,只要变化就调用render
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  increment = () => {
    // const { count } = this.state
    const { value } = this.selectValue
    // this.setState({ count: count + value * 1  })
    store.dispatch(increment(value * 1))
  }
  incrementUn = () => {
    // const { count } = this.state
    const { value } = this.selectValue
    // this.setState({ count: count - value * 1  })
    store.dispatch(decrement(value * 1))
  }
  incrementIfOdd = () => {
    // const { count } = this.state
    const { value } = this.selectValue
    if ((store.getState()) % 2 !== 0) {
      // this.setState({ count: count + value * 1  })
      store.dispatch(increment(value * 1))
    }
  }
  incrementAsync = () => {
    // setTimeout(() => {
      const { value } = this.selectValue
      // this.setState({ count: count + value * 1  })
      // store.dispatch(increment(value * 1))
      store.dispatch(incrementAsync(value * 1, 1000))
      //}, 1000)
  }
  
  render() {
    return (
      <div>
        <h1>redux 写法</h1>
        <h4>当前求和为: { store.getState() }</h4>
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
