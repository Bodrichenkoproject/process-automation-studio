CREATE TABLE `automation_leads` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`answers` text NOT NULL,
	`score` integer NOT NULL,
	`consent_version` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
