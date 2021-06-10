import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import News from './components/news'
import Message from './components/message'
import MyNavLink from '../MyNavLink'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>home components</h1>
        <div>
          <MyNavLink to="/home/news">News</MyNavLink>
          <MyNavLink to="/home/message">Message</MyNavLink>
        </div>
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          <Redirect to="/home/news"></Redirect>
        </Switch>
        
      </div>
    )
  }
}
