import propTypes from "prop-types";

const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input type="text" placeholder="Add a new Task" className="task-input" />
      <button className="add-task-btn">Add</button>
    </form>
  );
};

AddTask.propTypes = {
  newTask: propTypes.string.isRequired,
  setNewTask: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default AddTask;
