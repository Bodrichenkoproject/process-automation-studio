import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer, PageIntro } from "@/components/SiteShell";
import { articles, igorArticleSlugs } from "@/lib/seo-content";
export const metadata:Metadata={title:"Business Process Automation Insights | Betterflow",description:"Practical guides on business process automation, BPMN process mapping, AI workflow automation and operational improvement.",alternates:{canonical:"/insights"}};
export default function Insights(){return <main><Header/><PageIntro kicker="INSIGHTS BY JANE & IGOR" title="Practical thinking for" accent="better business systems." copy="Jane writes about process, product and operations. Igor writes about AI automation, integrations and development. Every guide connects business decisions to real implementation."/><section className="article-list">{articles.map((a,i)=>{const byIgor=igorArticleSlugs.has(a.slug);return <Link href={`/insights/${a.slug}`} key={a.slug}><div><span>{String(i+1).padStart(2,'0')}</span><span>{a.read}</span></div><h2>{a.title}</h2><p><b>By {byIgor?"Igor":"Jane"} Bodrichenko</b><br/>{a.excerpt}</p><ArrowUpRight/></Link>})}</section><Footer/></main>}
