import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class Item extends Component {
  state = {
    visible: false
  }
  // 对props进行限制
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  handleMouseEnter = () => {
    this.setState({ visible: true })
  }
  handleMouseLeave = () => {
    this.setState({ visible: false })
  }
  render() {
    const { visible } = this.state
    const { name } = this.props
    return (
      <div className="item"
        style={{ background: visible ? '#dcdfe6' : '#fff' }}
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>
        <label>
          <input name="Fruit" type="checkbox" value="" />
          { name } 
        </label>
        <button
          className="button"
          style={{
            display: visible ? 'block' : 'none' 
          }}>清除
        </button>
      </div>
    )
  }
}
