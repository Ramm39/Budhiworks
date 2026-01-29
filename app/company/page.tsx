import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/ui/PageBackground";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { CompanyHero } from "@/components/company/CompanyHero";
import { WhoWeAre } from "@/components/company/WhoWeAre";
import { OurPhilosophy } from "@/components/company/OurPhilosophy";
import { HowWeOperate } from "@/components/company/HowWeOperate";
import { WhyClientsTrustUs } from "@/components/company/WhyClientsTrustUs";
import { TeamCulture } from "@/components/company/TeamCulture";
import { CompanyValues } from "@/components/company/CompanyValues";
import { CompanyCTA } from "@/components/company/CompanyCTA";

export default function CompanyPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <CompanyHero />
      <BlurredSections>
        <WhoWeAre />
        <OurPhilosophy />
        <HowWeOperate />
        <WhyClientsTrustUs />
        <TeamCulture />
        <CompanyValues />
        <CompanyCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
