import React, { Component } from 'react';
import './index.css';

class InputList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <footer>
            <div className="task">
                <span className="caption">Task: </span>
                <div className="inputTask">
                    <input id="input-task" onKeyDown={(event) => this.keyDwonHandler(event)} type="text" placeholder="请输入一个Task" />
                </div>
            </div>
            <div className="submitBox">
                <button id="submit" onClick={this.props.addTask}>Save Task</button>
            </div>
        </footer>
    }

    keyDwonHandler(event) {
        if(event.keyCode === 13) {
            this.props.addTask();
        }
    }
}

export default InputList;