import { GoTrash } from "react-icons/go";
import CustomCheckbox from "./CustomCheckbox";
import { GoPencil } from "react-icons/go";

import propTypes from "prop-types";

const Task = ({ task }) => {
  return (
    <div className="task">
      <CustomCheckbox />
      <p className="task-body">{task.item}</p>

      <div className="options">
        <div className="edit-task">
          <GoPencil size="1.1em" />
        </div>
        <div className="delete-task">
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
};

export default Task;
