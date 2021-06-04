import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class Header extends Component {
  // 对props进行限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handleOnKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode === 13) {
      const value = target.value
      if (value.trim() === '') {
        alert('输入不能为空')
        return
      }
      this.props.addTodo(value)
      target.value = ""
    }
  }
  render() {
    return (
      <header>
        <input
          placeholder="请输入待办内容"
          onKeyUp={ this.handleOnKeyUp }
          className="input">
        </input>
      </header>
    )
  }
}

