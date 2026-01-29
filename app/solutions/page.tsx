import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/ui/PageBackground";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { ProblemsWeSolve } from "@/components/solutions/ProblemsWeSolve";
import { SolutionAreas } from "@/components/solutions/SolutionAreas";
import { SolutionImpact } from "@/components/solutions/SolutionImpact";
import { HowWeDeliver } from "@/components/solutions/HowWeDeliver";
import { WhoSolutionsFor } from "@/components/solutions/WhoSolutionsFor";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

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
