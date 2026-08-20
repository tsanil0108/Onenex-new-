import { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { SERVICES, SOCIALS } from "../lib/data";

const SOCIAL_ICONS = { Instagram, Facebook, LinkedIn: Linkedin };

const EASE = [0.76, 0, 0.24, 1];

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services", dropdown: SERVICES.map((s) => ({ label: s.title, to: `/services/${s.slug}` })) },
  { label: "Pages", to: "/pages", dropdown: [
      { label: "About Us", to: "/pages" },
      { label: "Our Team", to: "/team" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Contact", to: "/contact" },
    ] },
  { label: "Team", to: "/team" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 border-b ${
          scrolled ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-white/10" : "bg-transparent border-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" data-testid="logo-link">
            <img src="/assets/onenex-logo.webp" alt="Onenex — Brand Design and Print" className="h-9 md:h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9" data-testid="desktop-nav">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <NavLink
                  to={item.to}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-heading text-sm uppercase tracking-widest link-underline py-2 ${
                      isActive ? "text-[#FF9D00]" : "text-white/80 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>

                {item.dropdown && (
                  <AnimatePresence>
                    {hovered === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-[#0A0A0A] border border-white/10 w-64 p-2">
                          {item.dropdown.map((d) => (
                            <Link
                              key={d.to}
                              to={d.to}
                              className="flex items-center justify-between px-4 py-3 font-body text-sm text-white/70 hover:text-[#0A0A0A] hover:bg-[#FF9D00] transition-colors duration-300 group"
                              data-testid={`dropdown-${d.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                            >
                              {d.label}
                              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-4">
              {SOCIALS.map((s) => {
                const SIcon = SOCIAL_ICONS[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-testid={`nav-social-${s.label.toLowerCase()}`}
                    className="text-white/60 hover:text-[#FF9D00] transition-colors duration-300"
                  >
                    <SIcon className="w-[18px] h-[18px]" />
                  </a>
                );
              })}
            </div>
            <span className="w-px h-5 bg-white/15" />
            <Link
              to="/contact"
              data-testid="nav-cta"
              className="inline-flex items-center gap-2 bg-[#FF9D00] text-[#0A0A0A] px-6 py-3 font-heading text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300"
            >
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            aria-label="Menu"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-6 lg:hidden overflow-y-auto"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: EASE }}
                >
                  <Link
                    to={item.to}
                    className="block font-display text-5xl py-4 border-b border-white/10 hover:text-[#FF9D00] transition-colors"
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-10">
              {SOCIALS.map((s) => {
                const SIcon = SOCIAL_ICONS[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-testid={`mobile-social-${s.label.toLowerCase()}`}
                    className="text-white/70 hover:text-[#FF9D00] transition-colors"
                  >
                    <SIcon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
