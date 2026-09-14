import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer, PageIntro } from "@/components/SiteShell";
import { SeoCta } from "@/components/SeoSections";
import { industrySeo } from "@/lib/seo-content";

export function generateStaticParams(){return industrySeo.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=industrySeo.find(x=>x.slug===slug);return p?{title:`${p.title} | Betterflow`,description:p.meta,alternates:{canonical:`/industries/${p.slug}`}}:{}}
export default async function IndustryPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=industrySeo.find(x=>x.slug===slug);if(!p)notFound();return <main><Header/><PageIntro kicker="INDUSTRY AUTOMATION" title={p.title.split(' ').slice(0,-2).join(' ')} accent={p.title.split(' ').slice(-2).join(' ')} copy={p.intro}/><section className="industry-seo-problems"><div><span className="eyebrow">PROCESSES WE IMPROVE</span><h2>Where manual work<br/><em>usually hides.</em></h2></div><div className="problem-list">{p.problems.map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></section><section className="industry-proof"><span className="eyebrow">RELEVANT EXPERIENCE</span><h2>{p.proof}</h2><div><Link href="/services/ai-workflow-automation">Explore AI workflow automation <ArrowUpRight/></Link><Link href="/case-studies">View related case studies <ArrowUpRight/></Link></div></section><SeoCta/><Footer/></main>}
