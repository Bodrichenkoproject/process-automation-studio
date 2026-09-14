import { z } from "zod";
export const assessmentSchema = z.object({
 id:z.string().uuid(),name:z.string().trim().min(1,"Please enter your name.").max(160),
 email:z.string().trim().email("Please enter a valid email.").max(254).transform(s=>s.toLowerCase()),
 company:z.string().trim().max(300).default(""),
 process:z.string().trim().min(1,"Please describe the process.").max(6000),
 tools:z.string().trim().max(1000).default(""),people:z.string().trim().max(1000).default(""),
 outcome:z.string().trim().max(6000).default(""),website:z.literal("").optional()
});
export type AssessmentSubmission=z.infer<typeof assessmentSchema>;
