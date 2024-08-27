import propTypes from "prop-types";
import Task from "./Task";

const DisplayTasks = ({ tasks }) => {
  return (
    <div className="displayTasks">
      {tasks.length ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p className="task-empty">You have no tasks</p>
      )}
    </div>
  );
};

DisplayTasks.propTypes = {
  tasks: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      checked: propTypes.bool.isRequired,
      item: propTypes.string.isRequired,
    })
  ),
};

export default DisplayTasks;
