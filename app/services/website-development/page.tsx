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

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <ServiceDetailHero
        title="Website Development"
        subtitle="Fast, responsive, and reliable websites built for clarity, performance, and results that drive your business forward."
        backgroundImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80"
      />
      <BlurredSections>
      <ServiceIncludes
        items={[
          "Modern, responsive design that works on all devices",
          "Fast loading times optimized for performance",
          "SEO optimization for better search visibility",
          "Content management systems for easy updates",
          "Contact forms and lead capture functionality",
          "Analytics integration and performance tracking",
          "Security best practices and SSL certificates",
        ]}
      />
      <ServiceBenefits
        benefits={[
          {
            title: "Lightning Fast",
            description: "Optimized for speed with fast loading times that keep visitors engaged and improve search rankings.",
          },
          {
            title: "Mobile-First Design",
            description: "Responsive design ensures your website looks and works perfectly on phones, tablets, and desktops.",
          },
          {
            title: "SEO Optimized",
            description: "Built with search engines in mind, helping your website rank higher and attract more organic traffic.",
          },
          {
            title: "Easy to Manage",
            description: "Content management systems make it simple to update content, add pages, and keep your site fresh.",
          },
        ]}
      />
      <ServiceWhyChooseUs />
      <ServiceProcess
        steps={[
          {
            number: "01",
            title: "Strategy & Planning",
            description: "Understand your goals, target audience, and requirements to create a website strategy that delivers results.",
          },
          {
            number: "02",
            title: "Design & Prototyping",
            description: "Create wireframes and visual designs that align with your brand and provide an excellent user experience.",
          },
          {
            number: "03",
            title: "Development & Optimization",
            description: "Build your website with clean code, optimize for performance, and ensure cross-browser compatibility.",
          },
          {
            number: "04",
            title: "Launch & Training",
            description: "Deploy your website, provide training on content management, and set up analytics for ongoing insights.",
          },
        ]}
      />
      <ServiceCaseStudies
        caseStudies={[
          {
            title: "Corporate Website Redesign",
            problem: "Outdated website with poor mobile experience and slow loading times hurting brand perception.",
            solution: "Complete redesign with modern responsive layout, improved load times by 80%, and increased mobile conversions by 150%.",
          },
          {
            title: "E-Commerce Website Launch",
            problem: "New business needed a professional online store to compete with established competitors.",
            solution: "Built custom e-commerce platform with intuitive shopping experience, secure checkout, and inventory management.",
          },
          {
            title: "Portfolio Website",
            problem: "Creative professional needed a standout portfolio to showcase work and attract clients.",
            solution: "Designed and developed visually striking portfolio with smooth animations and easy content updates.",
          },
        ]}
      />
      <ServicesFinalCTA />
      </BlurredSections>
      <Footer />
    </main>
  );
}
