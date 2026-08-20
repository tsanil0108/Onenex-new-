import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { MagneticButton } from "../components/Motion";
import { SERVICES } from "../lib/data";
import { SERVICE_ICONS } from "../lib/serviceIcons";

const EASE = [0.76, 0, 0.24, 1];

export default function ServiceDetail() {
  const { slug } = useParams();

  const idx = SERVICES.findIndex((service) => service.slug === slug);
  const service = SERVICES[idx];

  const next =
    idx >= 0
      ? SERVICES[(idx + 1) % SERVICES.length]
      : SERVICES[0];

  const Icon = service ? SERVICE_ICONS[service.icon] : null;

  if (!service) {
    return (
      <div
        className="
          pt-32
          sm:pt-36
          md:pt-40
          min-h-screen
          max-w-[1600px]
          mx-auto
          px-5
          sm:px-7
          md:px-10
          lg:px-12
        "
        data-testid="service-not-found"
      >
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase text-white">
          Service Not Found
        </h1>

        <Link
          to="/services"
          className="
            inline-flex
            items-center
            gap-2
            mt-8
            text-[#FF9D00]
            font-heading
            uppercase
            tracking-widest
            text-sm
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div
      className="pt-28 sm:pt-32 md:pt-40 overflow-hidden"
      data-testid={`service-detail-${slug}`}
    >
      {/* =========================================
          HERO
      ========================================== */}
      <section className="relative max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute -top-24 right-0 w-72 h-72 md:w-[450px] md:h-[450px] bg-[#FF9D00]/10 rounded-full blur-[120px]" />

        {/* Breadcrumb */}
        <Reveal>
          <div
            className="
              relative
              z-10
              flex
              flex-wrap
              items-center
              gap-3
              sm:gap-4
              font-heading
              text-[10px]
              sm:text-xs
              md:text-sm
              uppercase
              tracking-widest
              text-white/40
              mb-7
              md:mb-8
            "
          >
            <Link
              to="/services"
              className="hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Services
            </Link>

            <span className="w-1 h-1 rounded-full bg-white/25" />

            <span className="text-[#FF9D00] flex items-center gap-2">
              {Icon && (
                <Icon
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  strokeWidth={1.5}
                />
              )}

              {service.title}
            </span>
          </div>
        </Reveal>

        {/* Heading */}
        <h1
          className="
            relative
            z-10
            font-display
            text-[15vw]
            sm:text-[12vw]
            md:text-[9vw]
            lg:text-[8vw]
            xl:text-[7vw]
            uppercase
            leading-[0.84]
            tracking-[-0.02em]
          "
        >
          <MaskedLinesInView
            lines={[service.title]}
            lineClassName="text-white"
          />
        </h1>

        <Reveal delay={0.15}>
          <p
            className="
              relative
              z-10
              font-heading
              text-base
              sm:text-xl
              md:text-2xl
              text-[#FF9D00]
              mt-5
              sm:mt-6
            "
          >
            {service.tagline}
          </p>
        </Reveal>
      </section>

      {/* =========================================
          CONTENT
      ========================================== */}
      <section
        className="
          max-w-[1600px]
          mx-auto
          px-5
          sm:px-7
          md:px-10
          lg:px-12
          mt-12
          sm:mt-16
          md:mt-20
          grid
          md:grid-cols-12
          gap-10
          md:gap-12
          lg:gap-16
          items-start
        "
      >
        {/* LEFT */}
        <div className="md:col-span-7">
          <Reveal>
            <p
              className="
                font-body
                text-white/75
                text-base
                sm:text-lg
                md:text-xl
                leading-relaxed
                max-w-3xl
              "
            >
              {service.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="
                font-body
                text-white/50
                text-sm
                sm:text-base
                mt-6
                leading-relaxed
                max-w-3xl
              "
            >
              Every engagement is bespoke. We begin with strategy, align on a
              clear direction, then execute with focused attention to craft.
              The result is work designed to perform beautifully across every
              screen, platform and print touchpoint.
            </p>
          </Reveal>

          {/* INCLUDED */}
          <div className="mt-10 sm:mt-12 md:mt-14">
            <Reveal>
              <h3 className="font-heading text-xs sm:text-sm uppercase tracking-[0.3em] text-white/40 mb-5 sm:mb-6">
                What’s Included
              </h3>
            </Reveal>

            <div
              className="
                grid
                sm:grid-cols-2
                gap-3
                sm:gap-4
              "
            >
              {service.deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: EASE,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group
                    bg-white/[0.025]
                    border
                    border-white/10
                    rounded-xl
                    p-4
                    sm:p-5
                    flex
                    items-center
                    gap-3
                    hover:border-[#FF9D00]/40
                    hover:bg-[#FF9D00]/[0.04]
                    transition-colors
                    duration-300
                  "
                >
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-[#FF9D00]/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                      group-hover:bg-[#FF9D00]
                      transition-colors
                      duration-300
                    "
                  >
                    <Check className="w-4 h-4 text-[#FF9D00] group-hover:text-black transition-colors" />
                  </div>

                  <span className="font-body text-white/80 text-sm sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <Reveal>
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  sm:rounded-[28px]
                  border
                  border-white/10
                  aspect-[4/5]
                  bg-[#101010]
                "
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    grayscale
                    group-hover:grayscale-0
                  "
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: EASE,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5">
                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      border
                      border-white/15
                      bg-black/30
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                      text-[#FF9D00]
                    "
                  >
                    {Icon && (
                      <Icon
                        className="w-5 h-5"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.1}>
              <MagneticButton
                to="/contact"
                data-testid="service-cta"
                className="
                  mt-5
                  sm:mt-6
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#FF9D00]
                  text-[#0A0A0A]
                  px-6
                  sm:px-8
                  py-4
                  sm:py-5
                  rounded-full
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
                Discuss This Project
                <ArrowUpRight className="w-5 h-5" />
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================
          NEXT SERVICE
      ========================================== */}
      <section className="mt-20 sm:mt-24 md:mt-28 border-t border-white/10">
        <Link
          to={`/services/${next.slug}`}
          className="group block relative overflow-hidden"
          data-testid="next-service"
        >
          <motion.div
            className="absolute inset-0 bg-[#FF9D00] origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{
              duration: 0.55,
              ease: EASE,
            }}
          />

          <div
            className="
              max-w-[1600px]
              mx-auto
              px-5
              sm:px-7
              md:px-10
              lg:px-12
              py-10
              sm:py-12
              md:py-14
              flex
              items-center
              justify-between
              gap-5
              relative
              z-10
              transition-colors
              duration-500
              group-hover:text-[#0A0A0A]
            "
          >
            <div className="min-w-0">
              <p
                className="
                  font-heading
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-widest
                  text-[#FF9D00]
                  group-hover:text-[#0A0A0A]/60
                  mb-3
                  transition-colors
                "
              >
                Next Service
              </p>

              <span
                className="
                  block
                  font-display
                  text-3xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  uppercase
                  leading-none
                  text-white
                  group-hover:text-[#0A0A0A]
                  transition-colors
                  duration-500
                "
              >
                {next.title}
              </span>
            </div>

            <div
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                md:w-16
                md:h-16
                rounded-full
                border
                border-white/20
                flex
                items-center
                justify-center
                shrink-0
                group-hover:border-black/20
                transition-colors
              "
            >
              <ArrowUpRight
                className="
                  w-6
                  h-6
                  sm:w-7
                  sm:h-7
                  text-white
                  group-hover:text-black
                  group-hover:rotate-45
                  transition-all
                  duration-500
                "
              />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}