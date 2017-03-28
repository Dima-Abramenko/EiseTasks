/**
 * Created by somali on 22.03.17.
 */
import React, { Component } from 'react';
import './TasksList.css';
import TaskListItem from '../tasks-list-item/TasksListItem';

class TasksList extends Component {
    render() {
        return <div>
            <h1>ТаsksList</h1>
            <ul>
                {
                    this.props.items.map(function(item){
                        return <TaskListItem key={item} name={item} />
                    })
                }
            </ul>
        </div>;
    }
}
export default TasksList;