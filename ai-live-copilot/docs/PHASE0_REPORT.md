# AI Live Copilot — Phase 0 工程骨架完成报告

> 生成时间：2026-09-18
> 阶段：Phase 0 — 工程基础设施
> 状态：✅ 完成

---

## 一、项目概述

**项目名称：** AI Live Copilot

**定位：** 面向抖音主播的商业化 AI 直播助手 SaaS 平台

**当前阶段目标：** 只建立完整的工程骨架，不实现任何业务功能。所有服务可启动、可验证，代码质量工具链就绪。

---

## 二、技术栈

| 层 | 技术 | 版本 | 说明 |
|---|---|---|---|
| Monorepo | pnpm workspace | pnpm 12.x | 统一依赖管理与命令 |
| Web | Next.js | 14.2.x | App Router + TypeScript |
| 前端样式 | Tailwind CSS | 3.4.x | 原子化 CSS |
| API | NestJS | 10.x | RESTful API |
| Realtime | Express | 4.x | 后续扩展 WebSocket |
| Worker | Node.js + tsx | 20.x | 异步任务处理 |
| Database | PostgreSQL | 16-alpine | 主数据库 |
| Cache | Redis | 7-alpine | 缓存 + 队列 |
| 语言 | TypeScript | 5.x | strict mode（所有包） |
| 代码检查 | ESLint | 8.x | 禁止 `any` 滥用 |

---

## 三、最终目录树

```
ai-live-copilot/
├── .env.example                          # 环境变量模板（DATABASE_URL, REDIS_URL, JWT_SECRET）
├── .gitignore                            # Git 忽略配置
├── .npmrc                                # pnpm 配置
├── README.md                             # 项目根 README
├── docker-compose.yml                    # PostgreSQL + Redis（持久化 + 健康检查）
├── package.json                          # 根 package.json（统一命令）
├── pnpm-lock.yaml                        # 依赖锁定
├── pnpm-workspace.yaml                   # pnpm workspace 配置
├── tsconfig.base.json                    # TS strict 基础配置
│
├── apps/
│   ├── web/                              # Next.js 14 + TS + Tailwind
│   │   ├── .eslintrc.cjs
│   │   ├── README.md
│   │   ├── next.config.mjs
│   │   ├── next-env.d.ts
│   │   ├── package.json
│   │   ├── postcss.config.cjs
│   │   ├── tailwind.config.cjs
│   │   ├── tsconfig.json
│   │   └── src/app/
│   │       ├── globals.css               # Tailwind 全局样式
│   │       ├── layout.tsx                # 根布局
│   │       └── page.tsx                  # 基础首页
│   │
│   ├── api/                              # NestJS 10 + TS
│   │   ├── .eslintrc.cjs
│   │   ├── README.md
│   │   ├── nest-cli.json
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.build.json
│   │   └── src/
│   │       ├── app.module.ts             # 根模块
│   │       ├── main.ts                   # 启动入口（:3001）
│   │       └── health/
│   │           ├── health.controller.ts  # GET /health → {"status":"ok"}
│   │           └── health.module.ts
│   │
│   ├── realtime/                         # Express + TS
│   │   ├── .eslintrc.cjs
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── app.module.ts             # health 工具函数
│   │       └── main.ts                   # 启动入口（:3002）GET /health
│   │
│   └── worker/                           # Node.js + TS + tsx
│       ├── .eslintrc.cjs
│       ├── README.md
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           └── main.ts                   # 启动 + 日志 + 优雅退出
│
├── packages/
│   ├── shared/                           # 共享工具
│   │   ├── .eslintrc.cjs
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts
│   │       └── config/env.ts             # 类型安全环境变量解析
│   │
│   └── contracts/                        # API 契约类型
│       ├── .eslintrc.cjs
│       ├── README.md
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts
│           └── health.ts                 # HealthResponse 接口
│
├── infra/
│   ├── docker/.gitkeep
│   └── nginx/.gitkeep
│
├── docs/
│   ├── ARCHITECTURE.md                   # 架构设计
│   ├── DATABASE.md                       # 数据库说明
│   ├── DEVELOPMENT.md                    # 开发指南
│   └── ROADMAP.md                        # 路线图（Phase 0-6）
│
└── scripts/
    └── .gitkeep
```

---

## 四、文件用途说明

### 根配置文件

| 文件 | 用途 |
|------|------|
| `pnpm-workspace.yaml` | 定义 monorepo 工作区，包含 `apps/*` 和 `packages/*` |
| `package.json` | 根 package.json，提供统一命令（dev/build/lint/test/typecheck） |
| `tsconfig.base.json` | 所有子包共享的 TypeScript strict 基础配置 |
| `.env.example` | 环境变量模板，包含 `DATABASE_URL`、`REDIS_URL`、`JWT_SECRET` |
| `.gitignore` | Git 忽略规则（node_modules、dist、.next、.env 等） |
| `.npmrc` | pnpm 配置（auto-install-peers） |
| `docker-compose.yml` | PostgreSQL 16 + Redis 7，含持久化、健康检查、环境变量 |
| `README.md` | 项目根 README |

