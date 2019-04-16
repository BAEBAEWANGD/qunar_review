import React, { Component } from 'react';
import './index.css';
import store from '../../store';
import { addTaskList } from '../../action';

class InputList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let input;
        return <footer>
            <div className="task">
                <span className="caption">Task: </span>
                <div className="inputTask">
                    <input ref={(node) => {input = node;}} onKeyDown={(event) => {this.addTask(event, input)}} id="input-task" type="text" placeholder="请输入一个Task" />
                </div>
            </div>
            <div className="submitBox">
                <button id="submit" onClick={(event) => {this.addTask(event, input)}}>Save Task</button>
            </div>
        </footer>
    }
    addTask(event, input) {
        if(event.keyCode && event.keyCode !== 13) {
            return ;
        }
        if(!input.value.trim()) {
            console.log("请输入一个task");
            return ;
        }
        store.dispatch(addTaskList(input.value, false));
        input.value = '';
    }
}

export default InputList;