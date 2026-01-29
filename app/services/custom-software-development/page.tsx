import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/ui/PageBackground";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceIncludes } from "@/components/services/ServiceIncludes";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceWhyChooseUs } from "@/components/services/ServiceWhyChooseUs";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCaseStudies } from "@/components/services/ServiceCaseStudies";
import { ServicesFinalCTA } from "@/components/services/ServicesFinalCTA";

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <ServiceDetailHero
        title="Custom Software Development"
        subtitle="Tailored software solutions designed around your business workflows, built to scale and evolve with your needs."
        backgroundImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80"
      />
      <BlurredSections>
      <ServiceIncludes
        items={[
          "Business process automation and workflow optimization",
          "Custom integrations with existing systems and third-party APIs",
          "Scalable architecture designed for future growth",
          "Database design and data management solutions",
          "User authentication and security implementation",
          "Ongoing maintenance, updates, and technical support",
        ]}
      />
      <ServiceBenefits
        benefits={[
          {
            title: "Tailored to Your Needs",
            description: "Every feature is built specifically for your business processes, eliminating unnecessary complexity and focusing on what matters most.",
          },
          {
            title: "Scalable Architecture",
            description: "Built with growth in mind, your software can handle increased users, data, and functionality without major rewrites.",
          },
          {
            title: "Complete Ownership",
            description: "You own the code, the data, and the system. No vendor lock-in, no subscription dependencies—full control.",
          },
          {
            title: "Seamless Integration",
            description: "Works perfectly with your existing tools and systems, creating a unified workflow across your entire business.",
          },
        ]}
      />
      <ServiceWhyChooseUs />
      <ServiceProcess
        steps={[
          {
            number: "01",
            title: "Discovery & Planning",
            description: "We dive deep into your business processes, understand your pain points, and map out the solution architecture.",
          },
          {
            number: "02",
            title: "Design & Architecture",
            description: "Create detailed technical specifications, design the database structure, and plan the development roadmap.",
          },
          {
            number: "03",
            title: "Development & Testing",
            description: "Build your software with regular check-ins, iterative development, and comprehensive testing at every stage.",
          },
          {
            number: "04",
            title: "Deployment & Support",
            description: "Launch your software, provide training, and establish ongoing support to ensure everything runs smoothly.",
          },
        ]}
      />
      <ServiceCaseStudies
        caseStudies={[
          {
            title: "E-Commerce Platform Modernization",
            problem: "Legacy system couldn't handle growing traffic and lacked modern features.",
            solution: "Built scalable microservices architecture with 99.9% uptime, improved performance by 300%, and added real-time inventory management.",
          },
          {
            title: "Internal Operations Dashboard",
            problem: "Manual processes and disconnected systems slowing down team productivity.",
            solution: "Automated workflows and unified data management reduced processing time by 70% and eliminated manual errors.",
          },
          {
            title: "Custom CRM System",
            problem: "Off-the-shelf CRM didn't fit unique business processes and customer journey.",
            solution: "Developed tailored CRM with custom workflows, automated lead scoring, and seamless integration with existing tools.",
          },
        ]}
      />
      <ServicesFinalCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
