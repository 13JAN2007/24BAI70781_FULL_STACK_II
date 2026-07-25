import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    'Walk the dog',
    'Water the plants',
    'Wash the dishes',
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    setTasks((prevTasks) => [...prevTasks, trimmedTask]);
    setTask('');
  };

  const handleDelete = (indexToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {tasks.map((item, index) => (
          <li key={`${item}-${index}`}>
            <span>{item}</span>
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
