import Task from "./Task";
import { useContext, useEffect } from "react";
import DataContext from "../contexts/DataProvider";

const DisplayTasks = () => {
  const {
    tasks,
    filteredTasks,
    setFilteredTasks,
    handleDelete,
    handleEdit,
    handleCheck,
    filter,
  } = useContext(DataContext);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.checked);
    const uncompletedTasks = tasks.filter((task) => !task.checked);

    if (filter === "all") {
      setFilteredTasks(tasks);
    } else if (filter === "progress") {
      setFilteredTasks(uncompletedTasks);
    } else if (filter === "finished") {
      setFilteredTasks(completedTasks);
    }
  }, [filter, tasks]);

  return (
    <div className="displayTasks">
      {filteredTasks.length ? (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleCheck={handleCheck}
          />
        ))
      ) : filter === "all" ? (
        <p className="task-empty">You have no tasks</p>
      ) : filter === "progress" ? (
        <p className="task-empty">You have no tasks in progress</p>
      ) : (
        <p className="task-empty">You have no completed tasks</p>
      )}
    </div>
  );
};

export default DisplayTasks;
