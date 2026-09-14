import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { SeoSection } from "@/lib/seo-content";

export function Deliverables({items}:{items:string[]}){return <section className="seo-deliverables"><span className="eyebrow">WHAT YOU RECEIVE</span><div>{items.map((item,i)=><article key={item}><span>0{i+1}</span><Check size={18}/><strong>{item}</strong></article>)}</div></section>}

export function SeoBody({sections}:{sections:SeoSection[]}){return <section className="seo-body">{sections.map((s,i)=><article key={s.heading}><div className="seo-body-index">0{i+1}</div><div><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}{s.bullets&&<ul>{s.bullets.map(x=><li key={x}><span>↗</span>{x}</li>)}</ul>}</div></article>)}</section>}

export function Faq({items}:{items:string[][]}){return <section className="faq"><span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>Useful questions,<br/><em>clear answers.</em></h2><div>{items.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>}

export function SeoCta(){return <section className="seo-cta"><span className="eyebrow">START WITH THE REAL WORKFLOW</span><h2>Not sure what<br/>to automate first?</h2><p>Show us the process that consumes the most time, creates the most errors or slows customers down. We will identify the clearest path to improvement.</p><Link href="/process-assessment">Request a process assessment <ArrowUpRight/></Link></section>}
