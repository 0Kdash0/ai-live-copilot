# @ai-live-copilot/realtime

独立 Realtime 服务，负责 WebSocket 长连接。

## 当前状态

Phase 0 — 仅提供 `GET /health`，暂未实现真实 WebSocket 业务。

## 开发

```bash
pnpm dev
```

服务启动在 http://localhost:3002

## 健康检查

```
GET http://localhost:3002/health
```

响应：
```json
{ "status": "ok" }
```

## 依赖

- `@ai-live-copilot/contracts` — 共享 API 类型
