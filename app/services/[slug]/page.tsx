import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer, PageIntro } from "@/components/SiteShell";
import { Deliverables, Faq, SeoBody, SeoCta } from "@/components/SeoSections";
import { servicePages } from "@/lib/seo-content";

export function generateStaticParams(){return servicePages.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=servicePages.find(x=>x.slug===slug);return p?{title:`${p.title} | Betterflow`,description:p.meta,alternates:{canonical:`/services/${p.slug}`}}:{}}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=servicePages.find(x=>x.slug===slug);if(!p)notFound();const schema={"@context":"https://schema.org","@graph":[{"@type":"Service",name:p.title,description:p.meta,provider:{"@type":"ProfessionalService",name:"Betterflow"}},{"@type":"FAQPage",mainEntity:p.faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}]};return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Header/><PageIntro kicker={p.intent} title={p.title.split(' ').slice(0,-2).join(' ')} accent={p.title.split(' ').slice(-2).join(' ')} copy={p.intro}/><Deliverables items={p.deliverables}/><SeoBody sections={p.sections}/><Faq items={p.faqs}/><SeoCta/><Footer/></main>}
