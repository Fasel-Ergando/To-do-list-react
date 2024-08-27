import { GoTrash } from "react-icons/go";
import CustomCheckbox from "./CustomCheckbox";
import { GoPencil } from "react-icons/go";

import propTypes from "prop-types";

const Task = ({ task, handleDelete, handleEdit }) => {
  return (
    <div className="task">
      <CustomCheckbox />
      <p className="task-body">{task.item}</p>

      <div className="options">
        <div className="edit-task" onClick={() => handleEdit(task.id)}>
          <GoPencil size="1.1em" />
        </div>
        <div className="delete-task" onClick={() => handleDelete(task.id)}>
          <GoTrash size="1.1em" />
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: propTypes.shape({
    id: propTypes.number.isRequired,
    checked: propTypes.bool.isRequired,
    item: propTypes.string.isRequired,
  }),
  handleDelete: propTypes.func.isRequired,
  handleEdit: propTypes.func.isRequired,
};

export default Task;
