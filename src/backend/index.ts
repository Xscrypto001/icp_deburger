import express from 'express';
import bodyParser from 'body-parser';
import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory } from './src/declarations/icp_deburger';

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Initialize DFINITY agent
const agent = new HttpAgent({ host: 'http://localhost:8000' });
const aiDebuggerCanister = Actor.createActor(idlFactory, {
  agent,
  canisterId: 'your_ai_debugger_canister_id',
});

app.post('/debug', async (req, res) => {
  const { code } = req.body;
  
  try {
    const result = await aiDebuggerCanister.debugCode(code);
    res.json(result);
  } catch (error) {
    console.error('Error debugging code:', error);
    res.status(500).json({ error: 'Failed to debug code' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});

