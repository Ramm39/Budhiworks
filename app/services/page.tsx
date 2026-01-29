import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/ui/PageBackground";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { ServicesPageHero } from "@/components/services/ServicesPageHero";
import { DetailedServiceSection } from "@/components/services/DetailedServiceSection";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesFinalCTA } from "@/components/services/ServicesFinalCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <ServicesPageHero />
      <BlurredSections>
      <DetailedServiceSection
        title="Custom Software Development"
        description="Tailored software designed around your business workflows."
        features={[
          "Business process automation",
          "Custom integrations with existing systems",
          "Scalable architecture for growth",
          "Ongoing maintenance and support"
        ]}
        index={0}
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80"
      />
      <DetailedServiceSection
        title="Website Development"
        description="Fast, responsive, and reliable websites built for clarity and performance."
        features={[
          "Modern, responsive design",
          "Fast loading times",
          "SEO optimization",
          "Content management systems"
        ]}
        index={1}
        image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80"
      />
      <DetailedServiceSection
        title="Web & Application Development"
        description="Scalable applications that help teams manage operations and data."
        features={[
          "Full-stack development",
          "API design and integration",
          "Database architecture",
          "Cloud deployment"
        ]}
        index={2}
        image="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80"
      />
      <DetailedServiceSection
        title="UI / UX Design"
        description="Clean, intuitive design that makes complex systems simple."
        features={[
          "User research and testing",
          "Wireframing and prototyping",
          "Visual design systems",
          "Design-to-development handoff"
        ]}
        index={3}
        image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80"
      />
      <ServicesProcess />
      <ServicesFinalCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
