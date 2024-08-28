import { useContext } from "react";
import DataContext from "../contexts/DataProvider";

const AddTask = () => {
  const { newTask, setNewTask, handleSubmit, isEditing, inputRef } =
    useContext(DataContext);
  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add a new Task"
        className="task-input"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        ref={inputRef}
      />
      <button className="add-task-btn" type="submit">
        {isEditing.editing ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default AddTask;
