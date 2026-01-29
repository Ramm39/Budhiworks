import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BlurredSections } from "@/components/ui/BlurredSections";

// Dynamic imports for heavy components - load below the fold components lazily
const PageBackground = dynamic(() => import("@/components/ui/PageBackground").then(mod => ({ default: mod.PageBackground })), {
  ssr: false, // Three.js doesn't work with SSR
});

const WhyTrustUs = dynamic(() => import("@/components/sections/WhyTrustUs").then(mod => ({ default: mod.WhyTrustUs })));
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })));
const Solutions = dynamic(() => import("@/components/sections/Solutions").then(mod => ({ default: mod.Solutions })));
const HowWeHelp = dynamic(() => import("@/components/sections/HowWeHelp").then(mod => ({ default: mod.HowWeHelp })));
const Process = dynamic(() => import("@/components/sections/Process").then(mod => ({ default: mod.Process })));
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies").then(mod => ({ default: mod.CaseStudies })));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(mod => ({ default: mod.FinalCTA })));
const Footer = dynamic(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })));

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <PageBackground />
      <Navbar />
      <Hero />
      <BlurredSections>
        <WhyTrustUs />
        <Services />
        <Solutions />
        <HowWeHelp />
        <Process />
        <CaseStudies />
        <FinalCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
