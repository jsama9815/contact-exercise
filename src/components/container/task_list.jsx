import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task("Example1", "Description 1", LEVELS.NORMAL, true);
  const defaultTask2 = new Task("Example2", "Description 2", LEVELS.URGENT, false);
  const defaultTask3 = new Task("Example3", "Description 3", LEVELS.BLOCKING, false);  

  //Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);


  function completedTask(Task){
        console.log('Complete this Task:', Task);
        const index = tasks.indexOf(Task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        //we update de state of the component with the new list of taks and it will update the
        // interation of the tasks in order to show the task update
        setTasks(tempTask);
  }

  function removeTask(Task){
        console.log('Complete this Task:', Task);
        const index = tasks.indexOf(Task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
  }

  function addTask(Task){
    console.log('Complete this Task:', Task);
        const index = tasks.indexOf(Task);
        const tempTask = [...tasks];
        tempTask.push(Task);
        setTasks(tempTask);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
            {/* card header (tittle) */}
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          {/* card body (content) */}
          <div className="card-body"  data-mbd-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
            <table>
                <thead>
                <tr>
                    <th scope="col">Tittle</th>
                    <th scope="col">Description</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    { tasks.map((Task, index) => {
                        return (
                            <TaskComponent
                            key={ index }
                            Task={ Task }
                            complete = { completedTask }
                            remove = { removeTask }
                            >                            
                            </TaskComponent>
                        )
                    } )}
                </tbody>
            </table>
          </div>
        </div>
        <TaskForm add={ addTask }></TaskForm>
      </div>
      {/* TODO: Aplicar un for/map para renderizar una lista */}
      {/* <TaskComponent Task={defaultTask}></TaskComponent> */}
    </div>
  );
};

export default TaskListComponent;
