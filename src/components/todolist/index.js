import React, { Component } from 'react';
import TodoItem from './todoItem.js'
import todoList from './todolist.module.scss'

const name = 'todolist'

class Todolist extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ulData: [
        'learn react',
        'learn vue'
      ],
      inputValue: ''
    }
  }

  handleClick = () => {
    if (this.state.inputValue) {
      this.setState({
        ulData: [...this.state.ulData, this.state.inputValue],
        inputValue: ''
      })  
    }
  }

  // 绑定value
  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 删除行
  handleDelete = (val) => {
    const list = [...this.state.ulData]
    list.splice(val, 1)
    this.setState({
      ulData: list
    })
  }

  getTodoListItem = () => {
    return (
      this.state.ulData.map((item, index) => {
        return (
          <TodoItem content={item} key={index} index={index} delete={this.handleDelete}/>
        )
      })
    )
  }
  // 父组件通过属性向子组件传递参数
  // 子组件通过props接收参数
  // 子组件给父组件传参，调用父组件绑定的方法
  render() {
    return (
      <div className={todoList[name]}>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInput}/>
          <button onClick={this.handleClick}>add</button>
        </div>
        <ul>{ this.getTodoListItem() }</ul>
      </div>
    )
  }
}

export default Todolist;
