import React from "react";
import Task from "./Task";

function TaskList({ taskList, deleteTask }) {
  return (
    <div className="tasks">
      {taskList && taskList.map((task) => (
        <Task key={task.id} task={task} onDelete={() => deleteTask(task.id)} />
      ))}
    </div>
  );
}

export default TaskList;
