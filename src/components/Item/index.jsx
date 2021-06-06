import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class Item extends Component {
  state = {
    visible: false
  }
  // 对props进行限制
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    deleteTodo: PropTypes.func
  }
  mouseEnterLeave = (boolean) => {
    return () => {
      this.setState({ visible: boolean })
    }
  }
  deleteTodo = (id) => {
    this.props.deleteTodo(id)
  }
  onChangeCheckbox = (e) => {
    this.props.updateTodo({ id: this.props.id, done: e.target.checked })
  }
  render() {
    const { visible } = this.state
    const { name, id, done } = this.props
    return (
      <div className="item"
        style={{ background: visible ? '#dcdfe6' : '#fff' }}
        onMouseEnter={ this.mouseEnterLeave(true) }
        onMouseLeave={ this.mouseEnterLeave(false) }>
        <label>
          <input type="checkbox" checked={done} onChange={this.onChangeCheckbox}/>
          { name } 
        </label>
        <button
          className="button"
          onClick ={ ()=> this.deleteTodo(id) }
          style={{
            display: visible ? 'block' : 'none' 
          }}>删 除
        </button>
      </div>
    )
  }
}
