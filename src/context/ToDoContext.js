// Code: ToDoContext.js
import { useState, useContext, createContext } from "react";

// Creating a context
const ToDoContext = createContext();

export const useToDoContext = () => useContext(ToDoContext);

export const ToDoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  return (
    <ToDoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </ToDoContext.Provider>
  );
};
