import React, { useState } from 'react';
import axios from 'axios';

const Debugger = () => {
  const [code, setCode] = useState('');
  const [debugResult, setDebugResult] = useState('');

  const handleDebug = async () => {
    try {
      const response = await axios.post('http://localhost:5000/debug', { code });
      setDebugResult(response.data);
    } catch (error) {
      console.error('Error debugging code:', error);
    }
  };

  return (
    <div>
      <h2>AI Debugger</h2>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleDebug}>Debug</button>
      <div>
        <pre>{JSON.stringify(debugResult, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Debugger;

