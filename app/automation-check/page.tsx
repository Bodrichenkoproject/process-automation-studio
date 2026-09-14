import type { Metadata } from "next";
import { Header, Footer } from "@/components/SiteShell";
import AutomationQuiz from "@/components/AutomationQuiz";
export const metadata:Metadata={title:"Does Your Business Need Automation? Free Assessment | Betterflow",description:"Take a free 2-minute business automation assessment. Identify manual work, process bottlenecks and your best first automation opportunity. Unlock your personalised result with your email.",alternates:{canonical:"/automation-check"}};
export default function Page(){return <main><Header/><AutomationQuiz/><Footer/></main>}
