import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    { id: 1, checked: false, item: "task 1" },
    { id: 2, checked: false, item: "task 2" },
    { id: 3, checked: false, item: "task 3" },
  ]);
  const [isEditing, setIsEditing] = useState({ editing: false, taskId: null });

  const addTask = () => {
    setTasks((prevTasks) => {
      const newTaskObj = {
        id: tasks[tasks.length - 1].id + 1,
        checked: false,
        item: newTask,
      };
      return [...prevTasks, newTaskObj];
    });

    setNewTask("");
  };

  const editTask = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, item: newTask } : task
      );

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
