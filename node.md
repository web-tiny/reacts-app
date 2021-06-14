
1. Jsx语法规则
   1. 标签混入**js表达式**要用 {}
   2. 样式的类名不能用class, 要用className
   3. 内联样式的格式: style={{ key:value }}
   4. 虚拟dom只有一个根标签
   5. 标签必须闭合
   6. 标签首字母:
      * 若小写字母开头, 则将该标签转为html, 若html中无该标签对应的同名元素,则报错
      * 若大写字母开头,react就去渲染对应的组件, 若组件没有定义则报错
   
2. 组件:  

   1. 组件实例的**状态( state 值)不可直接更改, 必须调用setState来更改**

      ```jsx
      // 更新是合并,不是替换
      // this.setSate({xxx: value})
      class MyComponent extends React.component {
        // 借助构造器 1. 初始化状态 state
        // 2. 绑定方法的指向, 可能会有很多很多
        // 简化的写法这么写呢 ?
        //constructor(props) {
        //  super(props)
        //  this.state = {
        //    weather: false
        //  }
        //  this.changeWether = this.changeWether.bind(this)
        //}
        // state的简化写法
        state = {
          weather: false
        }
        render() {
          const { weather } = this.state
          return (
            <div onClick={this.changeWether}>{ `今天天气${weather ? '不错' : '下雨'}` }</div>
          )
        }
        //changeWether() {
        //  const weather = this.state.weather
        //  this.setState({ weather: !weather })
        //}
        // 方法的简化写法: 赋值语句 + 箭头函数
        changeWether =()=> {
          const weather = this.state.weather
          this.setState({ weather: !weather })
        }
      }
      
      // 在类中直接写赋值语句, 相当于给类加一个实例属性
      ```
      
   2. 组件实例的 props
   
      ```jsx
      // prop-styles.js库
      class MyComponents extends React.Component {
        // 组件的构造器是否接收props,是否传递给super, 取决于:是否希望在构造器中通过this访问props
        
        // props的简写方法, 只要MyComponents.propTypes 能取到值就行
        
        // propTypes, defaultProps, react框架内部属性
        // PropTypes 是react v15.5以后重新封装成了一个库
        static propTypes = {
          name: PropTypes.string.isRequired, // 必传,且为字符串
        	sex: PropTypes.string,
        	age: PropTypes.number,
        	// 限制为函数类型
        	speak: PropTypes.func
        }
      	static defaultProps = {
       	 	sex: "nan", // 默认值
        	age: 18
      	}
      	render(){
          return (
            <div>xxx</div>
          )
        }
      } 
      // 批量传递标签属性
      const p = {
        name: "xxx",
        age: "xxx"
      }
      <MyComponents {...p}/>
      
      // 对标签属性类型,必要性做限制
      MyComponents.propTypes = {
        name: PropTypes.string.isRequired, // 必传,且为字符串
        sex: PropTypes.string,
        age: PropTypes.number,
        // 限制为函数类型
        speak: PropTypes.func
      }
      // 标签属性指定默认值
      MyComponents.defaultProps = {
        sex: "nan", // 默认值
        age: 18
      }
      
      // 函数式组件使用props只能通过参数传入
      ```
   
       
   
   3. 组件实例的 refs
   
      ```jsx
      class MyComponents extends React.Component {
        showData = () => {
          // 1. 字符串形式的 ref, 存在一些效率问题,过时的api
          const {input1} = this.refs
          alert(input1.value)
          
          alert(this.myRef.current.value)
        }
        showDCB = () => {
          // 2. 回调函数形式的 ref,
          const { input1 } = this
          alert(input1.value)
        }
        saveInput = (c) => {
          this.input1 = c;
          console.log('@:', c)
        }
        
        // 3. 通过最新的api: React.createRef调用后可以返回一个容器, 该容器可以存储被ref所标识的节点,但该容器是“专人专用的”,也就是每绑定一个函数的ref都要调用一次
        myRef = React.createRef()
        render() {
          return (
            <div>
              <input ref="input1" type="text" placeholder="click data"/>
              <input ref={this.myRef} type="text" placeholder="click data"/>
              <button onClick = { this.showData }></button>
              {// 内联回调函数的写法有一个问题: 每当组件更新的时候,回调函数会被调用2次,第一次的结果是null, 这是因为组件更新的时候,重新创建了一个回调函数, 为了确保新创建的回调函数正确的执行,把前一个回调函数的结果置为null, 将回调函数定义为class绑定的函数即可解决上述问题, 但是官网明确的说这个问题也是无关紧要的}
              {// <input ref={c => this.input1= c} type="text" placeholder="click button"/>}
              <input ref={this.saveInput} type="text" placeholder="click button"/>
              <button onClick = { this.showDCB }></button>
            </div>
          )
        }
      }
      ReactDOM.render(<MyComponents /></MyComponent>, document.getElementById('test'))
      ```
   
   4. react事件处理: 
   
      1. 对所有的原生事件做重写, onclick => onClick, 为了更好的兼容
      2. react对所有事件做了事件委托
   
   5. 受控组件,非受控组件
   
      ```jsx
      // 受控组件: 当表单发生变化的时候,将值存储在state中, 提交表单的时候再去取, 类似vue的双向绑定,推荐做法
      class Login extends React.Component {
        state = {
          username: "",
          password: ""
        }
        saveUsername = (e) => {
          this.setState({ username: e.target.value })
        }
        savePassword = (e) => {
          this.setState({ password: e.target.value })
        }
        handleSubmit = e => {
          e.preventDefault()
          const { username, password } = this.state
        }
        render() {
          <form onSubmit={this.handleSubmit}>
            用户名:<input type="text" onChange={saveUsername}/>
            密码:<input type="text" onChange={savePassword}/>
            <button>登陆</button>
          </form>
        }
      }
      // 非受控组件: 现用现取
      
      ```
   
