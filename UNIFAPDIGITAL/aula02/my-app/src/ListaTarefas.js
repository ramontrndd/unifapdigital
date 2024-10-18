import React, { useState } from 'react';

const ListaTarefas = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleMask = (index) => {
    const updateTasks = [...tasks];
    updateTasks[index].completed = !updatedTasks[index].completed;
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ListaTarefas</h1>
    </div>
  );
};

export default ListaTarefas;
