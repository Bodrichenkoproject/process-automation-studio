import { env } from "cloudflare:workers";
export async function saveAutomationLead(id:string,email:string,answers:number[],score:number){
 if(!env.DB) throw new Error("Lead storage unavailable");
 await env.DB.prepare("INSERT INTO automation_leads (id,email,answers,score,consent_version) VALUES (?,?,?,?,?) ON CONFLICT(id) DO NOTHING").bind(id,email,JSON.stringify(answers),score,"automation-check-v1").run();
}
export async function saveProcessAssessment(data:import("./process-assessment").AssessmentSubmission){
 if(!env.DB) throw new Error("Lead storage unavailable");
 await env.DB.prepare("INSERT INTO process_assessments (id,name,email,company,process,tools,people,outcome) VALUES (?,?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING").bind(data.id,data.name,data.email,data.company,data.process,data.tools,data.people,data.outcome).run();
}
