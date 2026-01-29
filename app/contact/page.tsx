import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { ContactHero } from "@/components/contact/ContactHero";

const PageBackground = dynamic(
  () => import("@/components/ui/PageBackground").then((m) => ({ default: m.PageBackground })),
  { ssr: false }
);
const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));
const ContactIntro = dynamic(() => import("@/components/contact/ContactIntro").then((m) => ({ default: m.ContactIntro })));
const ContactForm = dynamic(() => import("@/components/contact/ContactForm").then((m) => ({ default: m.ContactForm })));
const AlternateContact = dynamic(() => import("@/components/contact/AlternateContact").then((m) => ({ default: m.AlternateContact })));

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
