import { Router } from 'express';
const r = Router();

r.get('/', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

export default r;
