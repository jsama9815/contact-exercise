import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from  '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default description', LEVELS.NORMAL , false);

    // changeState = (id) => {
    //     console.log('TODO: Cambiar estado de una tarea');
    // }

    return (
        <div>
            <div>
                <h1>
                    Your Task:
                </h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            <TaskComponent Task={ defaultTask }></TaskComponent>
        </div>
    );
};

export default TaskListComponent;