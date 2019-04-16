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
      checked: [false, false, false],
      count: 0
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
            <ShowList  taskList={this.state.taskList} removeTask={this.removeTask} successTask={this.successTask} checked={this.state.count} />
            <InputList taskList={this.state.taskList} addTask={this.addTask} />
          </div>
        </div>
      </div>
    );
  }

  addTask() {
    //若将input的value的值，change的时候就要改变，调用次数过多，影响性能，所以将其放入addTask中，直接在dom上操作清空input的值
    const taskList = this.state.taskList;
    const checked = this.state.checked;
    const input = document.getElementById("input-task");
    if(input.value.trim() === '') {
      alert("请输入一个Task~~~~~~~");
      return ;
    }
    taskList.push(input.value);
    checked.push(false);
    input.value = '';
    this.setState({
      taskList: taskList,
      checked: checked
    })
  }

  removeTask(index) {
    const taskList = this.state.taskList;
    const checked = this.state.checked;
    taskList.splice(index, 1);
    checked.splice(index, 1);
    this.setState({
      taskList: taskList,
      checked: checked
    }, function() {
      this.successTask();
    })
  }

  successTask(index) {
    //checkbox的样式应该和this.state.checked同步
    const checkbox = document.getElementsByClassName("checkbox");
    const checked = this.state.checked;
    if(typeof index !== "undefined"){
      checked.splice(index, 1, !checked[index]);
    }
    let count = 0;
    for(let i=0; i<checked.length; i++) {
      let acticeStyle = checkbox[i].parentNode.parentNode;
      if(checked[i]) {
        checkbox[i].checked = true;
        acticeStyle.className += " task-list-active";
        count++;
      }else {
        if(acticeStyle.className.indexOf("task-list-active") > 0) {
          acticeStyle.className = "task-list";
          checkbox[i].checked = false;
        }
      }
    }
    this.setState({
      checked: checked,
      count: count
    })
  }
}

export default App;
