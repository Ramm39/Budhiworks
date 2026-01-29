import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { WorkHero } from "@/components/work/WorkHero";

const PageBackground = dynamic(
  () => import("@/components/ui/PageBackground").then((m) => ({ default: m.PageBackground })),
  { ssr: false }
);
const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));
const FeaturedProjects = dynamic(() => import("@/components/work/FeaturedProjects").then((m) => ({ default: m.FeaturedProjects })));
const ProcessHighlight = dynamic(() => import("@/components/work/ProcessHighlight").then((m) => ({ default: m.ProcessHighlight })));
const TechnologiesCapabilities = dynamic(() => import("@/components/work/TechnologiesCapabilities").then((m) => ({ default: m.TechnologiesCapabilities })));
const MoreWork = dynamic(() => import("@/components/work/MoreWork").then((m) => ({ default: m.MoreWork })));
const ResultsImpact = dynamic(() => import("@/components/work/ResultsImpact").then((m) => ({ default: m.ResultsImpact })));
const WorkCTA = dynamic(() => import("@/components/work/WorkCTA").then((m) => ({ default: m.WorkCTA })));

export default function WorkPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <WorkHero />
      <BlurredSections>
        <FeaturedProjects />
        <ProcessHighlight />
        <TechnologiesCapabilities />
        <MoreWork />
        <ResultsImpact />
        <WorkCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
