
import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import RouterIndex from './pages/RouterIndex'
import './App.css';
import { nanoid } from 'nanoid'
import ReduxExample from './pages/reduxExample'
import ReactReduxExample from './containers/Count'
import Person from './pages/person'
import SetStateIndex from './pages/setState'
import HooksComponent from './pages/hooks'
import CoutextComponent from './pages/context'
import Optimize from './pages/optimize'

export default class App extends Component {
  state = {
    todos: [
      { id: '1', done: false, name: '吃法' },
      { id: '2', done: false, name: '睡觉' },
    ]
  }
  // 添加todo
  addTodo = (data) => {
    const { todos } = this.state;
    const newTodos = {
      id: nanoid(),
      name: data,
      done: false
    }
    this.setState({
      todos: [ newTodos, ...todos ]
    })
  }
  // 更新todo
  updateTodo = (current) => {
    const { todos } = this.state;
    const updatedTodos = todos.map(item => {
      if (item.id === current.id) {
        item.done = current.done
      }
      return item
    })
    this.setState({ todos: updatedTodos })
  }
  // 删除todo
  deleteTodo = (id) => {
    const { todos } = this.state;
    if (window.confirm('are you sure delete id ?')) {
      const newTodos = todos.filter(item => item.id !== id);
      this.setState({ todos: newTodos  })
    }
  }
  // 全选
  allChecked = (value) => {
    const { todos } = this.state;
    const newTodos = todos.map(item => {
      item.done = value
      return item
    })
    this.setState({ todos: newTodos })
  }
  // 清除所有已完成的任务
  handleClearDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(item => !item.done);
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="second-root">
        <div className="App">
          <Header addTodo={ this.addTodo }></Header>
          <List
            todos = { todos }
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}>
          </List>
          <Footer
            allChecked={this.allChecked}
            todos={todos}
            handleClearDone={this.handleClearDone}>
          </Footer>
        </div>
        <RouterIndex />
        <ReduxExample />
        {/* 给容器组件传递 store */}
        <ReactReduxExample/>
        <Person />
        <SetStateIndex x={2}></SetStateIndex>
        <HooksComponent></HooksComponent>
        <CoutextComponent></CoutextComponent>
        <Optimize></Optimize>
      </div>
    )
  }
}
