import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

import { MaskedLines, Reveal } from "../components/Reveal";
import { Counter, MagneticButton } from "../components/Motion";

import {
  SERVICES,
  PORTFOLIO,
  STATS,
  PROCESS,
  TESTIMONIALS,
} from "../lib/data";

import { SERVICE_ICONS } from "../lib/serviceIcons";

const EASE = [0.76, 0, 0.24, 1];

export default function Home() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div data-testid="home-page">

      {/* ======================================================
          HERO
      ====================================================== */}
      <section
        ref={heroRef}
        className="
          relative
          min-h-[100svh]
          lg:min-h-screen
          overflow-hidden
          flex
          items-center
        "
      >
        {/* Background Image */}
        <motion.div
          style={{ y: yImg }}
          className="absolute inset-0 z-0 scale-[1.03]"
        >
          <img
            src="/assets/cover-page.png"
            alt="Onenex Brand Design"
            className="
              w-full
              h-full
              object-cover
              object-[64%_center]
              sm:object-[61%_center]
              md:object-[59%_center]
              lg:object-[58%_center]
              xl:object-center
            "
          />
        </motion.div>

        {/* Left Dark Gradient */}
        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-[#050505]/95
            via-[#050505]/78
            to-[#050505]/20
            sm:via-[#050505]/72
            lg:via-[#050505]/60
            lg:to-transparent
          "
        />

        {/* Bottom Gradient */}
        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-gradient-to-t
            from-[#050505]/90
            via-transparent
            to-[#050505]/20
            lg:from-[#050505]/50
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-[1600px]
            mx-auto
            px-5
            sm:px-7
            md:px-10
            lg:px-14
            xl:px-20
            pt-28
            sm:pt-32
            md:pt-36
            lg:pt-40
            pb-14
            sm:pb-16
            md:pb-20
          "
        >
          <div
            className="
              max-w-[95%]
              sm:max-w-[620px]
              md:max-w-[670px]
              lg:max-w-[650px]
              xl:max-w-[690px]
            "
          >

            {/* Small Badge */}
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: EASE,
              }}
              className="
                inline-flex
                items-center
                gap-2
                bg-black/30
                backdrop-blur-md
                border
                border-white/20
                rounded-full
                px-3.5
                sm:px-4
                py-2
                font-heading
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.20em]
                sm:tracking-[0.25em]
                text-[#FF9D00]
                mb-6
                sm:mb-8
              "
              data-testid="hero-eyebrow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9D00]" />

              Creative Branding Agency
            </motion.span>

            {/* Main Heading */}
            <h1
              className="
                font-display
                uppercase
                leading-[0.92]
                tracking-[-0.02em]
                text-[15vw]
                sm:text-[10vw]
                md:text-[7.4vw]
                lg:text-[5.1vw]
                xl:text-[4.7vw]
                2xl:text-[4.35vw]
              "
            >
              <MaskedLines
                lines={["We Design", "Brands That"]}
                lineClassName="text-white"
                delay={0.25}
              />

              <MaskedLines
                lines={["Make An", "Impact."]}
                lineClassName="text-[#FF9D00]"
                delay={0.45}
              />
            </h1>

            {/* Description */}
            <Reveal delay={0.5}>
              <p
                className="
                  mt-6
                  sm:mt-8
                  font-body
                  text-white/75
                  text-sm
                  sm:text-base
                  md:text-lg
                  max-w-[95%]
                  sm:max-w-[570px]
                  leading-[1.65]
                "
                data-testid="hero-copy"
              >
                Onenex — Brand Design &amp; Print helps businesses stand out
                with powerful branding, creative design and digital solutions
                that drive real results.
              </p>
            </Reveal>

            {/* Buttons */}
            <Reveal
              delay={0.6}
              className="
                mt-7
                sm:mt-9
                flex
                flex-col
                sm:flex-row
                sm:flex-wrap
                items-stretch
                sm:items-center
                gap-3
                sm:gap-4
              "
            >
              <MagneticButton
                to="/portfolio"
                data-testid="hero-cta-primary"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#FF9D00]
                  text-[#0A0A0A]
                  px-6
                  sm:px-7
                  py-3.5
                  sm:py-4
                  font-heading
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-widest
                  font-semibold
                  rounded-full
                  hover:bg-white
                  transition-colors
                  duration-300
                  w-full
                  sm:w-auto
                "
              >
                Explore Our Work
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                to="/services"
                data-testid="hero-cta-secondary"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-white/30
                  bg-black/20
                  backdrop-blur-md
                  text-white
                  px-6
                  sm:px-7
                  py-3.5
                  sm:py-4
                  font-heading
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-widest
                  rounded-full
                  hover:border-[#FF9D00]
                  hover:text-[#FF9D00]
                  transition-colors
                  duration-300
                  w-full
                  sm:w-auto
                "
              >
                Our Services
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES
      ====================================================== */}
      <section className="py-20 sm:py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">
                What We Do
              </p>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-none">
                Solutions That Elevate Your Brand
              </h2>
            </div>

            <p className="font-body text-white/50 max-w-md text-sm sm:text-base leading-relaxed">
              From strategy to execution, we offer end-to-end branding,
              digital and print solutions tailored to your business goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.icon];

              return (
                <Reveal key={service.slug} delay={index * 0.08}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="
                      group
                      block
                      h-full
                      bg-white/[0.03]
                      border
                      border-white/10
                      rounded-2xl
                      p-6
                      sm:p-8
                      hover:border-[#FF9D00]/50
                      hover:bg-white/[0.05]
                      transition-all
                      duration-300
                    "
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FF9D00]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF9D00] transition-colors duration-300">
                      {Icon && (
                        <Icon className="w-6 h-6 text-[#FF9D00] group-hover:text-[#0A0A0A] transition-colors duration-300" />
                      )}
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl text-white mb-2">
                      {service.title}
                    </h3>

                    <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
                      {service.tagline}
                    </p>

                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#FF9D00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURED PROJECTS
      ====================================================== */}
      <section className="py-20 sm:py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12">

          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">
                Our Work
              </p>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-none">
                Featured Projects
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="
                hidden
                md:inline-flex
                items-center
                gap-2
                border
                border-white/20
                rounded-full
                px-6
                py-3
                font-heading
                text-sm
                uppercase
                tracking-widest
                text-white
                hover:border-[#FF9D00]
                hover:text-[#FF9D00]
                transition-colors
                duration-300
              "
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {PORTFOLIO.slice(0, 6).map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 0.06}
                className={
                  index === 0
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                    : ""
                }
              >
                <Link
                  to="/portfolio"
                  className="
                    group
                    block
                    h-full
                    relative
                    rounded-2xl
                    overflow-hidden
                    border
                    border-white/10
                    aspect-[4/3]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      img-grayscale
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-between">
                    <div>
                      <p className="font-heading text-[10px] sm:text-xs uppercase tracking-widest text-[#FF9D00] mb-1">
                        {project.category}
                      </p>

                      <h3 className="font-heading text-lg sm:text-xl text-white">
                        {project.title}
                      </h3>
                    </div>

                    <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#FF9D00] group-hover:border-[#FF9D00] transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#0A0A0A]" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Link
            to="/portfolio"
            className="
              md:hidden
              mt-8
              inline-flex
              items-center
              gap-2
              border
              border-white/20
              rounded-full
              px-6
              py-3
              font-heading
              text-xs
              uppercase
              tracking-widest
              text-white
            "
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ======================================================
          STATS
      ====================================================== */}
      <section className="py-14 sm:py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="text-center md:text-left"
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-white">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <p className="font-body text-white/50 text-xs sm:text-sm mt-2">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">
              Our Proven Process
            </p>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-none">
              A Process Built For Success
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />

            {PROCESS.map((step, index) => (
              <Reveal
                key={step.no}
                delay={index * 0.1}
                className="relative"
              >
                <div className="w-12 h-12 rounded-full border border-[#FF9D00] bg-[#0A0A0A] flex items-center justify-center font-heading text-sm text-[#FF9D00] mb-6 relative z-10">
                  {step.no}
                </div>

                <h3 className="font-heading text-lg sm:text-xl text-white mb-2">
                  {step.title}
                </h3>

                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="py-20 sm:py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12">
          <div className="mb-10 md:mb-14">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">
              Testimonials
            </p>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-none">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 0.1}
                className="
                  bg-white/[0.03]
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  sm:p-8
                  flex
                  flex-col
                "
              >
                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF9D00] mb-6" />

                <p className="font-body text-white/70 text-sm sm:text-base leading-relaxed mb-8 flex-1">
                  "{testimonial.quote}"
                </p>

                <div>
                  <p className="font-heading text-white">
                    {testimonial.name}
                  </p>

                  <p className="font-body text-white/40 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}
      <section className="pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12">
          <Reveal
            className="
              relative
              rounded-[24px]
              sm:rounded-[32px]
              overflow-hidden
              border
              border-white/10
              bg-gradient-to-br
              from-[#FF9D00]/15
              via-[#0A0A0A]
              to-[#0A0A0A]
              px-6
              sm:px-8
              md:px-16
              py-12
              sm:py-16
              md:py-20
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-8
            "
          >
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#FF9D00] mb-4">
                Have A Project In Mind?
              </p>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white max-w-2xl leading-none">
                Let's Build Something Amazing{" "}
                <span className="text-[#FF9D00]">
                  Together.
                </span>
              </h2>
            </div>

            <MagneticButton
              to="/contact"
              data-testid="cta-start-project"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-[#FF9D00]
                text-[#0A0A0A]
                px-7
                sm:px-8
                py-4
                sm:py-5
                font-heading
                text-xs
                sm:text-sm
                uppercase
                tracking-widest
                font-semibold
                rounded-full
                hover:bg-white
                transition-colors
                duration-300
                w-full
                sm:w-auto
                shrink-0
              "
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}