# Database

## 概述

AI Live Copilot 使用 PostgreSQL 16 作为主数据库。

## 连接

通过环境变量 `DATABASE_URL` 配置连接：

```
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
```

默认值（开发环境）：

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ai_live_copilot
```

## Docker Compose

PostgreSQL 通过 `docker-compose.yml` 运行：

```bash
docker compose up -d postgres
```

### 配置项

| 环境变量 | 默认值 | 说明 |
|---|---|---|
| `POSTGRES_USER` | `postgres` | 数据库用户 |
| `POSTGRES_PASSWORD` | `postgres` | 数据库密码 |
| `POSTGRES_DB` | `ai_live_copilot` | 数据库名 |
| `POSTGRES_PORT` | `5432` | 宿主机映射端口 |

### 数据持久化

PostgreSQL 数据存储在 Docker volume `postgres_data` 中。

## 健康检查

```bash
docker compose ps
```

PostgreSQL 健康检查使用 `pg_isready` 命令。

## 当前阶段 (Phase 0)

- 无数据库 schema
- 无 ORM 配置
- 无迁移文件

后续 Phase 将添加：
- ORM (Prisma / TypeORM)
- Schema 迁移
- 种子数据
