CREATE TABLE `process_assessments` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`company` text NOT NULL,
	`process` text NOT NULL,
	`tools` text NOT NULL,
	`people` text NOT NULL,
	`outcome` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
