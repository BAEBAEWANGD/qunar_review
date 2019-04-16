import React, { Component } from 'react';
import './index.css';
import store from '../../store';
import { changeStyleList } from '../../action';
import { removeTaskList } from '../../action';

class ShowList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="list">
            {
                this.props.todolist.map((obj, index) => {
                return <div className={obj.completed ? 'task-list task-list-active' : 'task-list'}  key={obj.id}>
                            <div className="left">
                                <input type="checkbox" onChange={() => {this.changeStyle(obj.id)}} className="checkbox" />
                                <span>{obj.text}</span>
                            </div>
                            <div className="right" onClick={(e) => {
                                e.preventDefault();
                                this.removeTask(index);
                            }}>删除</div>
                        </div>
                }) 
            }
            <div className="task-list">
                <div className="all">
                    <span>{this.props.activeCount}</span>已完成/<span>{this.props.todolist.length}</span>总数
                </div>
            </div>
        </div>
    }
    changeStyle(id) {
        store.dispatch(changeStyleList(id));
    }
    removeTask(id) {
        store.dispatch(removeTaskList(id));
    }
}

export default ShowList;