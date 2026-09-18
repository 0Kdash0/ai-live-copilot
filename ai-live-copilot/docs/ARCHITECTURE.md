# Architecture

## 概述

AI Live Copilot 是一个面向抖音主播的商业化 AI 直播助手 SaaS 平台。采用 pnpm monorepo 架构，前后端分离 + 微服务化设计。

## 技术栈

| 层 | 技术 | 说明 |
|---|---|---|
| Web | Next.js 14 (App Router) + Tailwind CSS | 前端 SPA |
| API | NestJS 10 | RESTful API |
| Realtime | Express (后续 WebSocket) | 长连接服务 |
| Worker | Node.js (tsx) | 异步任务处理 |
| Database | PostgreSQL 16 | 主数据库 |
| Cache | Redis 7 | 缓存 + 队列 |

## Monorepo 结构

```
ai-live-copilot/
├── apps/
│   ├── web/        — Next.js 前端 (:3000)
│   ├── api/        — NestJS API (:3001)
│   ├── realtime/   — Realtime 服务 (:3002)
│   └── worker/     — Worker 应用
├── packages/
│   ├── shared/     — 共享工具函数
│   └── contracts/  — API 契约/DTO 类型
├── infra/
│   ├── docker/     — Docker 相关配置
│   └── nginx/     — Nginx 配置
├── docs/           — 项目文档
├── scripts/        — 脚本工具
├── docker-compose.yml
└── pnpm-workspace.yaml
```

## 服务通信

```
┌─────────┐    HTTP/REST    ┌─────┐
│  Web    │ ────────────── │ API │
│(Next.js)│                 │(Nest)│
└─────────┘                 └─────┘
                               │
                    ┌───────────┤
                    │           │
              ┌─────┴───┐  ┌───┴──────┐
              │PostgreSQL│  │  Redis   │
              └─────────┘  └──────────┘
                                  │
                            ┌─────┴────┐
                            │  Worker  │
                            └──────────┘

┌──────────┐
│ Realtime │  (后续 WebSocket 长连接)
└──────────┘
```

## 依赖关系

- `apps/web` → `packages/contracts`
- `apps/api` → `packages/contracts`
- `apps/realtime` → `packages/contracts`
- 所有 apps 可选 → `packages/shared`

## 环境变量管理

- `.env.example` 提供模板
- 复制为 `.env` 后填入真实值
- 密码通过环境变量传入 Docker Compose，不硬编码

## 当前阶段 (Phase 0)

只建立工程骨架：
- 所有 apps 可启动
- API 和 Realtime 提供 `/health`
- Worker 可启动 + 日志
- PostgreSQL + Redis 通过 Docker Compose 运行
- 无任何业务功能
