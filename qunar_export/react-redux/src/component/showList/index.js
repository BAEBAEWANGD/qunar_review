import React, { Component } from 'react';
import './index.css';

class ShowList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const taskList = this.props.taskList;
        return <div className="list">
            {
                taskList.map((text,index) => {
                return <div className="task-list" key={index}>
                            <div className="left">
                                <input type="checkbox" className="checkbox" onChange={this.props.successTask} />
                                <span>{text}</span>
                            </div>
                            <div className="right" onClick={() => {this.props.removeTask(index)}}>删除</div>
                        </div>
                }) 
            }
            <div className="task-list">
                <div className="all">
                    <span>{this.props.checked}</span>已完成/<span>{this.props.taskList.length}</span>总数
                </div>
            </div>
        </div>
    }
}

export default ShowList;