/**
 * Created by somali on 22.03.17.
 */
import React, { Component } from 'react';
import './TaskListItem.css';

class TasksListItem extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}
export default TasksListItem;