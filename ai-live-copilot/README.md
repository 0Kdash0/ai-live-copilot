# AI Live Copilot

面向抖音主播的商业化 AI 直播助手 SaaS。

## 当前阶段

**Phase 0 — 工程骨架**

仅建立完整的工程基础设施，不包含任何业务功能。

## 技术栈

- **Monorepo:** pnpm workspace
- **Web:** Next.js 14 + TypeScript + Tailwind CSS
- **API:** NestJS 10 + TypeScript
- **Realtime:** Express + TypeScript（后续 WebSocket）
- **Worker:** Node.js + TypeScript
- **Database:** PostgreSQL 16
- **Cache:** Redis 7

## 快速开始

### 前置条件

- Node.js >= 20
- pnpm >= 9
- Docker

### 安装

```bash
pnpm install
```

### 启动基础设施

```bash
docker compose up -d postgres redis
```

### 开发

```bash
pnpm dev
```

## 命令

| 命令 | 说明 |
|---|---|
| `pnpm dev` | 启动所有服务（开发模式） |
| `pnpm build` | 构建所有包 |
| `pnpm lint` | 运行 ESLint |
| `pnpm test` | 运行测试 |
| `pnpm typecheck` | TypeScript 类型检查 |

## 项目结构

```
ai-live-copilot/
├── apps/
│   ├── web/        — Next.js 前端 (:3000)
│   ├── api/        — NestJS API (:3001)
│   ├── realtime/   — Realtime 服务 (:3002)
│   └── worker/     — Worker 应用
├── packages/
│   ├── shared/     — 共享工具
│   └── contracts/  — API 契约类型
├── infra/
│   ├── docker/
│   └── nginx/
├── docs/
├── docker-compose.yml
└── pnpm-workspace.yaml
```

## 文档

- [架构设计](docs/ARCHITECTURE.md)
- [数据库](docs/DATABASE.md)
- [开发指南](docs/DEVELOPMENT.md)
- [路线图](docs/ROADMAP.md)

## License

UNLICENSED
