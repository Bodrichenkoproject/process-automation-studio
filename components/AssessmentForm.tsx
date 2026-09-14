"use client";
import { useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
export default function AssessmentForm(){
 const [busy,setBusy]=useState(false),[error,setError]=useState(""),[saved,setSaved]=useState(false);
 const id=useRef(""),inFlight=useRef(false);
 async function submit(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();if(inFlight.current)return;
  const values=Object.fromEntries(new FormData(event.currentTarget));
  inFlight.current=true;setBusy(true);setError("");
  try{
   if(!id.current){const bytes=crypto.getRandomValues(new Uint8Array(16));bytes[6]=(bytes[6]&15)|64;bytes[8]=(bytes[8]&63)|128;id.current=Array.from(bytes,v=>v.toString(16).padStart(2,"0")).join("").replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/,"$1-$2-$3-$4-$5");}
   const response=await fetch("/api/process-assessment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...values,id:id.current}),signal:AbortSignal.timeout(20000)});
   const data=await response.json();if(!response.ok||data.saved!==true)throw new Error(data.error||"Please try again.");setSaved(true);
  }catch(e){setError(e instanceof Error&&e.name!=="TimeoutError"?e.message:"Saving took too long. Your details are still here — please try again.");}
  finally{inFlight.current=false;setBusy(false);}
 }
 return <div>{saved?<div className="assessment-success" role="status"><Check size={32}/><h2>We’ve received your process.</h2><p>Your request has been saved. Our team can review the details and contact you at the email you provided.</p></div>:<form className="assessment-form" onSubmit={submit} aria-busy={busy}>
 <label>Your name *<input name="name" placeholder="Name" autoComplete="name" maxLength={160} required readOnly={busy}/></label>
 <label>Your email *<input name="email" type="email" placeholder="you@company.com" autoComplete="email" maxLength={254} required readOnly={busy}/></label>
 <label className="wide">Company and industry<input name="company" placeholder="What do you do?" maxLength={300} readOnly={busy}/></label>
 <label className="wide">Which process feels too manual or difficult? *<textarea name="process" placeholder="Walk us through what happens today..." rows={5} maxLength={6000} required readOnly={busy}/></label>
 <label>Tools involved<input name="tools" placeholder="CRM, spreadsheets, email..." maxLength={1000} readOnly={busy}/></label>
 <label>People involved<input name="people" placeholder="Teams or roles" maxLength={1000} readOnly={busy}/></label>
 <label className="wide">What would a better result look like?<textarea name="outcome" placeholder="Time saved, fewer errors, faster delivery..." rows={3} maxLength={6000} readOnly={busy}/></label>
 <div className="quiz-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
 <p className="wide assessment-notice">By submitting, you agree that Betterflow may store these details and contact you about your request. This does not subscribe you to marketing emails.</p>
 {error&&<p className="wide quiz-error" role="alert">{error}</p>}
 <button type="submit" disabled={busy}>{busy?"Saving your request…":"Send the process"}<ArrowUpRight/></button>
 </form>}</div>;
}
