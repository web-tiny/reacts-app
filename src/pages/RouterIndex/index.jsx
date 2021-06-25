import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Home from './Home/index'
// import About from './About/index'
import MyNavLink from './MyNavLink'
import './styles/index.css'
const Home = lazy(() => import('./Home/index'))
const About = lazy(() => import('./About/index'))

export default class RouterIndex extends Component {
  render() {
    return (
      <div className="router-index">
        <div>
          <MyNavLink to="/about" >about</MyNavLink>
          <MyNavLink to="/home" >home</MyNavLink>
        </div>
        <div>
          {/* 注册路由 */}
          {/* 
            react: 默认路由是 模糊匹配(开头相同,且是包含关系)
            开启严格模式: 添加属性 exact = { true }, 谨慎开启, 因为会拦截掉二级路由
           */}
           <Suspense fallback={(<div>Loading...</div>)}>
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/home" component={Home}></Route>
              {/* 默认路由,当前面的路由匹配失败的时候 */}
              <Redirect to="/about"/>
            </Switch>
           </Suspense>
        </div>
      </div>
    )
  }
}
