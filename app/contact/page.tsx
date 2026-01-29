import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/ui/PageBackground";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { AlternateContact } from "@/components/contact/AlternateContact";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <ContactHero />
      <BlurredSections>
        <ContactIntro />
        <ContactForm />
        <AlternateContact />
      </BlurredSections>
      <Footer />
    </main>
  );
}
