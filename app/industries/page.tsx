import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Header, Footer, PageIntro } from "@/components/SiteShell";
import { industries } from "@/lib/content";
export const metadata:Metadata={title:"Business Process Automation by Industry | Betterflow",description:"Industry-specific workflow automation for fintech, trading, professional services, marketplaces, education, experts and social media teams.",alternates:{canonical:"/industries"}};

export default function Industries(){return <main><Header/><PageIntro kicker="INDUSTRY PROCESS AUTOMATION" title="We learn the business." accent="Not just the brief." copy="Business process automation only works when it reflects the industry, customer lifecycle and operational risk. Explore workflows, use cases and relevant experience for the sectors we know."/><section className="industry-stories">{industries.map((x)=><article key={x.slug} className={`industry-story ${x.color}`}><div className="industry-top"><span>{x.index}</span><span className="eyebrow">{x.title}</span></div><h2>{x.story}</h2><p>{x.work}</p><div className="mini-cases">{x.cases.map(c=><span key={c}>{c}</span>)}</div><Link href={`/industries/${x.slug}`}>Explore {x.title} automation <ArrowUpRight/></Link></article>)}</section><Footer/></main>}
