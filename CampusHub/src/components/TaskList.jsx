import React from 'react';
import { TaskCard } from './TaskCard';

export const TaskList = ({ tasks, dispatch, studentName }) => {
  if (tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <div className="grid">
      {tasks.map((task) => (
        <TaskCard 
          key={task.id} 
          task={task} 
          dispatch={dispatch} 
          studentName={studentName} 
        />
      ))}
    </div>
  );
};