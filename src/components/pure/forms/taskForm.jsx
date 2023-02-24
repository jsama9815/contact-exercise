import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newtask = new Task (
            nameRef.current.value,
            descriptionRef.current.value,
            levelRef.current.value,
            false,
            levelRef.current.value
        );
        add(newtask);
    }
    
    return (
        <form onSubmit={ addTask} className='d-flex justify-content align-items-center mb-4'>
              <div className='form-outline flex-fill'>
                <input ref={nameRef}
                id='inputName'
                type='text'
                className='form-control form-control-lg' 
                required 
                autoFocus 
                placeholder='TaskName'/>
                <input ref={descriptionRef} 
                id='inputDescription' 
                type='text' 
                className='form-control form-control-lg' 
                required 
                placeholder='TaskDescription'/>
                {/* <label htmlFor='selectLevel' className='sr-only'>Prority</label> */}
                <select className='form-control form-control-lg' ref={ levelRef } defaultValue= {LEVELS.NORMAL} id= 'selectLevel'>
                    <option value={LEVELS.NORMAL}>normal</option>
                    <option value={LEVELS.URGENT}>urgent</option>
                    <option value={LEVELS.BLOCKING} >blocking</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                {length > 0 ? 'Add New Task' : 'Add Your First Task'}
                </button>
              </div>
        </form>
    );
}

TaskForm.ProtoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
