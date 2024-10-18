import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Lista de Tarefas</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>

      <ul style={{ paddingLeft: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => removeTask(index)}
              style={{ marginLeft: '10px' }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
