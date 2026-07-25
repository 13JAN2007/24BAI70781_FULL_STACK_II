import React from 'react';
import { TaskSection } from '../components/TaskSection';

export const Dashboard = ({ user, tasks, dispatch }) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div>
      <h1>Welcome back, {user?.name || 'Student'}!</h1>
      
      <div className="stats-container">
        <div className="stat-box"><h2>{total}</h2><p>Total Tasks</p></div>
        <div className="stat-box"><h2>{completed}</h2><p>Completed Tasks</p></div>
        <div className="stat-box"><h2>{pending}</h2><p>Pending Tasks</p></div>
      </div>

      {/* Demonstrating Part B: Prop Drilling chain App -> Dashboard -> TaskSection -> TaskList -> TaskCard */}
      <TaskSection tasks={tasks} dispatch={dispatch} studentName={user?.name || 'Akash'} />
    </div>
  );
};