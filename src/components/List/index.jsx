import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    const { todos, deleteTodo, updateTodo } = this.props
    return (
      <ul>
        {
          todos.map(item => {
            return (
              <Item
                key={ item.id } { ...item } 
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}>
              </Item>
            )
          })
        }
      </ul>
    )
  }
}
