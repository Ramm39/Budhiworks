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

export default function WebApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <ServiceDetailHero
        title="Web & Application Development"
        subtitle="Scalable web applications that help teams manage operations, data, and workflows efficiently and effectively."
        backgroundImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80"
      />
      <BlurredSections>
      <ServiceIncludes
        items={[
          "Full-stack development (frontend and backend)",
          "API design, development, and integration",
          "Database architecture and optimization",
          "Cloud deployment and infrastructure setup",
          "Real-time features and WebSocket integration",
          "User authentication and role-based access control",
          "Performance monitoring and optimization",
        ]}
      />
      <ServiceBenefits
        benefits={[
          {
            title: "Full-Stack Solutions",
            description: "Complete applications from user interface to database, ensuring seamless integration and optimal performance.",
          },
          {
            title: "Cloud-Ready Architecture",
            description: "Built for cloud deployment with scalable infrastructure that grows with your user base and data needs.",
          },
          {
            title: "Modern Tech Stack",
            description: "Leveraging the latest technologies and frameworks for maintainable, future-proof applications.",
          },
          {
            title: "Real-Time Capabilities",
            description: "Support for live updates, notifications, and collaborative features that keep users engaged and informed.",
          },
        ]}
      />
      <ServiceWhyChooseUs />
      <ServiceProcess
        steps={[
          {
            number: "01",
            title: "Requirements & Architecture",
            description: "Define features, user flows, and technical architecture to create a solid foundation for development.",
          },
          {
            number: "02",
            title: "UI/UX Design",
            description: "Design intuitive interfaces and user experiences that make complex functionality simple and enjoyable.",
          },
          {
            number: "03",
            title: "Development & Integration",
            description: "Build frontend and backend components, integrate APIs, and implement real-time features with regular testing.",
          },
          {
            number: "04",
            title: "Deployment & Monitoring",
            description: "Deploy to cloud infrastructure, set up monitoring, and provide documentation and training for your team.",
          },
        ]}
      />
      <ServiceCaseStudies
        caseStudies={[
          {
            title: "Project Management Platform",
            problem: "Teams struggling with scattered tools and lack of visibility into project progress and resource allocation.",
            solution: "Built comprehensive project management platform with real-time collaboration, task tracking, and analytics dashboard.",
          },
          {
            title: "Data Analytics Dashboard",
            problem: "Business needed better insights from multiple data sources but existing tools were expensive and inflexible.",
            solution: "Developed custom analytics dashboard with automated data aggregation, interactive visualizations, and custom reporting.",
          },
          {
            title: "SaaS Application MVP",
            problem: "Startup needed to validate product idea quickly and launch to first customers within tight timeline.",
            solution: "Delivered working MVP in 6 weeks with core features, user authentication, and payment integration, securing first customers.",
          },
        ]}
      />
      <ServicesFinalCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
