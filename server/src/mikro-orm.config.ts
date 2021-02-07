import { MikroORM } from "@mikro-orm/core";
import path from "path";
import Todo from "./entities/Todo";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Todo],
  dbName: "nelson",
  user: "nelson",
  password: "test",
  port: 5400,
  type: "postgresql",
  debug: process.env.NODE_ENV !== "production",
} as Parameters<typeof MikroORM.init>[0];
