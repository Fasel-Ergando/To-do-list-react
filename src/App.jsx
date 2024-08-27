import AddTask from "./components/AddTask";
import TaskFilters from "./components/TaskFilters";
import DisplayTasks from "./components/DisplayTasks";
import logo from "./assets/list-icon.svg";
import { DataProvider } from "./contexts/DataProvider";

const App = () => {
  return (
    <div className="container">
      <div className="header-icon">
        To-do List <img src={logo} alt="To-do list icon" />
      </div>

      <DataProvider>
        <AddTask />
        <TaskFilters />
        <DisplayTasks />
      </DataProvider>
    </div>
  );
};

export default App;
