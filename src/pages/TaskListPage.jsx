<!-- TaskListPage.jsx -->
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TaskListPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Call API to get tasks
    const tasks = [
      { id: 1, title: 'Task 1', deadline: '2024-09-16' },
      { id: 2, title: 'Task 2', deadline: '2024-09-17' },
      { id: 3, title: 'Task 3', deadline: '2024-09-18' },
    ];
    setTasks(tasks);
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.deadline}</td>
              <td>
                <Link to={`/tasks/${task.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskListPage;
