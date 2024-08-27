import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskFilters from "./components/TaskFilters";
import DisplayTasks from "./components/DisplayTasks";
import logo from "./assets/list-icon.svg";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    { id: 1, checked: false, item: "task 1" },
    { id: 2, checked: false, item: "task 2" },
    { id: 3, checked: false, item: "task 3" },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
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

  const handleDelete = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      return updatedTasks;
    });
  };

  return (
    <div className="container">
      <div className="header-icon">
        To-do List <img src={logo} alt="To-do list icon" />
      </div>
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <TaskFilters filter={filter} setFilter={setFilter} />
      <DisplayTasks tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
