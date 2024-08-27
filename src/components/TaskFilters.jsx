import propTypes from "prop-types";

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <div
        className={`filter ${filter === "all" && "active"}`}
        onClick={() => setFilter("all")}
      >
        All
      </div>
      <div
        className={`filter ${filter === "progress" && "active"}`}
        onClick={() => setFilter("progress")}
      >
        Progress
      </div>
      <div
        className={`filter ${filter === "finished" && "active"}`}
        onClick={() => setFilter("finished")}
      >
        Finished
      </div>
    </div>
  );
};

TaskFilters.propTypes = {
  filter: propTypes.string.isRequired,
  setFilter: propTypes.func.isRequired,
};

export default TaskFilters;
