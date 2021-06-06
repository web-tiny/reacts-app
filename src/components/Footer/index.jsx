import React, { Component } from 'react'
import TypeProps from 'prop-types'

export default class Footer extends Component {
  static typeProps = {
    todos: TypeProps.array.isRequired,
    allChecked: TypeProps.func
  }
  allChecked = (e) => {
    this.props.allChecked(e.target.checked)
  }
  handleClearDone = () => {
    this.props.handleClearDone()
  }
  render() {
    const { todos } = this.props
    const allDoned = todos.filter(item => item.done !== false)
    const total = todos.length;
    const allDone = allDoned.length;
    return (
      <footer className="footer">
        <label>
          {/* defaultChecked: 第一次默认值 */}
          <input type="checkbox"
            checked={total !== 0 && allDone === total ? true: false}
            onChange={this.allChecked}/>
            全选 
        </label>
        <span className="footer-total">
          已完成 {allDone} / 全部 {total} 
        </span>
        <button className="button" onClick={this.handleClearDone}>清除已完成待任务</button>
      </footer>
    )
  }
}
