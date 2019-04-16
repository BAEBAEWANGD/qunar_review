import store from './store';
import React, { Component } from 'react';
import './App.css';

import InputList from './component/inputList/index.js';
import ShowList from './component/showList/index.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: store.getState().todolist,
      activeCount: 0
    }
  }

  render() {
    store.subscribe(() => {
      const todolist = store.getState().todolist;
      const activeCount = todolist.filter((todo) => todo.completed);
      this.setState({
        todolist: todolist,
        activeCount: activeCount.length
      })
    })
    return (
      <div className="App">
        <div className="todo-list">
          <div className="content">
            <h1>React Todo</h1>
            <ShowList todolist={this.state.todolist} activeCount={this.state.activeCount} />
            <InputList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
