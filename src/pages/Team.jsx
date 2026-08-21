import { motion } from "framer-motion";
import { UserRound, ArrowUpRight } from "lucide-react";
import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { TEAM } from "../lib/data";

const CARD_EASE = [0.76, 0, 0.24, 1];

export default function Team() {
  return (
    <div
      className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24"
      data-testid="team-page"
    >
      {/* =========================
          HERO
      ========================== */}
      <section className="max-w-[1600px] mx-auto px-5 sm:px-7 md:px-10 lg:px-12">
        <Reveal>
          <p className="font-heading text-xs sm:text-sm uppercase tracking-[0.3em] text-[#FF9D00] mb-5 md:mb-6">
            / The people
          </p>
        </Reveal>

        <h1
          className="
            font-display
            text-[18vw]
            sm:text-[14vw]
            md:text-[11vw]
            lg:text-[9vw]
            xl:text-[8vw]
            uppercase
            leading-[0.82]
          "
        >
          <MaskedLinesInView
            lines={["Meet", "The Team"]}
            lineClassName="text-white"
          />
        </h1>

        <Reveal delay={0.2}>
          <p className="font-body text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mt-7 md:mt-10 leading-relaxed">
            Strategists, designers, developers and makers — all obsessed with
            building brands worth remembering.
          </p>
        </Reveal>
      </section>

      {/* =========================
          TEAM GRID
      ========================== */}
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
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
          md:gap-8
        "
      >
        {TEAM.map((member, index) => {
          const hasImage =
            typeof member.image === "string" &&
            member.image.trim().length > 0;

          const isArvind = member.name === "Arvind Vishwakarma";

          return (
            <Reveal
              key={member.name}
              delay={(index % 3) * 0.08}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.06,
                  ease: CARD_EASE,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  aspect-[3/4]
                  rounded-[20px]
                  sm:rounded-[24px]
                  border
                  border-white/10
                  bg-[#101010]
                  hover:border-[#FF9D00]/50
                  transition-colors
                  duration-500
                "
                data-testid={`team-member-${index}`}
              >
                {/* =========================
                    IMAGE AVAILABLE
                ========================== */}
                {hasImage ? (
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      grayscale
                      group-hover:grayscale-0
                    "
                    initial={{
                      scale: 1.04,
                    }}
                    whileHover={{
                      scale: 1.09,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: CARD_EASE,
                    }}
                  />
                ) : (
                  /* =========================
                      NO IMAGE
                  ========================== */
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-[#161616]
                      via-[#0D0D0D]
                      to-[#050505]
                    "
                  >
                    {/* Big Background Initial */}
                    <span
                      className="
                        absolute
                        font-display
                        text-[55vw]
                        sm:text-[28vw]
                        lg:text-[18vw]
                        text-white/[0.025]
                        uppercase
                        select-none
                        leading-none
                      "
                    >
                      {member.name.charAt(0)}
                    </span>

                    {/* Orange Glow */}
                    <div
                      className="
                        absolute
                        w-52
                        h-52
                        md:w-64
                        md:h-64
                        rounded-full
                        bg-[#FF9D00]/10
                        blur-[80px]
                        group-hover:bg-[#FF9D00]/20
                        transition-all
                        duration-700
                      "
                    />

                    {/* User Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 2,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="
                        relative
                        z-10
                        w-28
                        h-28
                        sm:w-32
                        sm:h-32
                        md:w-36
                        md:h-36
                        rounded-full
                        border
                        border-[#FF9D00]/40
                        bg-[#FF9D00]/10
                        flex
                        items-center
                        justify-center
                        shadow-[0_0_60px_rgba(255,157,0,0.08)]
                        group-hover:border-[#FF9D00]
                        group-hover:bg-[#FF9D00]/15
                        transition-all
                        duration-500
                      "
                    >
                      <UserRound
                        strokeWidth={1.2}
                        className="
                          w-14
                          h-14
                          sm:w-16
                          sm:h-16
                          md:w-20
                          md:h-20
                          text-[#FF9D00]
                        "
                      />
                    </motion.div>
                  </div>
                )}

                {/* =========================
                    GRADIENT OVERLAY
                ========================== */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#050505]
                    via-[#050505]/20
                    to-transparent
                    pointer-events-none
                  "
                />

                {/* =========================
                    NUMBER
                ========================== */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    z-20
                    font-heading
                    text-xs
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* =========================
                    MEMBER DETAILS
                ========================== */}
                <div
                  className="
                    absolute
                    z-20
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-6
                    md:p-7
                  "
                >
                  {/* Yellow Line */}
                  <div
                    className="
                      h-[2px]
                      w-10
                      bg-[#FF9D00]
                      mb-4
                      origin-left
                      scale-x-50
                      group-hover:scale-x-100
                      transition-transform
                      duration-500
                    "
                  />

                  {/* =========================
                      ONLY ARVIND:
                      ROLE FIRST → NAME BELOW
                  ========================== */}
                  {isArvind ? (
                    <>
                      <p
                        className="
                          font-body
                          text-[#FF9D00]
                          text-xs
                          sm:text-sm
                          leading-relaxed
                          mb-2
                        "
                      >
                        {member.role}
                      </p>

                      <h3
                        className="
                          font-heading
                          text-xl
                          md:text-2xl
                          font-semibold
                          text-white
                          leading-tight
                        "
                      >
                        {member.name}
                      </h3>
                    </>
                  ) : (
                    <>
                      {/* =========================
                          ALL OTHER MEMBERS:
                          NAME FIRST → ROLE BELOW
                      ========================== */}
                      <h3
                        className="
                          font-heading
                          text-xl
                          md:text-2xl
                          font-semibold
                          text-white
                          leading-tight
                        "
                      >
                        {member.name}
                      </h3>

                      <p
                        className="
                          font-body
                          text-[#FF9D00]
                          text-xs
                          sm:text-sm
                          mt-2
                          leading-relaxed
                        "
                      >
                        {member.role}
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            </Reveal>
          );
        })}

        {/* =========================
            JOIN CARD
        ========================== */}
        <Reveal delay={0.15}>
          <motion.a
            href="/contact"
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            whileHover={{
              y: -7,
            }}
            transition={{
              duration: 0.7,
              ease: CARD_EASE,
            }}
            className="
              group
              relative
              overflow-hidden
              flex
              flex-col
              justify-between
              aspect-[3/4]
              rounded-[20px]
              sm:rounded-[24px]
              border
              border-[#FF9D00]
              bg-[#FF9D00]
              text-[#080808]
              p-6
              sm:p-7
              md:p-8
              hover:bg-white
              hover:border-white
              transition-colors
              duration-500
            "
            data-testid="team-join"
          >
            <span className="font-heading text-xs uppercase tracking-[0.25em]">
              / Careers
            </span>

            {/* Circle Animation */}
            <div
              className="
                absolute
                w-56
                h-56
                md:w-72
                md:h-72
                rounded-full
                border
                border-black/10
                -right-20
                top-1/2
                -translate-y-1/2
                group-hover:scale-125
                transition-transform
                duration-700
              "
            />

            <h2
              className="
                relative
                z-10
                font-display
                uppercase
                text-6xl
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
                leading-[0.85]
              "
            >
              Join
              <br />
              the
              <br />
              studio
            </h2>

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-heading text-xs uppercase tracking-[0.2em]">
                Work with us
              </span>

              <ArrowUpRight
                className="
                  w-7
                  h-7
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform
                  duration-300
                "
              />
            </div>
          </motion.a>
        </Reveal>
      </section>
    </div>
  );
}