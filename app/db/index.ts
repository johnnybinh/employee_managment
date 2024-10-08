import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { userTable } from "./schemas";

const sqlite = new Database("db.sqlite3");
export const db = drizzle(sqlite, { schema: { userTable } });
