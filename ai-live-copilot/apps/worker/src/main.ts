function start(): void {
  const now = new Date().toISOString();
  console.log(`[${now}] Worker service started`);
  console.log(`[${now}] Status: idle — no jobs configured (Phase 0)`);

  // Phase 0: 仅保持进程运行
  // 后续 Phase 将接入队列消费者
  process.on('SIGINT', () => {
    console.log(`[${new Date().toISOString()}] Worker received SIGINT, shutting down...`);
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log(`[${new Date().toISOString()}] Worker received SIGTERM, shutting down...`);
    process.exit(0);
  });
}

start();
