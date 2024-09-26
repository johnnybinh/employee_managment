import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import sqlite from "better-sqlite3";

const db = sqlite();

const adapter = new BetterSqlite3Adapter(db, {
  user: "user",
  session: "session",
});
