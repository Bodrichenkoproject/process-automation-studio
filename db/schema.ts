import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const automationLeads=sqliteTable("automation_leads",{
 id:text("id").primaryKey(),email:text("email").notNull(),answers:text("answers").notNull(),score:integer("score").notNull(),consentVersion:text("consent_version").notNull(),createdAt:text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`)
});
export const processAssessments=sqliteTable("process_assessments",{
 id:text("id").primaryKey(),name:text("name").notNull(),email:text("email").notNull(),company:text("company").notNull(),process:text("process").notNull(),tools:text("tools").notNull(),people:text("people").notNull(),outcome:text("outcome").notNull(),createdAt:text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`)
});
