import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { CONTACT } from "@/data/site";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Pouches", to: "/#pouches" },
  { label: "Scrunchies", to: "/#scrunchies" },
  { label: "Bags", to: "/#bags" },
  { label: "About", to: "/#about" },
  { label: "Reviews", to: "/#reviews" },
  { label: "Contact", to: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" className="group">
            <span className="font-display text-3xl md:text-4xl tracking-tight text-ink-900 leading-none">
              Hana <span className="italic text-blush-500">Pouches</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => {
                  if (link.to.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(link.to);
                  }
                }}
                className="text-sm font-body text-ink-700 hover:text-blush-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-blush-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-blush-400 hover:bg-blush-500 text-white text-sm font-medium px-5 py-2.5 transition-colors shadow-soft"
            >
              <Instagram className="w-4 h-4" />
              Order Now
            </a>
            <button
              className="md:hidden p-2 text-ink-800"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 animate-fadeUp">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => {
                  if (link.to.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(link.to);
                  }
                }}
                className="py-3 text-ink-700 hover:text-blush-500 transition-colors border-b border-cream-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-blush-400 hover:bg-blush-500 text-white font-medium px-5 py-3 shadow-soft"
            >
              <Instagram className="w-4 h-4" />
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
