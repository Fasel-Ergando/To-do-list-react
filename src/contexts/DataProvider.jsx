import { createContext, useState, useEffect, useRef } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState({ editing: false, taskId: null });
  const [filteredTasks, setFilteredTasks] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("user-to-do-list")) || []);
  }, []);

  const saveTasks = (userTasks) => {
    localStorage.setItem("user-to-do-list", JSON.stringify(userTasks));
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks((prevTasks) => {
      const newTaskObj = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        checked: false,
        item: newTask,
      };
      const updatedTasks = [...prevTasks, newTaskObj];
      saveTasks(updatedTasks);
      return updatedTasks;
    });

    setNewTask("");
  };

  const editTask = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, item: newTask } : task
      );
      saveTasks(updatedTasks);
      return updatedTasks;
    });
    setIsEditing({ editing: false, taskId: null });
    setNewTask("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing.editing) {
      addTask();
    } else {
      editTask(isEditing.taskId);
    }
  };

  const handleEdit = (id) => {
    setIsEditing({ editing: true, taskId: id });
    const selectedTask = tasks.filter((task) => task.id === id);
    setNewTask(selectedTask[0].item);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  };

  const handleCheck = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      );
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  };

  return (
    <DataContext.Provider
      value={{
        newTask,
        setNewTask,
        filter,
        setFilter,
        tasks,
        setTasks,
        isEditing,
        setIsEditing,
        addTask,
        handleSubmit,
        handleEdit,
        handleDelete,
        handleCheck,
        filteredTasks,
        setFilteredTasks,
        inputRef,
        handleFocus,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
