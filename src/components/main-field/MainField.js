/**
 * Created by somali on 22.03.17.
 */
import React, { Component } from 'react';
import './MainField.css';
import Search from '../search/Search';
import TasksList from "../tasks-list/TasksList";

class MainField extends Component {
    render() {
        return (
            <div>
                <Search />
                <TasksList items={ ['item1', 'item2', 'item3'] } />
            </div>


        );
    }
}
export default MainField;