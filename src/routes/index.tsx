import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  DifferentSection,
  CareersSection,
  ContactSection,
  Footer,
} from "@/components/Sections";

const title = "DigiNex Solutions | Digital Marketing Agency – Strategy, Branding & Growth";
const description =
  "DigiNex Solutions is a strategy-driven digital marketing agency offering social media marketing, branding, Meta ads, website development, content creation, and personal brand management.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://diginexsolutions.in/og-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://diginexsolutions.in/og-logo.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </ThemeProvider>
  );
}
