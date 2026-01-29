import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";

const PageBackground = dynamic(
  () => import("@/components/ui/PageBackground").then((m) => ({ default: m.PageBackground })),
  { ssr: false }
);
const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));
const ProblemsWeSolve = dynamic(() => import("@/components/solutions/ProblemsWeSolve").then((m) => ({ default: m.ProblemsWeSolve })));
const SolutionAreas = dynamic(() => import("@/components/solutions/SolutionAreas").then((m) => ({ default: m.SolutionAreas })));
const SolutionImpact = dynamic(() => import("@/components/solutions/SolutionImpact").then((m) => ({ default: m.SolutionImpact })));
const HowWeDeliver = dynamic(() => import("@/components/solutions/HowWeDeliver").then((m) => ({ default: m.HowWeDeliver })));
const WhoSolutionsFor = dynamic(() => import("@/components/solutions/WhoSolutionsFor").then((m) => ({ default: m.WhoSolutionsFor })));
const SolutionsCTA = dynamic(() => import("@/components/solutions/SolutionsCTA").then((m) => ({ default: m.SolutionsCTA })));

export default function SolutionsPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <SolutionsHero />
      <BlurredSections>
        <ProblemsWeSolve />
        <SolutionAreas />
        <SolutionImpact />
        <HowWeDeliver />
        <WhoSolutionsFor />
        <SolutionsCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
