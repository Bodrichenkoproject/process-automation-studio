import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer } from "@/components/SiteShell";
export const metadata:Metadata={title:"Jane & Igor Bodrichenko | Process and AI Automation Experts",description:"Meet Jane and Igor Bodrichenko: senior product, delivery, business process, AI automation and full-stack development expertise in one accountable team.",alternates:{canonical:"/about"}};

export default function About(){return <main><Header/>
  <section className="about-hero">
    <div className="about-hero-copy"><span className="eyebrow">THE PEOPLE BEHIND THE PROCESS</span><h1>Two disciplines.<br/><em>One accountable team.</em></h1><p>Jane makes complex work visible. Igor turns the better version into technology. Together, we take a process from operational chaos to a system your team can own.</p><div className="about-hero-signals"><span>PROCESS STRATEGY</span><i/><span>AI & AUTOMATION</span><i/><span>PRODUCT DELIVERY</span></div></div>
    <div className="about-hero-visual"><div className="about-hero-orbit" aria-hidden="true"/><img src="/jane-igor-team.webp?v=2" alt="Jane and Igor Bodrichenko, founders of Betterflow" width="1080" height="1350" loading="eager" fetchPriority="high"/><div className="founder-stamp"><span>BUILT BY THE PEOPLE</span><strong>WHO STAY TO DELIVER</strong></div></div>
  </section>
  <section className="about-story">
    <article className="expert-profile jane-profile">
      <div className="expert-photo"><img src="/jane-bodrichenko.webp?v=2" alt="Jane Bodrichenko, product, process and delivery expert" width="900" height="1100" loading="lazy"/><span>STRATEGY<br/>TO CLARITY</span><b>01</b></div>
      <div className="expert-copy"><span>01 / PRODUCT, PROCESS & DELIVERY</span>
      <div className="about-role">THE ONE WHO FINDS THE LOGIC</div><h2>Jane</h2>
      <p className="about-lead">Jane does not deliver roadmaps that sit in a folder. She turns ambitious, complex businesses into products, processes and delivery systems that actually move.</p>
      <p>Across 11+ years in product, project and delivery leadership, she has worked with startups, agencies and enterprise teams in FinTech, Forex, iGaming, Web3, SaaS, healthcare and education. Her edge is seeing the whole operating system: customer journey, commercial goal, people, data, technology and the invisible decisions connecting them.</p>
      <p>Jane maps the real As-Is process, challenges the parts that no longer serve the business and designs the To-Be workflow around clear ownership and measurable outcomes. Her work has contributed to $5M+ in client revenue, 80%+ client retention, delivery timelines reduced by up to 20% and operational costs reduced by up to 25%.</p>
      <div className="about-proof"><div><strong>11+</strong><span>years in product and delivery</span></div><div><strong>200+</strong><span>project and delivery engagements</span></div><div><strong>$5M+</strong><span>client revenue generated</span></div><div><strong>55%</strong><span>fewer escalations in redesigned operations</span></div></div>
      <a className="profile-link" href="https://www.linkedin.com/in/jane-bodrichenko-58862a130" target="_blank" rel="noreferrer">Meet Jane on LinkedIn <ArrowUpRight size={17}/></a>
      </div>
    </article>
    <article className="expert-profile igor-profile">
      <div className="expert-photo"><img src="/igor-bodrichenko.webp?v=2" alt="Igor Bodrichenko, AI automation and full-stack development expert" width="900" height="1100" loading="lazy"/><span>LOGIC<br/>TO SOFTWARE</span><b>02</b></div>
      <div className="expert-copy"><span>02 / AI, AUTOMATION & DEVELOPMENT</span>
      <div className="about-role">THE ONE WHO MAKES IT REAL</div><h2>Igor</h2>
      <p className="about-lead">Igor builds the part that has to work after the strategy meeting ends: reliable products, connected systems and intelligent automation designed for real users.</p>
      <p>He brings 12+ years of full-stack development and 9+ years of deep Bubble expertise, combining strong engineering foundations with the speed of modern no-code and AI tooling. His portfolio spans SaaS platforms, marketplaces, CRM and ERP systems, client portals, operational dashboards and internal business tools.</p>
      <p>Igor has delivered 150+ Bubble applications and 60+ AI-powered products using OpenAI, Claude, Gemini, AI agents, RAG, document processing, n8n, Make, Zapier and complex API integrations. He builds clean architectures that can scale, remain understandable and evolve as the business changes.</p>
      <div className="about-proof"><div><strong>12+</strong><span>years in full-stack development</span></div><div><strong>150+</strong><span>Bubble applications delivered</span></div><div><strong>60+</strong><span>AI-powered products built</span></div><div><strong>80%</strong><span>of startup products continued to investment</span></div></div>
      <a className="profile-link profile-link-dark" href="https://www.linkedin.com/in/igor-bodrichenko-60b092212" target="_blank" rel="noreferrer">Meet Igor on LinkedIn <ArrowUpRight size={17}/></a>
      </div>
    </article>
  </section>
  <section className="about-duo"><span className="eyebrow">WHY THE COMBINATION MATTERS</span><div><h2>Most teams can advise.<br/>Others can build.<br/><em>We do both.</em></h2><div><p>Process work fails when it ends with a diagram. Technology fails when it begins before the process is understood. Betterflow keeps discovery, redesign and implementation inside one senior team.</p><p>You do not lose the business logic in a handover between consultants and developers. The people who uncover the problem remain responsible for the system that solves it.</p><div className="about-tags"><span>BPMN & PROCESS DESIGN</span><span>PRODUCT & DELIVERY</span><span>AI & AUTOMATION</span><span>APIS & DATA</span><span>BUBBLE & CUSTOM SOFTWARE</span></div></div></div></section>
  <section className="belief"><p>We do not automate the mess.</p><h2>We redesign it.</h2></section>
  <Footer/>
</main>}
