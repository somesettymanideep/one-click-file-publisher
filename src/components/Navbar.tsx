import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logoDark from "@/assets/logo-black-new.png";
import logoLight from "@/assets/logo-black-new.png";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "backdrop-blur-xl shadow-lg" : ""
        }`}
      style={{ backgroundColor: scrolled ? `hsl(var(--nav-bg))` : "transparent" }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-18 lg:h-20 py-1">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="flex-shrink-0">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="DigiNex Solutions"
            className="h-9 md:h-10 lg:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`text-sm font-body font-medium transition-colors duration-300 hover:text-primary ${activeSection === link.href.slice(1)
                ? "text-primary"
                : "text-foreground/70"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="/DigiNex_Brochure.pdf"
            download="DigiNex_Brochure.pdf"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary-deep transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            Download Brochure
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMobileOpen(false);
                  handleScroll(e, link.href);
                }}
                className={`text-lg font-body font-medium py-2 transition-colors ${activeSection === link.href.slice(1) ? "text-primary" : "text-foreground/70"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-secondary text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="/DigiNex_Brochure.pdf"
                download="DigiNex_Brochure.pdf"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
