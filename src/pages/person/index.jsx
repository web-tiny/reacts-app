import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { addPersion } from '../../redux/actions/persion';
import { nanoid } from 'nanoid';

class Person extends Component {
  subMite = () => {
    const {name, age} = this
    this.props.add({
      id: nanoid(),
      name: name.value,
      age: age.value
    })
    this.name.value = ''
    this.age.value = ''
  }
  render() {
    const { person, total } = this.props
    return (
      <div>
        <h2>数据共享案例, count值: {total}</h2>
        <label>
          姓名:<input ref={ c => this.name = c }></input>
        </label>
        <label>
          年龄:<input ref={ v => this.age = v }></input>
        </label>
        <button onClick={ this.subMite }>提交</button>
        <ul>
          {
            person.map(item => {
              return (<li key={item.id}>姓名:{ item.name }--年龄:{ item.age }</li>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    person: state.person,
    total: state.count
  }),
  {
    add: addPersion
  }
)(Person)