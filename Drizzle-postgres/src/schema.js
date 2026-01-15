import { pgTable,
  serial,
  text,
  integer,
  varchar,
  index,
  uniqueIndex,
  check, } from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 150 }).notNull().unique(),
  age: integer("age").notNull(), // used for CHECK
  status: text("status").default("active"), // DEFAULT

 }, 
  (table) => ({
    // CHECK constraint
    ageCheck: check("age_check", sql`${table.age} >= 18`),

    // INDEX
    nameIndex: index("idx_users_name").on(table.name),

    // UNIQUE INDEX (faster search + no duplicates)
    emailUniqueIndex: uniqueIndex("idx_users_email").on(table.email),
  })
);