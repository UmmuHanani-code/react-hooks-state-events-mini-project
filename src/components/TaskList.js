import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default TaskList;

