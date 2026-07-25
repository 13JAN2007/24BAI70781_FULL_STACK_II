import React from 'react';

// Part B — Prop Drilling Demonstration
export const TaskCard = ({ task, dispatch, studentName }) => {
  return (
    <div className="card" style={{ borderLeft: task.completed ? '5px solid #2ecc71' : '5px solid #e74c3c' }}>
      <p style={{ fontSize: '0.8rem', color: '#777' }}>Assigned to: <strong>Hello, {studentName}</strong></p>
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
      <p>{task.description}</p>
      <p><small>Priority: {task.priority} | Deadline: {task.deadline}</small></p>
      <div style={{ marginTop: '10px' }}>
        <button 
          className="btn btn-success" 
          onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
        >
          {task.completed ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button 
          className="btn btn-danger" 
          onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};