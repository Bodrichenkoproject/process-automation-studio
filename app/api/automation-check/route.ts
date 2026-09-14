import { getQuizResult, questions } from "@/lib/automation-quiz";
import { saveAutomationLead } from "@/lib/lead-store";
export async function POST(request:Request){
 const origin=request.headers.get("origin");
 if(origin && origin!==new URL(request.url).origin) return Response.json({error:"Please submit from this website."},{status:403});
 try {
  const raw=await request.text();
  if(raw.length>4096) return Response.json({error:"Submission is too large."},{status:413});
  const body=JSON.parse(raw);
  if(typeof body.email!=="string"||body.email.length>254||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())||body.consent!==true||typeof body.id!=="string"||! /^[0-9a-f-]{36}$/i.test(body.id)||body.website||!Array.isArray(body.answers)||body.answers.length!==questions.length||!body.answers.every((v:unknown)=>Number.isInteger(v)&&Number(v)>=0&&Number(v)<=3)) return Response.json({error:"Check your email and complete all questions and the consent box."},{status:400});
  const result=getQuizResult(body.answers);
  await saveAutomationLead(body.id,body.email.trim().toLowerCase(),body.answers,result.score);
  return Response.json({result},{headers:{"Cache-Control":"no-store"}});
 } catch(error){
  if(error instanceof SyntaxError) return Response.json({error:"Invalid submission."},{status:400});
  console.error("Automation assessment could not be saved");
  return Response.json({error:"We couldn’t save your assessment. Your answers are still here — please try again."},{status:503});
 }
}
