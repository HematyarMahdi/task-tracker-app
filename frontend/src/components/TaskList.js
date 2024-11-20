import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <span>{task.name}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
