import express from 'express';
import type { HealthResponse } from '@ai-live-copilot/contracts';
import { healthResponse } from './app.module.js';

const app = express();

app.get('/health', (_req, res) => {
  const body: HealthResponse = healthResponse();
  res.json(body);
});

const port = process.env.REALTIME_PORT
  ? parseInt(process.env.REALTIME_PORT, 10)
  : 3002;

app.listen(port, () => {
  console.log(`Realtime service is running on http://localhost:${port}`);
});
