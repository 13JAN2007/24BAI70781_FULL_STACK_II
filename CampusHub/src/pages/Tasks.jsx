import React, { useState } from 'react';
import { TaskList } from '../components/TaskList';

export const Tasks = ({ tasks, dispatch, studentName }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [deadline, setDeadline] = useState('');
  
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');
  const [sortByDeadline, setSortByDeadline] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title || !deadline) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
      deadline,
    };

    dispatch({ type: 'ADD_TASK', payload: newTask });
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  // Filter, Search, and Sort Logic
  let processedTasks = tasks.filter((t) => 
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filter === 'COMPLETED') processedTasks = processedTasks.filter((t) => t.completed);
  if (filter === 'PENDING') processedTasks = processedTasks.filter((t) => !t.completed);

  if (sortByDeadline) {
    processedTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  return (
    <div>
      <h2>Task Management</h2>
      
      <div className="card">
        <h3>Add New Task</h3>
        <form onSubmit={handleAddTask}>
          <input className="input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input className="input" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <select className="input" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input className="input" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
          <button className="btn btn-success" type="submit">Add Task</button>
        </form>
      </div>

      <div className="card" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input className="input" placeholder="Search tasks..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="input" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="ALL">All Status</option>
          <option value="COMPLETED">Completed</option>
          <option value="PENDING">Pending</option>
        </select>
        <button className="btn" onClick={() => setSortByDeadline(!sortByDeadline)}>
          {sortByDeadline ? 'Unsort' : 'Sort by Deadline'}
        </button>
      </div>

      <TaskList tasks={processedTasks} dispatch={dispatch} studentName={studentName} />
    </div>
  );
};