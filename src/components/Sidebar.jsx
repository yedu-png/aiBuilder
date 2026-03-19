<!-- Sidebar.jsx -->
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/tasks">Tasks</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default Sidebar;
