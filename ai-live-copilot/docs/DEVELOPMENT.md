# Development

## 前置条件

| 工具 | 版本要求 |
|---|---|
| Node.js | >= 20.0.0 |
| pnpm | >= 9.0.0 |
| Docker | 最新稳定版 |

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

```bash
cp .env.example .env
# 编辑 .env 填入真实值
```

### 3. 启动基础设施

```bash
docker compose up -d postgres redis
```

验证：
```bash
docker compose ps
```

### 4. 启动所有服务

```bash
pnpm dev
```

### 5. 验证健康检查

```bash
# API
curl http://localhost:3001/health
# 预期: {"status":"ok"}

# Realtime
curl http://localhost:3002/health
# 预期: {"status":"ok"}
```

### 6. 访问 Web

打开浏览器访问 http://localhost:3000

## 统一命令

```bash
pnpm dev        # 启动所有服务（开发模式）
pnpm build      # 构建所有包
pnpm lint       # 运行 ESLint
pnpm test       # 运行测试
pnpm typecheck  # TypeScript 类型检查
```

## 单独启动某个服务

```bash
pnpm --filter @ai-live-copilot/web dev
pnpm --filter @ai-live-copilot/api dev
pnpm --filter @ai-live-copilot/realtime dev
pnpm --filter @ai-live-copilot/worker dev
```

## 服务端口

| 服务 | 端口 |
|---|---|
| Web (Next.js) | 3000 |
| API (NestJS) | 3001 |
| Realtime | 3002 |
| PostgreSQL | 5432 |
| Redis | 6379 |

## 代码质量

- TypeScript strict mode（所有包）
- 禁止 `any`（ESLint `@typescript-eslint/no-explicit-any: error`）
- 禁止硬编码 secret
- 数据库连接通过环境变量注入

## 目录约定

- 共享类型 → `packages/contracts`
- 共享工具 → `packages/shared`
- 不允许跨 app 直接修改另一个 app 内部代码
