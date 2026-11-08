import { useState, useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { Megaphone, Palette, Target, Gem, Globe, User, Camera, Monitor, Users, X, Send, Briefcase, Link } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTheme } from "./ThemeProvider";
import logoLight from "@/assets/logo-light.png";
import logoNavbar from "@/assets/logo-black-new.png";
import aboutTeam from "@/assets/about-team.jpg";
import coreValuesBg from "@/assets/core-values-bg.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import heroBannerLight from "@/assets/hero-banner-light.jpg";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Megaphone, num: "01", title: "Social Media Marketing", desc: "Complete Instagram and Facebook management including strategy, content planning, posting, engagement handling, and performance reporting." },
  { icon: Palette, num: "02", title: "Creative Content Creation", desc: "Reels, posters, carousels, storytelling content, and branded visuals designed to attract, engage, and convert." },
  { icon: Target, num: "03", title: "Meta Ads Campaigns", desc: "High-performance ad campaigns focused on lead generation and sales growth with proper targeting, budget management, and optimization." },
  { icon: Gem, num: "04", title: "Branding & Identity Design", desc: "Logo creation, brand colors, typography, brochures, and complete visual identity systems for a strong brand presence." },
  { icon: Globe, num: "05", title: "Website Design & Development", desc: "Modern, mobile-responsive, fast-loading websites built for credibility and conversions." },
  { icon: User, num: "06", title: "Personal Brand Management", desc: "Professional Instagram management for individuals, consultants, doctors, entrepreneurs, and public figures." },
];

const additionalServices = [
  { title: "Professional Photo & Video Shoots", icon: Camera, desc: "High-quality photography and videography for your brand, products, and marketing campaigns." },
  { title: "LED Display Advertising", icon: Monitor, desc: "Eye-catching LED billboard and display campaigns for maximum local visibility and impact." },
  { title: "Influencer Marketing Collaborations", icon: Users, desc: "Strategic influencer partnerships to amplify your brand reach and build authentic connections." },
];

/* ─── Hero ─────────────────────────────────────────────────────────────── */

