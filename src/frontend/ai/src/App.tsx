import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>AI Debugger</h1>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/debugger">AI Debugger</Link>
    </div>
  );
};

export default App;

