import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {  Task } from '../../models/task.class'

//Importamos los estilos
import '../../styles/task.scss';

const TaskComponent = ({ Task }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${Task.name} is going to unmount`)
        };
    }, [Task]);

    return (
        <div>
            <h2 className='task-name'> 
                Nombre: { Task.name }
            </h2>
            <h3>
                Description: { Task.description }
            </h3>
            <h4>
                Level: { Task.level }
            </h4>
            <h5>
                This task is: { Task.completed ? 'COMPLETED' : 'PENDING' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    Task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
