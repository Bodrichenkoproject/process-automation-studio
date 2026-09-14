import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://betterflow.club"),
  title: "Betterflow — Process Optimisation, AI Automation & Development",
  description: "We analyse, optimise and automate business processes using BPMN, AI, integrations and custom software development.",
  keywords: ["business process automation", "AI workflow automation", "business process optimisation", "BPMN process mapping", "custom web application development", "API integration services"],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"ProfessionalService",name:"Betterflow",description:"Business process optimisation, BPMN process mapping, AI workflow automation and custom software development services.",url:"https://betterflow.club",areaServed:"Worldwide",knowsAbout:["Business process automation","BPMN 2.0","AI workflow automation","API integration","Business intelligence","Bubble development","Custom web application development"],founder:[{"@type":"Person",name:"Jane Bodrichenko",url:"https://www.linkedin.com/in/jane-bodrichenko-58862a130"},{"@type":"Person",name:"Igor Bodrichenko",url:"https://www.linkedin.com/in/igor-bodrichenko-60b092212"}]})}}/>{children}</body>
    </html>
  );
}
