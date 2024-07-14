import React, { useState } from 'react';
import axios from 'axios';

const AIDebugger: React.FC = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleDebug = async () => {
    const response = await axios.post('http://localhost:5000/debug', { code });
    setResult(response.data);
  };

  const handleClear = async () => {
    await axios.post('http://localhost:5000/clear');
    setCode('');
    setResult(null);
  };

  return (
    <div className="AIDebugger">
      <h2>AI Debugger</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      ></textarea>
      <button onClick={handleDebug}>Debug</button>
      <button onClick={handleClear}>Clear</button>
      {result && (
        <div className="results">
          <h3>Package Errors</h3>
          <pre>{JSON.stringify(result.packageErrors, null, 2)}</pre>
          <h3>File Errors</h3>
          <pre>{JSON.stringify(result.fileErrors, null, 2)}</pre>
          <h3>Dependencies</h3>
          <pre>{JSON.stringify(result.dependencies, null, 2)}</pre>
          <h3>Suggestions</h3>
          <pre>{JSON.stringify(result.suggestions, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AIDebugger;

