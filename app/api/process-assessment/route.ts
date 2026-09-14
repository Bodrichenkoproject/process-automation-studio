import { assessmentSchema } from "@/lib/process-assessment";
import { saveProcessAssessment } from "@/lib/lead-store";
export async function POST(request:Request){
 const origin=request.headers.get("origin");
 if(origin && origin!==new URL(request.url).origin)return Response.json({error:"Please submit from this website."},{status:403});
 try {
  const raw=await request.text();
  if(raw.length>24000)return Response.json({error:"Your submission is too long. Please shorten the description."},{status:413});
  const parsed=assessmentSchema.safeParse(JSON.parse(raw));
  if(!parsed.success)return Response.json({error:parsed.error.issues[0]?.message||"Please check your details."},{status:400});
  await saveProcessAssessment(parsed.data);
  return Response.json({saved:true},{headers:{"Cache-Control":"no-store"}});
 }catch(error){
  if(error instanceof SyntaxError)return Response.json({error:"Invalid submission."},{status:400});
  console.error("Process assessment could not be saved");
  return Response.json({error:"We couldn’t save your request. Your details are still here — please try again."},{status:503});
 }
}