### apps/web — Next.js 前端

| 文件 | 用途 |
|------|------|
| `src/app/layout.tsx` | 根布局，设置 HTML lang、metadata |
| `src/app/page.tsx` | 基础首页，展示项目名称和 Phase 0 状态 |
| `src/app/globals.css` | Tailwind CSS 全局样式引入 |
| `next.config.mjs` | Next.js 配置，启用 strict mode + transpilePackages |
| `tailwind.config.cjs` | Tailwind 配置，扫描 `src/app/**` |
| `postcss.config.cjs` | PostCSS 配置，加载 Tailwind + Autoprefixer |

### apps/api — NestJS API

| 文件 | 用途 |
|------|------|
| `src/main.ts` | 启动入口，监听 :3001，启用 CORS |
| `src/app.module.ts` | 根模块，导入 HealthModule |
| `src/health/health.controller.ts` | `GET /health` 端点，返回 `{"status":"ok"}` |
| `src/health/health.module.ts` | Health 模块定义 |
| `nest-cli.json` | NestJS CLI 配置 |
| `tsconfig.build.json` | 构建专用 TS 配置 |

### apps/realtime — Realtime 服务

| 文件 | 用途 |
|------|------|
| `src/main.ts` | Express 启动入口，监听 :3002，提供 `GET /health` |
| `src/app.module.ts` | health 响应工具函数 |

### apps/worker — Worker 应用

| 文件 | 用途 |
|------|------|
| `src/main.ts` | 启动入口，输出启动日志，处理 SIGINT/SIGTERM 优雅退出 |

### packages/shared — 共享工具

| 文件 | 用途 |
|------|------|
| `src/config/env.ts` | 类型安全的环境变量解析工具（parseEnvString/Int/Bool） |
| `src/index.ts` | 统一导出 |

### packages/contracts — API 契约

| 文件 | 用途 |
|------|------|
| `src/health.ts` | `HealthResponse` 接口定义，前后端共享 |
| `src/index.ts` | 统一导出 |

### docs — 文档

| 文件 | 用途 |
|------|------|
| `ARCHITECTURE.md` | 架构设计、技术栈、服务通信图、依赖关系 |
| `DATABASE.md` | 数据库连接、Docker Compose 配置、健康检查说明 |
| `DEVELOPMENT.md` | 开发指南、快速开始、统一命令、端口表、代码质量 |
| `ROADMAP.md` | Phase 0-6 路线图 |

---

## 五、Docker Compose 基础设施

### docker-compose.yml 服务

```yaml
services:
  postgres:        # PostgreSQL 16-alpine
    - 端口: 5432
    - 持久化: postgres_data volume
    - 健康检查: pg_isready
    - 环境变量: POSTGRES_USER / POSTGRES_PASSWORD / POSTGRES_DB / POSTGRES_PORT

  redis:          # Redis 7-alpine
    - 端口: 6379
    - 持久化: redis_data volume (appendonly)
    - 健康检查: redis-cli ping
    - 环境变量: REDIS_PORT
```

**安全要求：** 所有密码通过环境变量传入，不硬编码在代码中。

---

## 六、环境变量

### `.env.example`

```env
# ── Database ──
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ai_live_copilot

# ── Redis ──
REDIS_URL=redis://localhost:6379

# ── Auth ──
JWT_SECRET=
```

**说明：** 暂未加入任何真实 API Key。`JWT_SECRET` 留空，后续 Phase 填入。

---

## 七、验证结果

| 检查项 | 状态 | 说明 |
|--------|------|------|
| 依赖安装 | ✅ 通过 | pnpm install 成功，627 个包 |
| PostgreSQL 启动 | ✅ healthy | docker compose ps 状态为 healthy |
| Redis 启动 | ✅ healthy | docker compose ps 状态为 healthy |
| Web (:3000) | ✅ 200 OK | Next.js 页面正常渲染 |
| API /health (:3001) | ✅ `{"status":"ok"}` | NestJS 健康检查端点正常 |
| Lint | ✅ 全部通过 | 6 个 workspace 项目均无 error/warning |
| Typecheck | ✅ 全部通过 | 6 个 workspace 项目 strict mode 通过 |
| Test | ✅ 全部通过 | 6 个项目占位测试通过（Phase 0 无业务测试） |

---

## 八、统一命令

```bash
pnpm dev        # 启动所有服务（开发模式，并行）
pnpm build      # 构建所有包
pnpm lint       # 运行 ESLint
pnpm test       # 运行测试
pnpm typecheck  # TypeScript 类型检查
```

### 单独启动某个服务

