import { useState } from "react";
import AddTask from "./components/AddTask";
import logo from "./assets/list-icon.svg";

const App = () => {
  const [newTask, setNewTask] = useState("");
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
    </div>
  );
};

export default App;
