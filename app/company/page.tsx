import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { CompanyHero } from "@/components/company/CompanyHero";

const PageBackground = dynamic(
  () => import("@/components/ui/PageBackground").then((m) => ({ default: m.PageBackground })),
  { ssr: false }
);
const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));
const WhoWeAre = dynamic(() => import("@/components/company/WhoWeAre").then((m) => ({ default: m.WhoWeAre })));
const OurPhilosophy = dynamic(() => import("@/components/company/OurPhilosophy").then((m) => ({ default: m.OurPhilosophy })));
const HowWeOperate = dynamic(() => import("@/components/company/HowWeOperate").then((m) => ({ default: m.HowWeOperate })));
const WhyClientsTrustUs = dynamic(() => import("@/components/company/WhyClientsTrustUs").then((m) => ({ default: m.WhyClientsTrustUs })));
const TeamCulture = dynamic(() => import("@/components/company/TeamCulture").then((m) => ({ default: m.TeamCulture })));
const CompanyValues = dynamic(() => import("@/components/company/CompanyValues").then((m) => ({ default: m.CompanyValues })));
const CompanyCTA = dynamic(() => import("@/components/company/CompanyCTA").then((m) => ({ default: m.CompanyCTA })));

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
