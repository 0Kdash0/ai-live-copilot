# @ai-live-copilot/api

NestJS 后端 API 服务。

## 技术栈

- NestJS 10
- TypeScript (strict mode)
- ESLint

## 开发

```bash
pnpm dev
```

服务启动在 http://localhost:3001

## 健康检查

```
GET http://localhost:3001/health
```

响应：
```json
{ "status": "ok" }
```

## 依赖

- `@ai-live-copilot/contracts` — 共享 API 类型
