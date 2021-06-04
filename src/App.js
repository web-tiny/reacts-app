
import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Item from './components/Item'
import './App.css';
import { nanoid } from 'nanoid'

export default class App extends Component {
  state = {
    todos: []
  }
  addTodo = (data) => {
    console.log('header from:', data)
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
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Header addTodo={ this.addTodo }></Header>
        {
          todos.map(item => {
            return (<Item key={ item.id } { ...item }></Item>)
          })
        }
        <Footer></Footer>
      </div>
    )
  }
}
