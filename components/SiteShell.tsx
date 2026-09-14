"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  useEffect(() => { if (menuRef.current) menuRef.current.open = false; }, [pathname]);
  useEffect(() => {
    const close = (event: PointerEvent) => { if (menuRef.current && !menuRef.current.contains(event.target as Node)) menuRef.current.open = false; };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape" && menuRef.current?.open) { menuRef.current.open = false; menuRef.current.querySelector("summary")?.focus(); } };
    document.addEventListener("pointerdown", close); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", escape); };
  }, []);
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">B/</span><span>BETTERFLOW</span></Link><nav><Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/case-studies">Cases</Link><Link href="/insights">Insights</Link><Link href="/about">About</Link></nav><Link className="nav-cta" href="/process-assessment">Map my process <ArrowUpRight size={16}/></Link><details ref={menuRef} className="mobile-menu"><summary aria-label="Open navigation"><span>MENU</span><i/><i/></summary><div className="mobile-menu-panel" onClick={(event) => { if ((event.target as Element).closest("a") && menuRef.current) menuRef.current.open = false; }}><Link href="/">Home <span>01</span></Link><Link href="/services">Services <span>02</span></Link><Link href="/industries">Industries <span>03</span></Link><Link href="/case-studies">Cases <span>04</span></Link><Link href="/insights">Insights <span>05</span></Link><Link href="/about">About <span>06</span></Link><Link href="/automation-check">Automation check <span>07</span></Link><Link className="mobile-menu-cta" href="/process-assessment">Map my process <ArrowUpRight/></Link></div></details></header>;
}

export function Footer() {
  return <footer className="footer"><div><span className="eyebrow">THE NEXT VERSION OF WORK</span><h2>Ready to make<br/>the process <em>flow?</em></h2></div><Link className="round-link" href="/process-assessment">Start here <ArrowUpRight/></Link><div className="footer-seo"><Link href="/automation-check">Free automation check</Link><Link href="/services/business-process-audit">Process audit</Link><Link href="/services/bpmn-process-mapping">BPMN mapping</Link><Link href="/services/ai-workflow-automation">AI automation</Link><Link href="/services/custom-web-app-development">Web development</Link><Link href="/insights">Insights</Link></div><div className="footer-bottom"><span>Business process optimisation · AI automation · Custom development</span><span>© 2026 Betterflow Studio</span></div></footer>;
}

export function PageIntro({kicker,title,accent,copy}:{kicker:string;title:string;accent:string;copy:string}) {
  return <section className="page-intro"><span className="eyebrow">{kicker}</span><h1>{title}<br/><em>{accent}</em></h1><p>{copy}</p><div className="orbit orbit-small"/></section>;
}
