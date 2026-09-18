# Roadmap

## Phase 0 — 工程骨架 ✅

**目标：** 建立完整的工程基础设施，不实现任何业务功能。

- [x] pnpm monorepo 结构
- [x] Next.js + TypeScript + Tailwind 前端（基础首页）
- [x] NestJS API（`GET /health`）
- [x] Realtime service（`GET /health`）
- [x] Worker 应用（启动 + 日志）
- [x] PostgreSQL (Docker Compose)
- [x] Redis (Docker Compose)
- [x] 环境变量模板（`.env.example`）
- [x] 项目文档（ARCHITECTURE / DATABASE / DEVELOPMENT / ROADMAP）
- [x] 统一命令（dev / build / lint / test / typecheck）
- [x] TypeScript strict mode
- [x] ESLint 配置

## Phase 1 — 认证与用户系统

- [ ] 用户注册 / 登录
- [ ] JWT 认证
- [ ] 数据库 schema 设计 + ORM 集成
- [ ] 数据库迁移系统
- [ ] Redis session 管理

## Phase 2 — 抖音直播集成

- [ ] 抖音 OpenAPI 对接
- [ ] 直播间信息获取
- [ ] 弹幕实时接收（WebSocket）
- [ ] 实时服务 WebSocket 推送

## Phase 3 — AI 能力

- [ ] AI 对话引擎（LLM 接入）
- [ ] 弹幕自动回复
- [ ] 直播话术生成
- [ ] 话术模板管理

## Phase 4 — 商品与商业化

- [ ] 商品库管理
- [ ] 商品话术关联
- [ ] 订单数据看板
- [ ] 支付集成

## Phase 5 — 管理后台

- [ ] 多租户管理
- [ ] 套餐与配额管理
- [ ] 运营数据看板
- [ ] 权限管理

## Phase 6 — 生产化

- [ ] Nginx 反向代理
- [ ] CI/CD 流水线
- [ ] 监控与告警
- [ ] 日志收集
- [ ] 性能优化
- [ ] 安全加固
