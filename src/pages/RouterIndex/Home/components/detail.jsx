import React, { Component } from 'react';

const contentDetail = [
  { id: 1, content: '1 content' },
  { id: 2, content: '2 content' },
  { id: 3, content: '3 content' },
  { id: 4, content: '4 content' },
]
class Detail extends Component {
  render() {
    // 接收params参数
    const { id, title } = this.props.match.params
    const { content } = contentDetail.find(item => item.id === Number(id)) || {}
    return (
      <ul>
        <li>id: { id }</li>
        <li>title: { title }</li>
        <li>content: { content }</li>
      </ul>
    );
  }
}

export default Detail;