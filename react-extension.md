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

P23

