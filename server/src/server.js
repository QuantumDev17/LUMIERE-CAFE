import { env } from './config/env.js';
import app from './app.js';
import { prisma } from './prisma.js';

const server = app.listen(env.PORT, () => {
  console.log(`API listening on http://localhost:${env.PORT}`);
});

async function shutdown(code = 0) {
  try { await prisma.$disconnect(); } catch {}
  server.close(() => process.exit(code));
}
process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
