import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InputList from './component/inputList/index.js';
import ShowList from './component/showList/index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.successTask = this.successTask.bind(this);
    this.state = {
      taskList: ["吃饭", "睡觉", "打豆豆"],
      checked: 0
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="todo-list">
          <div className="content">
            <h1>React Todo</h1>
            <ShowList  taskList={this.state.taskList} removeTask={this.removeTask} successTask={this.successTask} checked={this.state.checked} />
            <InputList taskList={this.state.taskList} addTask={this.addTask} />
          </div>
        </div>
      </div>
    );
  }

  addTask() {
    //若将input的value的值，change的时候就要改变，调用次数过多，影响性能，所以将其放入addTask中，直接在dom上操作清空input的值
    const taskList = this.state.taskList;
    const input = document.getElementById("input-task");
    if(input.value.trim() === '') {
      alert("请输入一个Task~~~~~~");
      return ;
    }
    taskList.push(input.value);
    input.value = '';
    this.setState({
      taskList: taskList
    })
  }

  removeTask(index) {
    const taskList = this.state.taskList;
    taskList.splice(index, 1);
    this.setState({
      taskList: taskList
    }, function() {
      this.successTask();
    })
  }

  successTask() {
    const checkbox = document.getElementsByClassName("checkbox");
    let checked = 0;
    for(let i=0; i<checkbox.length; i++) {
      let acticeStyle = checkbox[i].parentNode.parentNode;
      if(checkbox[i].checked) {
        acticeStyle.className += " task-list-active";
        checked++;
      }else {
        if(acticeStyle.className.indexOf("task-list-active") > 0) {
          acticeStyle.className = "task-list";
        }
      }
    }
    this.setState({
      checked: checked
    })
  }
}

export default App;
