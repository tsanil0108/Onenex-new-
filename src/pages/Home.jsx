import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Quote } from "lucide-react";
import { MaskedLines, Reveal } from "../components/Reveal";
import { Counter, MagneticButton } from "../components/Motion";
import { SERVICES, PORTFOLIO, STATS, PROCESS, CLIENTS, TESTIMONIALS } from "../lib/data";
import { SERVICE_ICONS } from "../lib/serviceIcons";

const EASE = [0.76, 0, 0.24, 1];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen pt-40 pb-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 font-heading text-xs uppercase tracking-[0.25em] text-[#FF9D00] mb-8"
              data-testid="hero-eyebrow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9D00]" /> Creative Branding Agency
            </motion.span>

            <h1 className="font-display text-[12vw] sm:text-[9vw] lg:text-[4.6vw] leading-[0.98] uppercase">
              <MaskedLines lines={["We Design", "Brands That"]} lineClassName="text-white" delay={0.25} />
              <MaskedLines lines={["Make An Impact."]} lineClassName="text-[#FF9D00]" delay={0.45} />
            </h1>

            <Reveal delay={0.5}>
              <p className="mt-8 font-body text-white/60 text-base md:text-lg max-w-lg leading-relaxed" data-testid="hero-copy">
                Onenex — Brand Design &amp; Print helps businesses stand out with powerful branding,
                creative design and digital solutions that drive real results.
              </p>
            </Reveal>

            <Reveal delay={0.6} className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton
                to="/portfolio"
                data-testid="hero-cta-primary"
                className="inline-flex items-center gap-2 bg-[#FF9D00] text-[#0A0A0A] px-7 py-4 font-heading text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-white transition-colors duration-300"
              >
                Explore Our Work <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                to="/services"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-4 font-heading text-sm uppercase tracking-widest rounded-full hover:border-[#FF9D00] hover:text-[#FF9D00] transition-colors duration-300"
              >
                Our Services
              </MagneticButton>
            </Reveal>

            <Reveal delay={0.7} className="mt-14">
              <p className="font-heading text-xs uppercase tracking-widest text-white/35 mb-4">Trusted by 150+ companies</p>
              <div className="flex items-center gap-8 flex-wrap opacity-60">
                {CLIENTS.slice(0, 5).map((c) => (
                  <span key={c} className="font-heading text-sm tracking-widest text-white/60">{c}</span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right */}
          {/* Right */}
          <motion.div style={{ y: yImg }} className="relative">
            <div
              className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0A0A0A]"
              data-testid="hero-image"
            >
              <img
                src="/assets/cover-page.png"
                alt="Onenex"
                className="w-full h-auto object-contain block"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute -z-10 -top-16 -right-16 w-72 h-72 rounded-full bg-[#FF9D00]/20 blur-[100px]" />
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">What We Do</p>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-white">Solutions That Elevate Your Brand</h2>
            </div>
            <p className="font-body text-white/50 max-w-md">
              From strategy to execution, we offer end-to-end branding, digital and print solutions tailored to your business goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.icon];
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group block h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#FF9D00]/50 hover:bg-white/[0.05] transition-all duration-300"
                    data-testid={`solution-card-${s.slug}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FF9D00]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF9D00] transition-colors duration-300">
                      {Icon && <Icon className="w-6 h-6 text-[#FF9D00] group-hover:text-[#0A0A0A] transition-colors duration-300" />}
                    </div>
                    <h3 className="font-heading text-lg text-white mb-2">{s.title}</h3>
                    <p className="font-body text-white/50 text-sm leading-relaxed mb-6">{s.tagline}</p>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#FF9D00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">Our Work</p>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-white">Featured Projects</h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 border border-white/20 rounded-full px-6 py-3 font-heading text-sm uppercase tracking-widest text-white hover:border-[#FF9D00] hover:text-[#FF9D00] transition-colors duration-300" data-testid="view-all-projects">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.slice(0, 6).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className={i === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
                <Link to="/portfolio" className="group block h-full relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]" data-testid={`project-card-${i}`}>
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover img-grayscale group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <p className="font-heading text-xs uppercase tracking-widest text-[#FF9D00] mb-1">{p.category}</p>
                      <h3 className="font-heading text-xl text-white">{p.title}</h3>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#FF9D00] group-hover:border-[#FF9D00] transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#0A0A0A]" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Link to="/portfolio" className="md:hidden mt-10 inline-flex items-center gap-2 border border-white/20 rounded-full px-6 py-3 font-heading text-sm uppercase tracking-widest text-white">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="font-body text-white/50 text-sm mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">Our Proven Process</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-white">A Process Built For Success</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />
            {PROCESS.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.1} className="relative">
                <div className="w-12 h-12 rounded-full border border-[#FF9D00] bg-[#0A0A0A] flex items-center justify-center font-heading text-sm text-[#FF9D00] mb-6 relative z-10">
                  {p.no}
                </div>
                <h3 className="font-heading text-xl text-white mb-2">{p.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">Testimonials</p>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-white">What Our Clients Say</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col">
                <Quote className="w-8 h-8 text-[#FF9D00] mb-6" />
                <p className="font-body text-white/70 leading-relaxed mb-8 flex-1">"{t.quote}"</p>
                <div>
                  <p className="font-heading text-white">{t.name}</p>
                  <p className="font-body text-white/40 text-sm">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <Reveal className="relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#FF9D00]/15 via-[#0A0A0A] to-[#0A0A0A] px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">Have A Project In Mind?</p>
              <h2 className="font-display text-3xl md:text-5xl uppercase text-white max-w-2xl">
                Let's Build Something Amazing <span className="text-[#FF9D00]">Together.</span>
              </h2>
            </div>
            <MagneticButton
              to="/contact"
              data-testid="cta-start-project"
              className="inline-flex items-center gap-2 bg-[#FF9D00] text-[#0A0A0A] px-8 py-5 font-heading text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-white transition-colors duration-300 shrink-0"
            >
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
