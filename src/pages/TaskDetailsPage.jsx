<!-- TaskDetailsPage.jsx -->
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TaskDetailsPage() {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    // Call API to get task by id
    const task = {
      id: 1,
      title: 'Task 1',
      deadline: '2024-09-16',
      description: 'This is task 1',
    };
    setTask(task);
  }, [id]);

  return (
    <div>
      <h1>Task Details</h1>
      <p>Task Title: {task.title}</p>
      <p>Deadline: {task.deadline}</p>
      <p>Description: {task.description}</p>
    </div>
  );
}

export default TaskDetailsPage;
