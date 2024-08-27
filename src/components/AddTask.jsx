import propTypes from "prop-types";
import { useContext } from "react";
import DataContext from "../contexts/DataProvider";

const AddTask = () => {
  const { newTask, setNewTask, handleSubmit, isEditing } =
    useContext(DataContext);
  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add a new Task"
        className="task-input"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-task-btn" type="submit">
        {isEditing.editing ? "Edit" : "Add"}
      </button>
    </form>
  );
};

AddTask.propTypes = {
  newTask: propTypes.string,
  setNewTask: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default AddTask;