3. 高阶函数和函数科里化

   ```jsx
   class Login extends React.Component {
     state = {
       username: "",
       password: ""
     }
     // 通过高阶函数的形式简化 表单受控组件
     //saveFormdata = (dataType) => {
     //  return (e) => {
     //    this.setState({ [dataType]: e.target.value })
     //  }
     //}
   	// 不用高阶函数的写法
     saveFormdata = (dataType, event) => {
        this.setState({ [dataType]: event.target.value })
     }
     handleSubmit = e => {
       e.preventDefault()
       const { username, password } = this.state
     } 
     // render 调用的时机, 1.初始化渲染  2.状态更新之后
     render() {
       <form onSubmit={this.handleSubmit}>
         {// 用户名:<input type="text" onChange={saveFormdata('username')}/>}
         {// 密码:<input type="text" onChange={saveFormdata('password')}/>}
         用户名:<input type="text" onChange={event => saveFormdata('username', event)}/>
         密码:<input type="text" onChange={event => saveFormdata('password', event)}/>
         <button>登陆</button>
       </form>
     }
   }
         
   ```
   
4. React 生命周期

   ```jsx
   // react v16.8
   class Login extends React.Component {
     state = {
       username: "",
       password: ""
     }
   	// 不用高阶函数的写法
     saveFormdata = (dataType, event) => {
        this.setState({ [dataType]: event.target.value })
     }
     handleSubmit = e => {
       e.preventDefault()
       const { username, password } = this.state
     } 
     UNSAFE_componentWillReceiveProps(props){
       // 这个钩子有一个问题,得props有变化的时候才会调用,初始化的时候不会调用
       console.log('componentWillReceiveProps')
     }
     componentWillMount() {
       console.log('componentWillMount')
     }
     // react v.17.0.1
   	UNSAFE_componentWillMount() {
       console.log('componentWillMount')
     }
     // 组件挂载完毕 的生命周期
     componentDidMount() {
       console.log('componentDidMount')
     }
   	shouldComponentUpdate() {
       console.log('shouldComponentUpdate')
       return true
     }
   	UNSAFE_componentWillUpdate() {
        console.log('UNSAFE_componentWillUpdate')
     }
   	componentDidUpdate() {
       console.log('componentDidUpdate')
     }
     // 组件将要卸载
   	componentWillUnmount() {
       console.log('componentWillUnmount')
     }
     // render 调用的时机, 1.初始化渲染  2.状态更新之后
     render() {
       <form onSubmit={this.handleSubmit}>
         用户名:<input type="text" onChange={event => saveFormdata('username', event)}/>
         密码:<input type="text" onChange={event => saveFormdata('password', event)}/>
         <button>登陆</button>
       </form>
     }
   }
   
   /**
   v.17.0.X 与 16.xxx的区别
   1. 即将废弃3个钩子: componentWillMount, componentWillReceiveProps, componentWillUpdate
   2. 新加了两个钩子: getDerivedStateFromProps, getSnapshotBeforeUpdate
   */
   
   /**
   * getDerivedStateFromProps: (工作中基本用不到), 这个钩子横跨初始化和更新, 返回值: Object | null
   		用法: 若 state 的值在任何状态下都取决于props, 可以使用
   	getSnapshopBeforeUpdate: 
   */
   // ui更新之前获取快照的钩子,
   getSnapshotBeforeUpdate() {
     return 'hh'
   }
   componentDidUpdate(preProps, preState, snapshotValue) {
     console.log('componentDidUpdate', preProps, preState, snapshotValue) // 第三个参数是getSnapshotBeforeUpdate钩子的返回值
   }
   
   // getSnapshopBeforeUpdate 应用实例:
   class Test extends React.Component {
     state = {
       newsList: []
     }
   	getSnapshopBeforeUpdate() {
       return this.refs.list.scrollHeight;
     }
   	componentDidMount() {
       setInterval(() =>{
         const {newsList} = this.state
         const news = 'news' + (newsList.length + 1)
         this.setState({ newsList: [news, ...newsList] })
       }, 1000)
     }
   	componentDidUpdate(preProps, preState, height) {
       console.log('componentDidUpdate', preProps, preState, snapshotValue) // 第三个参数是getSnapshotBeforeUpdate钩子的返回值
       this.refs.list.srollTop += this.refs.list.scrollHeight - height
     }
     render() {
       const {newsList} = this.state
       return (
         <div className="liset" ref="list">
   				{
             newsList.map((item, index) => {
               return <div :key="index">{item}</div>
             })
           }
         </div>
       )
     }
   }
   ```
   
