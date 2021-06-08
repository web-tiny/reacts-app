import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Home from './Home/index'
import About from './About/index'
import MyNavLink from './MyNavLink'
import './styles/index.css'

export default class RouterIndex extends Component {
  render() {
    return (
      <div className="router-index">
        <div>
          <MyNavLink to="/about" >about</MyNavLink>
          <MyNavLink to="/home" >home</MyNavLink>
        </div>
        <div>
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
        </div>
      </div>
    )
  }
}
