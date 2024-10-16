import React from "react";
import "./Task.css";
import { useToDoContext } from "../context/ToDoContext";
import toast from "react-hot-toast";

// Task component
const Task = ({ task, editTask }) => {
  // Destructuring tasks and setTasks from useToDoContext
  const { tasks, setTasks } = useToDoContext();
  const handleRemove = (e) => {
    let filteredTask = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTask);
    toast("Task removed Successfully");
  };

  const toggleHandler = () => {
    let toggledTask = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(toggledTask);
    toast("Task status updated successfully");
  };
  return (
    <div className="d-flex w-100 justify-content-between bg-light rounded-3 mb-2">
      <div className="">
        <p className="p-0 ms-3 mt-3 font-monospace display-5 ">{task.name}</p>
        <p className="p-0 ms-3 mt-3 font-monospace display-6">
          {task.description}
        </p>
      </div>

      <div className=" d-flex w-50 align-content-center align-items-center">
        <div className="d-flex w-25">
          <button
            className="remove-button"
            onClick={() => {
              editTask(task);
            }}
          >
            Edit
          </button>
          <button className="remove-button" onClick={handleRemove}>
            Remove
          </button>
        </div>

        <div className="w-75 justify-content-between d-flex  align-items-center ms-2">
          <label htmlFor="" className=" w-75 ms-1">
            {task.completed ? `Mark as Undone` : `Mark as Done`}
          </label>
          <input
            type="checkbox"
            value={task.completed}
            onChange={toggleHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