```bash
pnpm --filter @ai-live-copilot/web dev       # :3000
pnpm --filter @ai-live-copilot/api dev       # :3001
pnpm --filter @ai-live-copilot/realtime dev  # :3002
pnpm --filter @ai-live-copilot/worker dev
```

---

## 九、服务端口

| 服务 | 端口 | 说明 |
|------|------|------|
| Web (Next.js) | 3000 | 前端界面 |
| API (NestJS) | 3001 | RESTful API |
| Realtime | 3002 | 后续 WebSocket 长连接 |
| PostgreSQL | 5432 | 主数据库 |
| Redis | 6379 | 缓存 + 队列 |

---

## 十、代码质量要求

| 规则 | 实现方式 |
|------|----------|
| TypeScript strict mode | `tsconfig.base.json` 中 `strict: true` + 所有 strict 子选项 |
| 禁止 `any` 滥用 | ESLint `@typescript-eslint/no-explicit-any: error` |
| 禁止硬编码 secret | `.env.example` 模板 + 环境变量注入 Docker Compose |
| 数据库连接不写死在业务代码 | 通过 `DATABASE_URL` 环境变量配置 |
| 不允许跨 app 直接修改另一个 app 内部代码 | monorepo 包边界隔离 |
| 共享类型放 packages/contracts | `HealthResponse` 等契约类型 |
| 共享工具放 packages/shared | `parseEnvString` 等工具函数 |
| 所有服务必须有清晰 README | 每个 app 和 package 均有 README.md |

---

## 十一、完整启动命令

```bash
# 1. 安装依赖
pnpm install

# 2. 复制环境变量
cp .env.example .env

# 3. 启动 PostgreSQL + Redis
docker compose up -d postgres redis

# 4. 构建共享包（首次）
pnpm --filter @ai-live-copilot/contracts build
pnpm --filter @ai-live-copilot/shared build

# 5. 启动所有服务（开发模式）
pnpm dev

# 6. 验证健康检查
curl http://localhost:3001/health    # API
curl http://localhost:3002/health    # Realtime
# Web 浏览器访问 http://localhost:3000

# 7. 质量检查
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

---

## 十二、当前未完成事项

以下事项属于 Phase 0 范围之外，将在后续 Phase 逐步实现：

| 事项 | 计划 Phase |
|------|------------|
| 用户注册 / 登录 + JWT 认证 | Phase 1 |
| 数据库 schema 设计 + ORM 集成 | Phase 1 |
| 数据库迁移系统 | Phase 1 |
| Redis session 管理 | Phase 1 |
| 抖音 OpenAPI 对接 | Phase 2 |
| 弹幕实时接收 | Phase 2 |
| WebSocket 长连接实现 | Phase 2 |
| AI 对话引擎（LLM 接入） | Phase 3 |
| 弹幕自动回复 | Phase 3 |
| 直播话术生成 | Phase 3 |
| 商品库管理 | Phase 4 |
| 商品话术关联 | Phase 4 |
| 订单数据看板 | Phase 4 |
| 支付集成 | Phase 4 |
| 多租户管理 | Phase 5 |
| 套餐与配额管理 | Phase 5 |
| 运营数据看板 | Phase 5 |
| 权限管理 | Phase 5 |
| Nginx 反向代理 | Phase 6 |
| CI/CD 流水线 | Phase 6 |
| 监控与告警 | Phase 6 |
| 日志收集 | Phase 6 |
| 性能优化 | Phase 6 |
| 安全加固 | Phase 6 |
| 测试用例编写（当前为占位） | Phase 1+ |

### 已知问题

| 问题 | 影响 | 解决方案 |
|------|------|----------|
| pnpm `ERR_PNPM_IGNORED_BUILDS` | 无功能影响 | 在交互终端执行 `pnpm approve-builds` 批准 `@nestjs/core`、`esbuild`、`unrs-resolver` 的 build scripts |

---

## 十三、Phase 路线图

| Phase | 目标 | 状态 |
|-------|------|------|
| Phase 0 | 工程骨架 | ✅ 完成 |
| Phase 1 | 认证与用户系统 | 待开始 |
| Phase 2 | 抖音直播集成 | 待开始 |
| Phase 3 | AI 能力 | 待开始 |
| Phase 4 | 商品与商业化 | 待开始 |
| Phase 5 | 管理后台 | 待开始 |
| Phase 6 | 生产化 | 待开始 |

---

## 附录：项目文件统计

| 类别 | 文件数 |
|------|--------|
| 根配置 | 8 |
| apps/web | 11 |
| apps/api | 10 |
| apps/realtime | 7 |
| apps/worker | 6 |
| packages/shared | 6 |
| packages/contracts | 6 |
| infra | 2 (.gitkeep) |
| docs | 4 |
| scripts | 1 (.gitkeep) |
| **总计** | **61** |

---

*AI Live Copilot — Phase 0 工程骨架完成报告*