5. Diff算法中的key和核心原理

6. rcc 快速创建模版

7. 生成一个id的库, nanoid库

8. todoList 相关知识点:

   1. 拆分组件,实现静态组件,注意className, style写法
   2. 动态初始化相关,如何确定将数据放在哪个组件的state中
      * 某个组件使用时,放在自身的state中
      * 某些组件使用时,放在他们共同的父组件的state中,官方称为:状态提升
   3. 父子组件通行:
      1. 父给子: props
      2. 子给父: 通过props, 父提前给子传递一个函数
   4. 注意defaultChecked 和 checked 区别: 类似的还有 defaultValue 和 value
   5. 状态在哪里,操作状态的方法就在哪里
   
9. react 脚手架配置代理: src 下add setupProxy.js文件

   ```javascript
   // common.js 格式,react脚手架已经内置
   const proxy = require('http-proxy-middleware')
   module.exports = function(app) {
     app.use(
       proxy('/api1', { // 遇见 /api1 前缀的请求, 就会触发该代理配置
         target: 'http://localhost: 5000', // 转发目标
         changeOrigin: true, //控制服务器收到的请求头中 Host 字段的值
         pathRewrite: {'^/api1': ''} // 重写请求路径
       }),
       proxy('/api2', {
         target: 'http://localhost: 5001',
         changeOrigin: true,
         pathRewrite: {
           '^/api2': ''
         }
       }),
     )
   }
   ```

10. 连续解构赋值和重命名

    ```javascript
    const obj = { a: { b: { c: 1 } } }
    const { a: { b: { c: data } } } = obj
    console.log(data) // 1
    ```

11. 组件通信

    ```jsx
    // 发布-订阅 实现组件通信, 任意层级的通信
    // 库, pubsub-js
    import PubSub from 'pubsub-js'
    // 接收者 接收消息
    PubSub.subscribe(name, fn)
    // 传递者 发布消息
    PubSub.publish(name, data)
    // 在 componentWillUnmount 中取消订阅
    componentWillUnmount() {
      PubSub.unSubscribe(this.token)
    }
    ```

12. fetch 是与 xhr同级别的 网 络请求api

    ```javascript
    // fetch 是一个原生函数, 不像xhr的封装库:axios
    fetch(url)
    .then(
      res => {
        // 联系服务器成功
      	return res.json()
    	},
      //err => {
         // 联系服务器失败
      //  return new Promise(() => {})
      //}
    )
    .then(
        // 获取数据成功
      res => {
        console.log(res)
    	},
      //err => {
        // 获取数据失败
      //  return err
      //}
    )
    .catch(err => {
      console.log(err)
    })
    
    // 简写
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    } catch(err) {
      console.log(err)
    }
    ```
    
