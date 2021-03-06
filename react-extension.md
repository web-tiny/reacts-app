## 1. setState 更新状态的两种方式

1. 对象式: setState({}, [cb]) : cb 是可选的
2. 函数式: setState((state, props) => {})
3. 总结:
   1. 对象式是函数式的语法糖
   2. 使用原则:
      1. 如果新状态不依赖原状态, === 使用对象方式
      2. 如果新状态依赖原来的状态, === 使用函数式
      3. 如果需要在setState() 执行后获取最新的状态数据,要在第二个callback 函数中读取



### 2. Hooks: 函数组件中使用state及其他 react 特性

1. 3个常用的hooks

   1. State Hook: React.useState(), 可以对state进行读写操作

   2. Effect Hook: React.useEffect(), 相当于函数组件使用生命周期钩子

      >1.  React.useEffect() 可以在函数组件中执行副作用操作(模拟类组件中的生命周期钩子)
      >
      >2. react 中的副作用操作:
      >
      >   1. 发ajax请求
      >   2. 设置订阅,启动定时器
      >   3. 手动更改真是dom
      >
      >3. 语法和说明:
      >
      >   useEffect(() => {
      >
      >   ​	// 在此执行任何带副作用操作
      >
      >   ​	return () => {
      >
      >   ​		// 在此做一些收尾工作,如清除定时器/取消订阅等
      >
      >   ​	}
      >
      >    // 如果指定的是[],回调函数只会在第一次render() 后执行
      >
      >   }, [stateValue])
      >
      >4. 可以把 useEffect Hook 看作如下三个函数的组合
      >
      >   componentDidMount()
      >
      >   componentDidUpdate()
      >
      >   componentWillUnmount()

   3. Ref Hook: React.useRef()

      >1. Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其他数据
      >
      >2. 语法: const refContainer = useRef()
      >
      >3. 作用与React.createRef() 一样, 用来保存标签对象

### 3. 碎片化: Fragment 

1. react 中的 Fragment 就相当于 template模版,最终 react会将其丢弃,不会生成一个标签, 可用于遍历的时候, 因为只接受key属性, 拥有同样功能的空标签 <> </>却不支持任何属性



### 4. Context: 一种组件间的通信方式

### 5. 组件优化

1. component的2个问题

   1. 只要执行setState(), 即便不改变状态数据,组件也会重新render()===》效率低
   2. 只要当前组件重新render(), 就会自动重新render子组件,纵使子组件没有用到父组件的任何数据 ====》效率低

2. 效率高的做法: 只有当组件的state或props数据发生改变时才重新render()

3. 问题原因: Component中的 shouldComponentUpdate()  总是返回true

4. 解决:

   1. 办法1: 重写 shouldComponentUpdate() 方法,  比较新旧state 或props 数据,如果有变化才返回 true, 如果没有返回 false

   2. 办法2: 使用 PureComponent, 其重写了  shouldComponentUpdate() , 只有state 或 props 数据有变化才返回 true

      注意: 

      1. **只是进行 state 和 props 的浅比较, 如果只是数据对象内部数据变了, 会返回 false**
      2. **不要直接修改state 数据, 而是要产生 新数据(解构复制)**

   3. 项目中一般使用 PureComponent 来优化



### 6. Render props(类似Vue中的插槽) chirldren props(eg: /pages/renderProps)



### 7. 错误边界(容易发生错误的组件的父组件里处理可能出现的错误, eg: /pages/errorBoundry)



### 8. 组件通信方式总结

1. props: children props, render props
2. 消息发布订阅: pubs-sub, event(C#) 等
3. 集中式管理: redux, dva 等
4. conText: 生产者-消费者模式

比较好的搭配方式:

* 父子组件: props

* 兄弟组件: 集中式管理、消息订阅-发布

* 祖孙组件: 消息订阅-发布、集中式管理, conText(开发用得少, 封装插件用得多)



