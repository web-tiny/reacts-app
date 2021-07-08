import React, { Component } from 'react';
import './index.css';

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h2>render props, children props</h2>
        <p>I am parent</p>
        <A render={ name => <B name={name}/>}></A>
      </div>
    )
  }
}

class A extends Component {
  state = {
    name: 'data of A'
  }
  render() {
    const { name } = this.state
    return (
      <div className="A">
        A component
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        B component
        <p>{ this.props.name }</p>
      </div>
    )
  }
}
