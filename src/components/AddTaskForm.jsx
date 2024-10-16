import React from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "./AddTaskForm.css";

// AddTaskForm component
const AddTaskForm = ({ addTask, taskToEdit }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    description: "",
    completed: false,
    id: new Date().getTime(),
  });

  // useEffect to set the input values when taskToEdit is passed
  useEffect(() => {
    if (taskToEdit) {
      setInputValues(taskToEdit);
    }
  }, [taskToEdit]);

  // Function to validate the input fields
  const handleValidation = (task) => {
    if (task.name === "" || task.description === "") {
      toast("Fields cannot be empty");
      return false;
    }
    return true;
  };

  // Function to submit the form
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
    const success = handleValidation(inputValues);
    if (!success) {
      return;
    }
    setInputValues({ ...inputValues, id: new Date().getTime() });
    addTask(inputValues);
    let message = taskToEdit
      ? "Task updated Successfully"
      : "Task added Successfully";
    toast(message);
    setInputValues({
      name: "",
      description: "",
      completed: false,
      id: new Date().getTime(),
    });
  };
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div className="input-task">
        <label for="inputTask">Task name</label>
        <input
          id="todo-text"
          type="text"
          placeholder="Enter task name"
          value={inputValues.name}
          onChange={(e) => {
            setInputValues({ ...inputValues, name: e.target.value });
          }}
        />
        <label for="task-description">Task Description</label>
        <textarea
          id="task-description"
          placeholder="Enter task description"
          value={inputValues.description}
          onChange={(e) => {
            setInputValues({ ...inputValues, description: e.target.value });
          }}
        ></textarea>
      </div>
      <button className="add-btn">
        {taskToEdit ? `Add Edited Task` : `Add New Task`}
      </button>
    </form>
  );
};

// Export AddTaskForm component
export default AddTaskForm;
