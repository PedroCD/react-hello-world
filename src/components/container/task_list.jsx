import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/*
            ! TODO: Learn how to configure Angular's ngFor structure for React (maybe pure js?)
            */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
