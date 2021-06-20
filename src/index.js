import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/base.css";
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

ReactDOM.render(
  // 检查代码的不合理语法
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
// 检测redux 中 状态的改变, 重新调用 render 方法 
store.subscribe(() => {
  ReactDOM.render(
    // 检查代码的不合理语法
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 记录页面新能
reportWebVitals();
