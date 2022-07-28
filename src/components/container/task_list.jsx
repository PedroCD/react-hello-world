import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Cambiar el estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/*
            ! TODO: Learn how to configure Angular's ngFor structure for React (maybe pure js?)
            */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
