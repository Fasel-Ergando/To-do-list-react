
import { GoTrash } from "react-icons/go";
import CustomCheckbox from "./CustomCheckbox";

import propTypes from "prop-types";

const Task = ({ task }) => {
  return (
    <div className="task">
      <CustomCheckbox />
      <p>{task.item}</p>
      <button className="delete-task">
        <GoTrash />
      </button>
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