const HeroSection = () => {
  const { theme } = useTheme();
  return (
  <section id="home" className="relative min-h-screen flex items-start md:items-center overflow-hidden pt-16">
    {/* Hero banner background */}
    <img src={theme === "dark" ? heroBanner : heroBannerLight} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/80 dark:bg-background/70" />

    {/* Ambient orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-orb" />
    <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px] animate-orb" style={{ animationDelay: "3s" }} />

    <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 md:py-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[0.95] mb-6 mt-4 md:mt-16 lg:mt-20">
              Next-Gen{" "}
              <span className="text-stroke-orange">Strategies</span>
              <br />
              For Growth
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 font-body">
              We help businesses grow with smart strategy, creative content, and measurable digital marketing results that turn attention into real revenue.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="/DigiNex_Brochure.pdf" download="DigiNex_Brochure.pdf" className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-primary-deep transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1">
                Download Brochure
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); const el = document.getElementById('services'); if (el) { const offset = 80; window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' }); } }} className="px-7 py-3.5 rounded-lg border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1">
                View Our Services
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <div className="flex gap-8 md:gap-12">
              {[{ num: "6+", label: "Core Services" }, { num: "8+", label: "Industries" }, { num: "8+", label: "Cities" }].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-display text-primary">{s.num}</div>
                  <div className="text-sm text-muted-foreground font-body">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-4">
          {services.slice(0, 4).map((s, i) => (
            <ScrollReveal key={s.num} delay={200 + i * 100}>
              <div className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-default">
                <s.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-sm font-display mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground font-body line-clamp-2">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

/* ─── About ────────────────────────────────────────────────────────────── */

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <ScrollReveal>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden border-2 border-primary/30">
                <div className="relative overflow-hidden">
                  <img src={aboutTeam} alt="DigiNex Solutions team working together" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.25)" }} />
                  <div className="absolute inset-0 flex items-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ backgroundColor: "rgba(0,0,0,0.82)" }}>
                    <div className="p-8">
                      <div className="w-12 h-1 bg-primary mb-4" />
                      <p className="text-white text-xl font-display">"Your growth is our real growth."</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Removed 100% Strategy-First and 5+ Cities Covered tags */}
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-display mt-2 mb-6">Built for Real Business Growth</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                DigiNex Solutions is a strategy-driven digital marketing agency focused on meaningful and measurable growth. We work as your extended marketing team, understanding your goals, analyzing your industry, and executing strategies that attract the right audience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 font-body mb-8">
                "We don't work as an external marketing agency — we work as your internal team."
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative p-4 rounded-xl bg-[hsl(0_0%_8%)] border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100" />
                  <h4 className="font-display text-lg text-white mb-1 transition-colors duration-500 group-hover:text-primary">Our Mission</h4>
                  <p className="text-xs font-body leading-relaxed transition-colors duration-500 group-hover:text-secondary" style={{ color: "rgba(255,255,255,0.6)" }}>To serve every client with equal dedication, delivering strategies that create sustainable, long-term growth.</p>
                </div>
                <div className="group relative p-4 rounded-xl bg-[hsl(0_0%_8%)] border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100" />
                  <h4 className="font-display text-lg text-white mb-1 transition-colors duration-500 group-hover:text-primary">Our Vision</h4>
                  <p className="text-xs font-body leading-relaxed transition-colors duration-500 group-hover:text-secondary" style={{ color: "rgba(255,255,255,0.6)" }}>To become a trusted digital growth partner known for quality over quantity and impactful results.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Core Values — with background image */}
        <div className="relative mb-20 py-16 rounded-3xl overflow-hidden">
          {/* Background image */}
          <img src={coreValuesBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          {/* Dark overlay with opacity */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.80)" }} />
          <ScrollReveal>
            <h3 className="text-3xl font-display text-center mb-10">Our Core Values</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 md:px-12 relative z-10">
            {["Trust & Transparency", "Strategy with Creativity", "Client-First Thinking", "Long-Term Partnerships", "Team Support & Coordination", "Continuous Learning & Improvement"].map((v, i) => (
              <ScrollReveal key={v} delay={i * 80}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 shadow-lg shadow-primary/30" />
                  <span className="font-body text-sm font-medium">{v}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Industries We Serve — no logo background */}
        <div className="relative py-14 rounded-3xl bg-card border border-border overflow-hidden">
          <ScrollReveal>
            <h3 className="text-2xl font-display text-center mb-6">Industries We Serve</h3>
            <div className="overflow-hidden py-4">
              <div className="animate-marquee flex gap-4 w-max">
                {["Healthcare", "Real Estate", "Restaurants", "Education", "Fashion", "Personal Branding", "Business Consultancies", "Hotels", "Small Businesses", "Healthcare", "Real Estate", "Restaurants", "Education", "Fashion", "Personal Branding", "Business Consultancies", "Hotels", "Small Businesses"].map((ind, i) => (
                  <span key={`${ind}-${i}`} className="px-5 py-2 rounded-full border border-primary bg-background/60 backdrop-blur-sm text-sm font-body whitespace-nowrap text-primary transition-colors">{ind}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

/* ─── Services with flip cards ─────────────────────────────────────────── */

const ServiceCard = ({ s }: { s: typeof services[0] | typeof additionalServices[0] }) => {
  const Icon = s.icon;

  return (
    <div className="group relative min-h-[200px] md:h-[260px] cursor-default rounded-xl overflow-hidden bg-[hsl(0_0%_8%)] border border-white/10 p-6 flex flex-col justify-between transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
      {/* Animated top border line */}
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
      {/* Animated bottom border line */}
      <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100" />

      <div>
        <Icon className="w-8 h-8 text-primary mb-4 transition-all duration-500 group-hover:scale-110 group-hover:text-secondary" />
        <h3 className="font-display text-lg text-white uppercase tracking-wide mb-2 transition-colors duration-500 group-hover:text-primary">{s.title}</h3>
        <p className="text-sm font-body leading-relaxed transition-colors duration-500" style={{ color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-32 bg-secondary/50">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2">Our Core Services</h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 100}>
            <ServiceCard s={s} />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={200}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((s) => (
            <ScrollReveal key={s.title}>
              <ServiceCard s={s} />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── What Makes Us Different ──────────────────────────────────────────── */

const differentiators = [
  { title: "Strategy-First Approach", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600", desc: "Every campaign starts with deep research and a clear goal — no guesswork, no wasted budget.", icon: Target },
  { title: "Real Results, Not Vanity Metrics", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", desc: "We measure what matters — leads, conversions, and revenue impact, not just likes and impressions.", icon: Target },
  { title: "Dedicated & Supportive Team", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600", desc: "Your projects receive focused attention from specialists who genuinely care about your success.", icon: User },
  { title: "Transparent Reporting", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600", desc: "Clear, honest performance updates every step of the way — you always know where things stand.", icon: Globe },
  { title: "Personalized Attention", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600", desc: "No cookie-cutter solutions. Every strategy is tailored to your unique business needs and goals.", icon: Gem },
  { title: "Strong Creative Planning", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600", desc: "Creative direction and content planning that stops the scroll and builds lasting brand identity.", icon: Palette },
];

const DifferentSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Why Us</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2">What Makes Us Different</h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {differentiators.map((d, i) => (
          <ScrollReveal key={d.title} delay={i * 100}>
            <div
              className="group relative rounded-xl overflow-hidden h-[200px] md:h-[240px] cursor-pointer md:cursor-default"
              onClick={() => setActiveCard(activeCard === i ? null : i)}
            >
              <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" loading="lazy" />
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.60)" }} />
              {/* Title: visible by default, fades on hover (desktop) or tap (mobile) */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 z-10 transition-opacity duration-300 md:group-hover:opacity-0 ${activeCard === i ? 'opacity-0' : 'opacity-100'}`}>
                <d.icon className="w-5 h-5 text-primary mb-1.5" />
                <h3 className="font-display text-base text-white">{d.title}</h3>
              </div>
              {/* Overlay: slides up on hover (desktop) or tap (mobile) */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-5 z-20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:translate-y-full md:group-hover:translate-y-0 ${activeCard === i ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
              >
                <div className="w-10 h-1 bg-primary mb-3" />
                <d.icon className="w-5 h-5 text-primary mb-1.5" />
                <h3 className="font-display text-base text-white mb-1.5">{d.title}</h3>
                <p className="text-xs font-body" style={{ color: "rgba(255,255,255,0.75)" }}>{d.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
  );
};

/* ─── Careers ──────────────────────────────────────────────────────────── */

interface Role {
  title: string;
  icon: typeof Briefcase;
  badge: string;
  desc: string;
  responsibilities: string[];
  requirements: string[];
}

const roles: Role[] = [
  {
    title: "Graphic Designer",
    icon: Palette,
    badge: "Creative",
    desc: "Craft stunning visuals, brand assets, and marketing creatives that stop the scroll and build brand identity.",
    responsibilities: [
      "Design social media posts, reels thumbnails & carousels",
      "Create brand identity assets — logos, colour palettes, typography",
      "Produce brochures, flyers, and offline marketing materials",
      "Collaborate with the content and strategy team on campaigns",
    ],
    requirements: [
      "Proficiency in Adobe Photoshop, Illustrator & Canva",
      "Strong portfolio showcasing creative and brand work",
      "Eye for detail, colour theory, and layout composition",
      "Ability to work on tight deadlines in a fast-paced environment",
    ],
  },
  {
    title: "Video Editor",
    icon: Camera,
    badge: "Creative",
    desc: "Edit reels, brand videos, and high-impact motion content that engage and convert audiences.",
    responsibilities: [
      "Edit short-form reels and long-form brand videos",
      "Add motion graphics, captions, and sound design",
      "Maintain brand consistency across all video outputs",
      "Coordinate with the creative team on visual direction",
    ],
    requirements: [
      "Experience with Premiere Pro, After Effects, or CapCut",
      "Strong sense of pacing, storytelling, and music sync",
      "Portfolio of edited reels or promotional videos",
      "Ability to deliver multiple edits per week",
    ],
  },
  {
    title: "Social Media Executive",
    icon: Megaphone,
    badge: "Marketing",
    desc: "Plan, post, and grow brand presence across Instagram & Facebook for multiple clients.",
    responsibilities: [
      "Manage posting calendars for multiple client accounts",
      "Write captions, schedule posts, and handle community engagement",
      "Monitor analytics and prepare weekly performance reports",
      "Stay updated on social media trends and algorithm changes",
    ],
    requirements: [
      "Understanding of Instagram and Facebook algorithms",
      "Excellent written communication and copywriting skills",
      "Experience with scheduling tools (Buffer, Later, etc.)",
      "Analytical mindset with attention to performance metrics",
    ],
  },
  {
    title: "Ads Specialist",
    icon: Target,
    badge: "Performance",
    desc: "Run and optimize high-converting Meta ad campaigns focused on lead generation and sales.",
    responsibilities: [
      "Set up, manage, and optimize Meta (Facebook & Instagram) ad campaigns",
      "Conduct audience research and build targeted ad sets",
      "Prepare weekly ROI reports for client campaigns",
      "A/B test creatives, copies, and landing pages",
    ],
    requirements: [
      "Hands-on experience with Meta Ads Manager",
      "Understanding of pixel setup, retargeting, and lookalike audiences",
      "Analytical skills to interpret ad performance data",
      "Knowledge of lead generation and conversion funnels",
    ],
  },
  {
    title: "Content Writer",
    icon: Gem,
    badge: "Content",
    desc: "Write compelling copy for social media, websites, and ads that converts readers into customers.",
    responsibilities: [
      "Write engaging captions, blog posts, and ad copy",
      "Develop website content and landing page copy",
      "Research industry trends to create relevant content",
      "Collaborate with designers on content-visual alignment",
    ],
    requirements: [
      "Excellent written English with strong storytelling ability",
      "Understanding of SEO best practices",
      "Experience writing for social media, blogs, or marketing",
      "Ability to adapt tone and voice for different brands",
    ],
  },
  {
    title: "Web Developer",
    icon: Monitor,
    badge: "Technical",
    desc: "Build modern, fast, mobile-responsive websites that drive credibility and conversions.",
    responsibilities: [
      "Design and develop responsive websites for clients",
      "Integrate forms, analytics, and third-party tools",
      "Optimize site speed and SEO technical foundations",
      "Maintain and update existing client websites",
    ],
    requirements: [
      "Proficiency in HTML, CSS, JavaScript, and React or WordPress",
      "Experience deploying and maintaining web projects",
      "Understanding of responsive design and cross-browser compatibility",
      "Portfolio of developed websites or web apps",
    ],
  },
];

const badgeColors: Record<string, string> = {
  Creative: "bg-primary/10 text-primary border-primary/20",
  Marketing: "bg-primary/10 text-primary border-primary/20",
  Performance: "bg-primary/10 text-primary border-primary/20",
  Content: "bg-primary/10 text-primary border-primary/20",
  Technical: "bg-primary/10 text-primary border-primary/20",
};

interface ApplyModalProps {
  role: Role | null;
  onClose: () => void;
}

const ApplyModal = ({ role, onClose }: ApplyModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", portfolio: "", resume: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  if (!role) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await emailjs.send(
        "service_lyluefo",
        "template_fujiqpa",
        {
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          portfolio: form.portfolio || "Not provided",
          resume: form.resume || "Not provided",
          message: form.message,
        },
        "hO3csKq72sDI4L3se"
      );
      setSubmitted(true);
    } catch {
      setError("Failed to send application. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border bg-card rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-widest">Apply for</p>
              <h3 className="font-display text-xl">{role.title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-2xl mb-2">Application Sent!</h4>
              <p className="text-muted-foreground font-body text-sm">Your application for <strong>{role.title}</strong> has been submitted successfully. We'll be in touch soon.</p>
              <button onClick={onClose} className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary-deep transition-colors">
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 p-4 rounded-xl bg-secondary/60 border border-border">
                <p className="text-sm text-muted-foreground font-body mb-4">{role.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-body font-semibold text-primary uppercase tracking-widest mb-2">Responsibilities</p>
                    <ul className="space-y-1">
                      {role.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-primary uppercase tracking-widest mb-2">Requirements</p>
                    <ul className="space-y-1">
                      {role.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Full Name *</label>
                    <input type="text" name="name" required maxLength={100} value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Email Address *</label>
                    <input type="email" name="email" required maxLength={255} value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Phone Number</label>
                    <input type="tel" name="phone" maxLength={15} value={form.phone} onChange={handleChange} placeholder="+91 9999999999" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Portfolio / LinkedIn URL</label>
                    <input type="url" name="portfolio" maxLength={500} value={form.portfolio} onChange={handleChange} placeholder="https://your-portfolio.com" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                </div>

                {/* Resume Drive Link */}
                <div>
                  <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Resume (Google Drive Link) *</label>
                  <div className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                    <Link className="w-5 h-5 text-primary flex-shrink-0" />
                    <input type="url" name="resume" required maxLength={500} value={form.resume} onChange={handleChange} placeholder="https://drive.google.com/file/d/..." className="w-full bg-transparent text-sm font-body focus:outline-none" />
                  </div>
                  <p className="text-xs text-muted-foreground font-body mt-1">Upload your resume to Google Drive and paste the shareable link here</p>
                </div>

                <div>
                  <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Tell us about yourself *</label>
                  <textarea name="message" required maxLength={1000} rows={4} value={form.message} onChange={handleChange} placeholder="Why do you want to join DigiNex? Share your experience and what makes you a great fit..." className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" />
                  <p className="text-xs text-muted-foreground font-body mt-1 text-right">{form.message.length}/1000</p>
                </div>

                {error && (
                  <p className="text-sm text-red-500 font-body text-center bg-red-500/10 py-2 rounded-lg">{error}</p>
                )}

                <button type="submit" disabled={sending} className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-primary-deep transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4" />
                  {sending ? "Sending..." : "Submit Application"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CareersSection = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  return (
    <>
      <section id="careers" className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Careers</span>
              <h2 className="text-4xl md:text-5xl font-display mt-2">Join DigiNex Solutions</h2>
              <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-sm md:text-base">
                We are always looking for creative and ambitious individuals who want to grow in the digital marketing industry.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["Supportive environment", "Real learning", "Multiple industries", "Creative projects"].map((p) => (
                  <span key={p} className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-muted-foreground text-xs font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />{p}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 80}>
                <button
                  onClick={() => setSelectedRole(r)}
                  className="group w-full text-left p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <r.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full border ${badgeColors[r.badge] ?? "bg-primary/10 text-primary border-primary/20"}`}>
                      {r.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4">{r.desc}</p>
                  <div className="flex items-center gap-2 text-primary text-xs font-body font-semibold group-hover:gap-3 transition-all">
                    <Briefcase className="w-3.5 h-3.5" />
                    Apply Now →
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <p className="text-center text-sm text-muted-foreground font-body mt-10">
              Send your resume to{" "}
              <a href="mailto:hiringdiginexsolutions@gmail.com" className="text-primary hover:underline">
                hiringdiginexsolutions@gmail.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {selectedRole && <ApplyModal role={selectedRole} onClose={() => setSelectedRole(null)} />}
    </>
  );
};

/* ─── Multi Service Select ─────────────────────────────────────────────── */

const MultiServiceSelect = ({ services, onChange }: { services: { num: string; title: string }[]; onChange?: (selected: string[]) => void }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (title: string) => {
    setSelected((prev) => {
      const next = prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title];
      onChange?.(next);
      return next;
    });
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body text-left focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all flex items-center justify-between"
      >
        <span className={selected.length ? "text-foreground" : "text-muted-foreground"}>
          {selected.length ? `${selected.length} service${selected.length > 1 ? "s" : ""} selected` : "Select Services Required"}
        </span>
        <svg className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-1 w-full rounded-lg bg-card border border-border shadow-lg max-h-60 overflow-y-auto">
          {services.map((s) => (
            <label
              key={s.num}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary/60 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={selected.includes(s.title)}
                onChange={() => toggle(s.title)}
                className="accent-primary w-4 h-4 rounded"
              />
              <span className="text-sm font-body text-foreground">{s.title}</span>
            </label>
          ))}
        </div>
      )}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {selected.map((s) => (
            <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium">
              {s}
              <button type="button" onClick={() => toggle(s)} className="hover:text-primary-deep"><X size={12} /></button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", business: "", message: "" });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await emailjs.send(
        "service_lyluefo",
        "template_4l5dtei",
        {
          name: form.name,
          phone: form.phone,
          business: form.business || "Not provided",
          services: selectedServices.length > 0 ? selectedServices.join(", ") : "Not selected",
          message: form.message,
        },
        "hO3csKq72sDI4L3se"
      );
      setSubmitted(true);
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
  <section id="contact" className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-display">Let's Grow Your Business Together</h2>
        </div>
      </ScrollReveal>
      <div className="grid lg:grid-cols-2 gap-12">
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl mb-4">Get In Touch</h3>
              <div className="space-y-3 font-body text-sm">
                <p><span className="text-muted-foreground">Phone:</span>{" "}<a href="tel:9888959659" className="hover:text-primary transition-colors">9888959659</a></p>
                <p><span className="text-muted-foreground">Email:</span>{" "}<a href="mailto:diginexsolutionsofficial11@gmail.com" className="hover:text-primary transition-colors">diginexsolutionsofficial11@gmail.com</a></p>
                <p><span className="text-muted-foreground">Website:</span>{" "}<a href="https://diginexsolutionsofficial.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">diginexsolutionsofficial.in</a></p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          {submitted ? (
            <div className="text-center py-16 p-6 md:p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-2xl mb-2">Message Sent!</h4>
              <p className="text-muted-foreground font-body text-sm">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
          <form className="space-y-4 p-6 md:p-8 rounded-2xl bg-card border border-border" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <input type="text" name="business" value={form.business} onChange={handleChange} placeholder="Business Type" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            <MultiServiceSelect services={services} onChange={setSelectedServices} />
            <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" />
            {error && (
              <p className="text-sm text-red-500 font-body text-center bg-red-500/10 py-2 rounded-lg">{error}</p>
            )}
            <button type="submit" disabled={sending} className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-primary-deep transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
          )}
        </ScrollReveal>
      </div>
    </div>
  </section>
  );
};

/* ─── Footer ───────────────────────────────────────────────────────────── */

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoNavbar} alt="DigiNex Solutions" className="h-10 md:h-12 w-auto object-contain" />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-body text-muted-foreground">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(l.href);
                  if (el) {
                    const offset = 80;
                    const top = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-body text-center">© {new Date().getFullYear()} DigiNex Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { HeroSection, AboutSection, ServicesSection, DifferentSection, CareersSection, ContactSection, Footer };