13. react 路由

    >1. react-router-dom  web独有的路由库
    >2. 路由原理: 改变url,触发路由监听器,加载对应的组件
    >
    >3. 路由组件与一般组件的区别:
    >
    >>1. 接收到的props不同:
    >>   * 一般组件: 传递啥, 就接收啥
    >>   * 路由组件: 接收到三个固定的属性
    >>     1. history: 
    >>        * go: f
    >>        * goBack: f
    >>        * goForward: f
    >>        * push: f
    >>        * Replace: f
    >>     2. location:
    >>        * pathname
    >>        * Search
    >>        * state
    >>     3. match
    >>        * params
    >>        * path
    >>        * Url
    >>2. 写法不同
    >>   * 一般组件: <Demo />
    >>   * 路由组件: <Route path="./demo" component={Demo}/>
    >>3. 存放位置不同
    >>   * 一般组件: components
    >>   * 路由组件: pages
    >
    >4. Switch组件 可以提交路由匹配效率
    >
    >  ```jsx
    >  // 只会展示 Home组件
    >  import {Route,  Switch } from 'react-router-dom'
    >  <Switch>
    >    <Route path="/about" component={About}</Route>
    >    <Route path="/home" component={Home}></Route>    
    >    <Route path="/home" component={Test}></Route>
    >  </Switch>
    >  ```
    >
    >5. 解决多级路径刷新页面丢失的问题
    >
    > 6. public/index.html 中引入样式不写:  ./  写 / (常用) 
    >
    >  7. public/index.html 中引入样式不写:  ./  写 : %PUBLIC_URL% (常用)
    >
    >  8. 使用HashRouter
    >
    >9. 嵌套路由
    >
    >   1. 注册子路由的时候要写上父路由的path值
    >
    >   2. 路由匹配是按照注册路由的顺序进行的(父路由,子路由)
    >
    >10. 向路由传递参数 (路由组件才有路由相关的api)
    >
    >    ```jsx
    >    // 1. params 参数
    >    // 1):路由链接(携带参数)
    >    <Link to={`/home/message/detail/${item.id}/${item.title}`}>{ item.title }</Link>
    >    // 2):注册路由(声明接收)
    >    <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
    >    // 3):接收params参数
    >    const { id, title } = this.props.match.params
    >    
    >    // 2. 第二种方式: query参数
    >    // 1): 路由参数, 无需注册,
    >    <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{ item.title }</Link>
    >    <Route path="/home/message/detail/" component={Detail}></Route>
    >    
    >    // 2): 接收query参数
    >    // 借助 querystring 库, react 已经自动安装
    >    import qs from 'querystring'
    >    const searchData = qs.parse(this.props.location.search.slice(1))
    >    const { id, title } = searchData
    >    
    >    // 3. 向路由组件传递 state 参数, 不在url参数里
    >    // 1):
    >    <Link to={{pathname: '/home/message/detail', state: { id: item.id, title: item.title }}}>{ item.title }</Link>
    >    // 2): 正常注册路由即可
    >    <Route path="/home/message/detail/" component={Detail}></Route>
    >    // 3): 接收参数
    >    const {id, title} = this.props.location.state
    >    
    >    // 4. 编程式路由,其实就是用history上的api
    >    // this.props.history.push/replace(url, state) // state: {}
    >    ```
    >
    >11. 路由中 withRouter 的使用
    >
    >    ```jsx
    >    import React, { Component } from 'react'
    >    import { withRouter } from "react-router-dom"
    >    class A extends Component {}
    >    export default withRouter(A)
    >    // withRouter 可以加工一般组件,让一般组件具备路由组件所特有的API、
    >    // withRouter 的返回值是一个新组件
    >    ```
    >
    >12. BrowserRouter 与 HashRouter 的区别
    >
    >    1. 底层原理不一样:
    >       * BrowserRouter 使用的是H5 的history api, 不兼容ie9及以下版本
    >       * HashRouter 使用的是 url 的哈希值
    >    2. path 表现形式不一样:
    >       * BrowserRouter 的路径中没有# , eg: localhost:3000/demo/test
    >       * HashRouter 路径中包含 # , eg:  localhost:3000/#/demo/test
    >    3. 刷行后对路由state参数的影响:
    >       * BrowserRouter 没有任何影响,因为 state 保存着在 history 对象中
    >       * **HashRouter 刷行后会导致路由state参数的丢失, 因为 HashRouter 没有 history api**
    >    4. 备注: HashRouter 可以用于解决一些路径错误相关的问题.
    
14. UI组件库, material-ui, ant-design  p97