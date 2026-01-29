import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/ui/PageBackground";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { WorkHero } from "@/components/work/WorkHero";
import { FeaturedProjects } from "@/components/work/FeaturedProjects";
import { ProcessHighlight } from "@/components/work/ProcessHighlight";
import { TechnologiesCapabilities } from "@/components/work/TechnologiesCapabilities";
import { MoreWork } from "@/components/work/MoreWork";
import { ResultsImpact } from "@/components/work/ResultsImpact";
import { WorkCTA } from "@/components/work/WorkCTA";

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
