import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TasksLists from "./components/TasksLists";
import { useEffect, useState } from "react";
import { useToDoContext } from "./context/ToDoContext";
import { Toaster } from "react-hot-toast";

// App component
function App() {
  const { tasks, setTasks } = useToDoContext();
  const [taskEdit, setTaskEdit] = useState(null);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, [setTasks]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a task
  const addTaskImplementation = (task) => {
    if (taskEdit) {
      const updatedTask = tasks.map((t) => (t.id === taskEdit.id ? task : t));
      //check what this does
      console.log(`updatedTask: ${updatedTask}`);
      setTasks(updatedTask);
      setTaskEdit(null);
      return;
    }
    setTasks([...tasks, task]);
  };
  const handleEdit = (task) => {
    setTaskEdit(task);
  };
  return (
    <div className="main-container">
      <Toaster />
      <div className="container">
        <AddTaskForm addTask={addTaskImplementation} taskToEdit={taskEdit} />
        <TasksLists tasks={tasks} onEditTask={handleEdit} />
      </div>
    </div>
  );
}

export default App;
