// 引入 contener 的左右手
// 引入 Count 的UI 组件
// import CountUI from '../../pages/reactReduxExample/Count'

// 引入 store, 需要从 props 引入
// import store from '../../redux/store'

// 引入connect 用于连接 UI 组件与 redux
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'
import { INCREAMENT, DECREAMENT } from '../../redux/constant'
import React, { Component } from 'react'
import '../../pages/reactReduxExample/index.css'

// UI 组件
class Count extends Component {
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

// 映射状态
// const mapStateToProps = state => ({ count: state })

// 映射操作操作状态的方法
// const mapDispatchToProps = (dispatch) => {
//   return {
//     [INCREAMENT]: (ownProps) => dispatch(increment(ownProps)),
//     [DECREAMENT]: (ownProps) => dispatch(decrement(ownProps)),
//     incrementAsync: (data, time) => dispatch(incrementAsync(data, time))
//   }
// }

// 暴露一个 conteiner 组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
export default connect(
  state => ({ count: state }),
  // mapDispatchToProps 的简写, react-redux 自动 dispatch
  {
    [INCREAMENT]: increment,
    [DECREAMENT]: decrement,
    incrementAsync
  }
)(Count)
