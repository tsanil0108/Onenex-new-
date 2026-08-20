import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { SERVICES } from "../lib/data";
import { SERVICE_ICONS } from "../lib/serviceIcons";

const EASE = [0.76, 0, 0.24, 1];

export default function Services() {
  return (
    <div
      className="min-h-screen bg-[#0A0A0A] pt-28 sm:pt-32 md:pt-40 overflow-hidden"
      data-testid="services-page"
    >
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="w-7 sm:w-10 h-px bg-[#FF9D00]" />

            <p className="font-heading text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#FF9D00]">
              Services
            </p>
          </div>
        </Reveal>

        <h1
          className="
            font-display
            text-[18vw]
            sm:text-[15vw]
            md:text-[11vw]
            lg:text-[9vw]
            xl:text-[8.5vw]
            uppercase
            leading-[0.82]
            tracking-[-0.02em]
          "
        >
          <MaskedLinesInView
            lines={["What", "We Do"]}
            lineClassName="text-white"
          />
        </h1>

        <Reveal delay={0.2}>
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-7">
            <p className="font-body text-white/55 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Six disciplines, one obsession — building brands that get seen,
              felt and remembered. Explore how we can elevate yours.
            </p>

            <div className="hidden md:flex items-center gap-3 text-white/30">
              <span className="font-heading text-[10px] uppercase tracking-[0.25em]">
                Explore services
              </span>

              <ArrowUpRight className="w-4 h-4 text-[#FF9D00]" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================
          SERVICES LIST
      ========================== */}
      <section className="mt-16 sm:mt-20 md:mt-24 border-t border-white/10">
        {SERVICES.map((service, index) => {
          const Icon = SERVICE_ICONS[service.icon];

          return (
            <motion.div
              key={service.slug}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.7,
                delay: Math.min(index * 0.06, 0.3),
                ease: EASE,
              }}
            >
              <Link
                to={`/services/${service.slug}`}
                data-testid={`service-item-${service.slug}`}
                className="
                  group
                  block
                  relative
                  overflow-hidden
                  border-b
                  border-white/10
                  bg-[#0A0A0A]
                  transition-colors
                  duration-500
                  hover:bg-[#101010]
                "
              >
                {/* subtle yellow hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    top-1/2
                    -translate-y-1/2
                    w-72
                    h-72
                    rounded-full
                    bg-[#FF9D00]/0
                    blur-[100px]
                    group-hover:bg-[#FF9D00]/10
                    transition-all
                    duration-700
                  "
                />

                {/* left yellow hover line */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    bottom-0
                    w-[3px]
                    bg-[#FF9D00]
                    scale-y-0
                    origin-center
                    group-hover:scale-y-100
                    transition-transform
                    duration-500
                  "
                />

                <div
                  className="
                    max-w-[1600px]
                    mx-auto
                    px-5
                    sm:px-7
                    md:px-10
                    lg:px-12
                    py-7
                    sm:py-9
                    md:py-12
                    lg:py-14
                    relative
                    z-10
                  "
                >
                  {/* DESKTOP */}
                  <div className="hidden md:grid md:grid-cols-12 items-center gap-6 lg:gap-8">
                    {/* ICON */}
                    <div className="md:col-span-1">
                      <div
                        className="
                          w-12
                          h-12
                          lg:w-14
                          lg:h-14
                          rounded-xl
                          border
                          border-[#FF9D00]/30
                          bg-[#FF9D00]/5
                          flex
                          items-center
                          justify-center
                          text-[#FF9D00]
                          group-hover:bg-[#FF9D00]
                          group-hover:text-[#0A0A0A]
                          group-hover:border-[#FF9D00]
                          group-hover:scale-105
                          transition-all
                          duration-400
                        "
                      >
                        {Icon && (
                          <Icon
                            className="w-6 h-6 lg:w-7 lg:h-7"
                            strokeWidth={1.5}
                          />
                        )}
                      </div>
                    </div>

                    {/* TITLE */}
                    <div className="md:col-span-5">
                      <span className="font-heading text-[10px] lg:text-xs text-white/30 tracking-[0.2em] block mb-2 group-hover:text-[#FF9D00]/70 transition-colors duration-300">
                        {service.index}
                      </span>

                      <h2
                        className="
                          font-display
                          text-4xl
                          lg:text-5xl
                          xl:text-6xl
                          2xl:text-7xl
                          uppercase
                          leading-[0.88]
                          text-white
                          group-hover:text-[#FF9D00]
                          transition-colors
                          duration-400
                        "
                      >
                        {service.title}
                      </h2>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="md:col-span-5">
                      <p
                        className="
                          font-body
                          text-white/50
                          group-hover:text-white/75
                          text-sm
                          lg:text-base
                          max-w-md
                          leading-relaxed
                          transition-colors
                          duration-400
                        "
                      >
                        {service.excerpt}
                      </p>
                    </div>

                    {/* ARROW */}
                    <div className="md:col-span-1 flex justify-end">
                      <div
                        className="
                          w-11
                          h-11
                          lg:w-12
                          lg:h-12
                          rounded-full
                          border
                          border-white/15
                          flex
                          items-center
                          justify-center
                          group-hover:border-[#FF9D00]
                          group-hover:bg-[#FF9D00]
                          transition-all
                          duration-400
                        "
                      >
                        <ArrowUpRight
                          className="
                            w-5
                            h-5
                            text-white
                            group-hover:text-[#0A0A0A]
                            group-hover:rotate-45
                            transition-all
                            duration-500
                          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* MOBILE */}
                  <div className="md:hidden">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 min-w-0">
                        {/* MOBILE ICON */}
                        <div
                          className="
                            shrink-0
                            w-11
                            h-11
                            sm:w-12
                            sm:h-12
                            rounded-xl
                            border
                            border-[#FF9D00]/30
                            bg-[#FF9D00]/5
                            flex
                            items-center
                            justify-center
                            text-[#FF9D00]
                          "
                        >
                          {Icon && (
                            <Icon
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              strokeWidth={1.5}
                            />
                          )}
                        </div>

                        <div className="min-w-0">
                          <span className="font-heading text-[9px] sm:text-[10px] text-white/30 tracking-[0.2em] block mb-1.5">
                            {service.index}
                          </span>

                          <h2
                            className="
                              font-display
                              text-[clamp(2rem,9vw,3.2rem)]
                              uppercase
                              leading-[0.88]
                              text-white
                            "
                          >
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      {/* MOBILE ARROW */}
                      <div
                        className="
                          shrink-0
                          w-9
                          h-9
                          sm:w-10
                          sm:h-10
                          rounded-full
                          border
                          border-white/15
                          flex
                          items-center
                          justify-center
                          mt-1
                        "
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9D00]" />
                      </div>
                    </div>

                    <p className="font-body text-white/45 text-xs sm:text-sm leading-relaxed mt-5 pl-0 sm:pl-16">
                      {service.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[#FF9D00]">
                      <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.2em]">
                        View service
                      </span>

                      <span className="w-6 h-px bg-[#FF9D00]" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </section>

      {/* =========================
          BOTTOM CTA
      ========================== */}
      <section className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12 py-20 sm:py-24 md:py-32">
        <Reveal>
          <div
            className="
              relative
              overflow-hidden
              border
              border-white/10
              rounded-2xl
              sm:rounded-3xl
              px-6
              sm:px-10
              md:px-14
              py-10
              sm:py-12
              md:py-16
              bg-[#0D0D0D]
            "
          >
            {/* glow */}
            <div className="absolute -right-20 -bottom-28 w-80 h-80 bg-[#FF9D00]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#FF9D00] mb-4">
                  Have a project?
                </p>

                <h2
                  className="
                    font-display
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    uppercase
                    leading-[0.9]
                    text-white
                  "
                >
                  Let's build
                  <br />
                  something great.
                </h2>
              </div>

              <Link
                to="/contact"
                className="
                  group/cta
                  w-full
                  sm:w-fit
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#FF9D00]
                  text-[#0A0A0A]
                  px-7
                  sm:px-9
                  py-4
                  sm:py-5
                  font-heading
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-widest
                  font-semibold
                  hover:bg-white
                  transition-colors
                  duration-300
                "
              >
                Start a project

                <ArrowUpRight className="w-5 h-5 group-hover/cta:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}