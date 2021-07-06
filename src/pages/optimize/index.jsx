import React, { Component, PureComponent } from 'react';

export default class Parent extends PureComponent {
  state = {
    car: 'aodi'
  }
  changeCar = () => {
    this.setState({})
  }
  // shouldComponentUpdate 控制
  // shouldComponentUpdate (nextProps, nextState ) {
  //   // console.log(this.state, nextState)
  //   // console.log(this.props, nextProps)
  //   return !(this.state.car === nextState.car)
  // }
  render() {
    console.log('parent--render')
    const {car} = this.state
    return (
      <div className="parent">
        我是 parent component <br />
        我的car: { car }
        <button onClick={ this.changeCar }>改车</button>
        <Child ></Child>
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    console.log('child-render')
    const {car} = this.props
    return (
      <div className="child">
        我是Child component <br />
        我得到的car: { car }
      </div>
    );
  }
}