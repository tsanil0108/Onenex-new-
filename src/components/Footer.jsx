import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import Marquee from "react-fast-marquee";
import { MaskedLinesInView } from "./Reveal";
import { MagneticButton } from "./Motion";
import { CONTACT, SOCIALS } from "../lib/data";

export default function Footer() {
  const scrollTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10" data-testid="footer">
      {/* Big CTA */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-28 pb-16">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#FF9D00] mb-8">
          / Let’s talk
        </p>
        <MaskedLinesInView
          lines={["LET'S MAKE", "SOMETHING GREAT."]}
          className="font-display text-[13vw] md:text-[10vw] leading-[0.85]"
          lineClassName="text-white"
        />
        <div className="mt-12">
          <MagneticButton
            to="/contact"
            data-testid="footer-cta"
            className="inline-flex items-center gap-3 bg-[#FF9D00] text-[#0A0A0A] px-10 py-5 font-heading text-base uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300"
          >
            Start a Project <ArrowUpRight className="w-5 h-5" />
          </MagneticButton>
        </div>
      </div>

      {/* Marquee */}
      <div className="py-8 border-y border-white/10 overflow-hidden">
        <Marquee speed={60} gradient={false} autoFill>
          {["BRAND DESIGN", "PRINT", "IDENTITY", "DIGITAL", "STRATEGY", "MOTION"].map((t, i) => (
            <span key={i} className="font-display text-6xl md:text-7xl mx-8 flex items-center gap-8">
              <span className={i % 2 === 0 ? "text-white" : "text-stroke"}>{t}</span>
              <span className="text-[#FF9D00] text-4xl">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Columns */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <img src="/assets/onenex-logo.webp" alt="Onenex — Brand Design and Print" className="h-10 w-auto" />
          <p className="font-body text-white/50 text-sm mt-4 max-w-xs">
            A brand design & print studio building brands people remember.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-xs uppercase tracking-widest text-white/40 mb-5">Menu</h4>
          <ul className="space-y-3 font-body text-white/70 text-sm">
            <li><Link to="/" className="link-underline hover:text-white">Home</Link></li>
            <li><Link to="/services" className="link-underline hover:text-white">Services</Link></li>
            <li><Link to="/team" className="link-underline hover:text-white">Team</Link></li>
            <li><Link to="/portfolio" className="link-underline hover:text-white">Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-xs uppercase tracking-widest text-white/40 mb-5">Contact</h4>
          <ul className="space-y-3 font-body text-white/70 text-sm">
            <li><a href={`mailto:${CONTACT.email}`} className="link-underline hover:text-white">{CONTACT.email}</a></li>
            {CONTACT.phones.map((p) => (
              <li key={p.tel}><a href={`tel:${p.tel}`} className="link-underline hover:text-white">{p.display}</a></li>
            ))}
            <li className="text-white/50 leading-relaxed pt-1">{CONTACT.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-xs uppercase tracking-widest text-white/40 mb-5">Social</h4>
          <ul className="space-y-3 font-body text-white/70 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" data-testid={`footer-social-${s.label.toLowerCase()}`} className="link-underline hover:text-white">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-white/40">© {new Date().getFullYear()} Onenex. All rights reserved.</p>
        <button
          onClick={scrollTop}
          data-testid="scroll-top"
          className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-white/60 hover:text-[#FF9D00] transition-colors group"
        >
          Back to top
          <span className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-[#FF9D00] group-hover:bg-[#FF9D00] group-hover:text-[#0A0A0A] transition-colors">
            <ArrowUp className="w-4 h-4" />
          </span>
        </button>
      </div>
    </footer>
  );
}
