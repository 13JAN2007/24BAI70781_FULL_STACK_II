import React from 'react';
import { TaskList } from './TaskList';

// Intermediate component passing props down
export const TaskSection = ({ tasks, dispatch, studentName }) => {
  return (
    <section>
      <h3>Task List</h3>
      <TaskList tasks={tasks} dispatch={dispatch} studentName={studentName} />
    </section>
  );
};

export default TaskSection;