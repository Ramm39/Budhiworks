import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlurredSections } from "@/components/ui/BlurredSections";

const PageBackground = dynamic(
  () => import("@/components/ui/PageBackground").then((m) => ({ default: m.PageBackground })),
  { ssr: false }
);
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceIncludes } from "@/components/services/ServiceIncludes";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceWhyChooseUs } from "@/components/services/ServiceWhyChooseUs";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCaseStudies } from "@/components/services/ServiceCaseStudies";
import { ServicesFinalCTA } from "@/components/services/ServicesFinalCTA";

export default function UIUXDesignPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <ServiceDetailHero
        title="UI / UX Design"
        subtitle="Clean, intuitive design that makes complex systems simple, turning user challenges into seamless experiences."
        backgroundImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80"
      />
      <BlurredSections>
      <ServiceIncludes
        items={[
          "User research and persona development",
          "Information architecture and user flow mapping",
          "Wireframing and interactive prototyping",
          "Visual design systems and style guides",
          "Usability testing and iteration",
          "Design-to-development handoff",
          "Design system documentation",
        ]}
      />
      <ServiceBenefits
        benefits={[
          {
            title: "User-Centered Approach",
            description: "Every design decision is based on user needs and behaviors, ensuring your product is intuitive and enjoyable to use.",
          },
          {
            title: "Consistent Design Systems",
            description: "Comprehensive design systems ensure visual consistency, faster development, and easier maintenance across your product.",
          },
          {
            title: "Reduced Development Costs",
            description: "Well-planned designs with clear specifications reduce back-and-forth and prevent costly redesigns during development.",
          },
          {
            title: "Better User Engagement",
            description: "Thoughtful UX design increases user satisfaction, reduces support requests, and improves conversion rates.",
          },
        ]}
      />
      <ServiceWhyChooseUs />
      <ServiceProcess
        steps={[
          {
            number: "01",
            title: "Research & Discovery",
            description: "Understand your users, business goals, and market context through research, interviews, and competitive analysis.",
          },
          {
            number: "02",
            title: "Strategy & Architecture",
            description: "Define information architecture, user flows, and interaction patterns that guide the design direction.",
          },
          {
            number: "03",
            title: "Design & Prototyping",
            description: "Create wireframes, visual designs, and interactive prototypes for testing and stakeholder approval.",
          },
          {
            number: "04",
            title: "Testing & Handoff",
            description: "Conduct usability testing, iterate based on feedback, and deliver design specifications for development.",
          },
        ]}
      />
      <ServiceCaseStudies
        caseStudies={[
          {
            title: "Enterprise Dashboard Redesign",
            problem: "Complex data-heavy dashboard was overwhelming users and causing low adoption rates.",
            solution: "Redesigned with clear information hierarchy, intuitive navigation, and progressive disclosure, increasing user engagement by 200%.",
          },
          {
            title: "Mobile App UX Overhaul",
            problem: "Mobile app had high drop-off rates and poor user reviews due to confusing navigation and unclear workflows.",
            solution: "Complete UX redesign with simplified flows, improved onboarding, and intuitive interactions, reducing drop-off by 60%.",
          },
          {
            title: "E-Commerce Design System",
            problem: "Inconsistent design across multiple product pages and checkout flows hurting conversion rates.",
            solution: "Created comprehensive design system with reusable components, standardized patterns, and improved checkout flow, increasing conversions by 35%.",
          },
        ]}
      />
      <ServicesFinalCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
