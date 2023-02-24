import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

//Importamos los estilos
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ Task, complete, remove }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${Task.name} is going to unmount`);
    };
  }, [Task]);

  // Function that returns a Badge
  // depending on the level of the task

  function taskLevelBadge() {
    switch (Task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{Task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{Task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{Task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  /**
   * Function that returns icon depending on completion of the task
   */

  function taskCompletedIcon(){
    if(Task.completed) return ( <i onClick={() => complete(Task)} className="bi-toggle-on task-action" style={{ color: "green", fontWeight: "bold" }}></i> )
    else return (<i onClick={() => complete(Task)} className="bi-toggle-off task-action" style={{ color: "grey" }}></i> )
  }

  const taskCompleted = {
    color:'green',
    textDecoration: 'line-through'
  }

  
  const taskinCompleted = {
    color: 'tomato',
    fontWeight: 'bold'
  }


  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <tr className="fw-normal" style = { Task.completed ? taskCompleted : taskinCompleted }>
      <th>
        <span className="ms-2">{Task.name}</span>
      </th>
      <td className="align-middle">
        <span>{Task.description}</span>
      </td>
      <td className="align-middle">
        {/* Execution of function to return badge element */}
        { taskLevelBadge() }
      </td>
      <td className="align-middle">
        {/* Execution of function to return icon depending on completion */}
        { taskCompletedIcon() }
        <i  onClick={() => remove(Task)} className="bi-trash task-action" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  Task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default TaskComponent;
