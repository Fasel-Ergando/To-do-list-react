import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskFilters from "./components/TaskFilters";
import logo from "./assets/list-icon.svg";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const handleSubmit = (e) => {
    e.preventDefault();
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
    </div>
  );
};

export default App;
