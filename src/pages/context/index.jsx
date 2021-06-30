import React, { Component, createContext } from 'react';
import "./index.css"

const MyContext = createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
  state = {
    name: 'tommasi',
    age: 90
  }
  render() {
    const { name, age } = this.state
    return (
      <div className="A">
        I am A components
        <Provider value={{name, age}}>
          <B></B>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        I am B components
        <C></C>
      </div>
    )
  }
}

class C extends Component {
  static contextType = MyContext
  render() {
    // 类式组件
    const { name, age } = this.context
    return (
      <div className="C">
        I am C components
        name: {name}, age: {age}
        <D></D>
      </div>
    )
  }
}

function D () {
  return (
    <div className="D">
      I am D components
      {/* 函数式组件 */}
      <Consumer>
        {
          value => {
            const { name, age } = value
            return `myname: ${name}, age: ${age}`
          }
        }
      </Consumer>
    </div>
  )
}