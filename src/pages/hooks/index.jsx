import { useState, useEffect, useRef, Fragment } from 'react'
import reactDom from 'react-dom'

export default function Demo () {
  const [count, setCount] = useState(0)
  const add = () => {
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1) // 第二种写法
  }

  /**
   * useEffect(fn, []) 钩子相当于: componentDidMount 和
   * componentDidUpdate 钩子, 
   * 具体是哪一个取决于第二个参数: 就是监听某一个 属性
   * 第一个参数的返回函数就相当于执行钩子函数: componentWillUnmount
   */
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const unmount = () => {
    reactDom.unmountComponentAtNode(document.getElementById('root'))
  }

  // Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其他数据
  // 语法: const refContainer = useRef()
  // 作用与React.createRef() 一样, 用来保存标签对象
  const myRef = useRef()
  const getValue = () => {
    alert(myRef.current.value)
  }
  return (
    <Fragment>
      <h2>Hooks-当前求和为: { count }</h2>
      <input ref={myRef} /><br/>
      <button onClick={ add }>click to add 1</button>
      <button onClick={ unmount }>unmount components</button>
      <button onClick={ getValue }>input value</button>
    </Fragment>
  )
}