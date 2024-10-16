import React from "react";
import "./TasksLists.css";
import Task from "./Task";

// TasksLists component
const TasksLists = ({ tasks, onEditTask }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task, index) => (
        <Task key={index} task={task} editTask={onEditTask} />
      ))}
    </div>
  );
};

// Exporting TasksLists component
export default TasksLists;
