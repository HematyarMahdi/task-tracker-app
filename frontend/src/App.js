import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:3001/tasks');
    const data = await response.json();
    setTasks(data);
  };

  // Add a new task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    setTasks([...tasks, newTask]);
  };

  // Delete a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
