import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";

export const User = sqliteTable("User", {
  id: text("id").notNull().primaryKey(),
});

export const userInsertSchema = createInsertSchema(User);
