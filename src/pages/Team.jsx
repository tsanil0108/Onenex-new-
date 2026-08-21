import { motion } from "framer-motion";
import { UserRound, ArrowUpRight } from "lucide-react";
import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { TEAM } from "../lib/data";

const CARD_EASE = [0.22, 1, 0.36, 1];

export default function Team() {
  return (
    <div
      className="pt-28 sm:pt-32 md:pt-40 pb-28 md:pb-36 overflow-visible"
      data-testid="team-page"
    >
      {/* HERO */}
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

      {/* TEAM GRID */}
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

          gap-x-5
          sm:gap-x-6
          md:gap-x-8

          gap-y-10
          sm:gap-y-12
          lg:gap-y-20

          overflow-visible
        "
      >
        {TEAM.map((member, index) => {
          const hasImage =
            typeof member.image === "string" &&
            member.image.trim().length > 0;

          return (
            <Reveal
              key={member.name}
              delay={(index % 3) * 0.07}
              className="overflow-visible"
            >
              {/* =============================
                  NETFLIX STYLE OUTER WRAPPER
              ============================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.6,
                  ease: CARD_EASE,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -12,
                }}
                className="
                  group
                  relative
                  overflow-visible

                  lg:hover:z-[100]
                "
                data-testid={`team-member-${index}`}
              >
                {/* =============================
                    PHOTO CARD
                ============================== */}
                <div
                  className="
                    relative
                    overflow-hidden
                    aspect-[3/4]

                    rounded-[20px]
                    lg:group-hover:rounded-b-none

                    border
                    border-white/10
                    lg:group-hover:border-[#FF9D00]/50

                    bg-[#101010]

                    transition-all
                    duration-300

                    lg:group-hover:shadow-[0_20px_70px_rgba(0,0,0,0.65)]
                  "
                >
                  {/* REAL IMAGE - ORIGINAL COLOR */}
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
                        object-top
                      "
                      whileHover={{
                        scale: 1.035,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: CARD_EASE,
                      }}
                    />
                  ) : (
                    /* NO IMAGE */
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-[#111111]
                      "
                    >
                      <div
                        className="
                          absolute
                          w-52
                          h-52
                          rounded-full
                          bg-[#FF9D00]/10
                          blur-[80px]
                        "
                      />

                      <div
                        className="
                          relative
                          z-10
                          w-28
                          h-28
                          sm:w-32
                          sm:h-32
                          rounded-full
                          border
                          border-[#FF9D00]/40
                          bg-[#FF9D00]/10
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <UserRound
                          strokeWidth={1.2}
                          className="
                            w-14
                            h-14
                            sm:w-16
                            sm:h-16
                            text-[#FF9D00]
                          "
                        />
                      </div>
                    </div>
                  )}

                  {/* ONLY BOTTOM TEXT READABILITY
                      Photo colors are NOT changed */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-[42%]
                      bg-gradient-to-t
                      from-black/80
                      via-black/30
                      to-transparent
                      pointer-events-none
                    "
                  />

                  {/* MEMBER NUMBER */}
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      z-20

                      px-2.5
                      py-1
                      rounded-full

                      bg-black/30
                      backdrop-blur-md

                      font-heading
                      text-[10px]
                      tracking-[0.2em]
                      text-white/70
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* NORMAL TEXT */}
                  <div
                    className="
                      absolute
                      z-20
                      bottom-0
                      left-0
                      right-0

                      p-5
                      sm:p-6

                      lg:group-hover:opacity-0
                      lg:group-hover:translate-y-4

                      transition-all
                      duration-200
                    "
                  >
                    <div className="w-10 h-[2px] bg-[#FF9D00] mb-3" />

                    <h3
                      className="
                        font-heading
                        text-xl
                        sm:text-2xl
                        font-semibold
                        text-white
                        leading-tight
                      "
                    >
                      {member.name}
                    </h3>

                    <p
                      className="
                        font-heading
                        text-[#FF9D00]
                        text-xs
                        sm:text-sm
                        mt-1.5
                      "
                    >
                      {member.role}
                    </p>

                    {/* Mobile Expertise */}
                    {member.expertise && (
                      <p
                        className="
                          lg:hidden
                          font-body
                          text-white/75
                          text-xs
                          sm:text-sm
                          mt-2
                          leading-relaxed
                        "
                      >
                        {member.expertise}
                      </p>
                    )}
                  </div>
                </div>

                {/* =================================
                    NETFLIX HOVER INFORMATION PANEL
                ================================== */}
                <div
                  className="
                    hidden
                    lg:block

                    absolute
                    left-0
                    right-0
                    top-full

                    z-[110]

                    bg-[#151515]

                    border-x
                    border-b
                    border-[#FF9D00]/50

                    rounded-b-[20px]

                    px-5
                    py-5

                    opacity-0
                    invisible

                    translate-y-[-16px]
                    scale-y-[0.85]
                    origin-top

                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:scale-y-100

                    transition-all
                    duration-300

                    shadow-[0_28px_60px_rgba(0,0,0,0.65)]
                  "
                >
                  {/* SMALL ACCENT */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-[2px] bg-[#FF9D00]" />

                    <span
                      className="
                        font-heading
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-[#FF9D00]
                      "
                    >
                      Onenex Team
                    </span>
                  </div>

                  {/* NAME */}
                  <h3
                    className="
                      font-heading
                      text-xl
                      font-semibold
                      text-white
                      leading-tight
                    "
                  >
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p
                    className="
                      font-heading
                      text-[#FF9D00]
                      text-sm
                      font-semibold
                      mt-2
                    "
                  >
                    {member.role}
                  </p>

                  {/* EXPERTISE */}
                  {member.expertise && (
                    <p
                      className="
                        font-body
                        text-white/70
                        text-xs
                        leading-relaxed
                        mt-2
                      "
                    >
                      {member.expertise}
                    </p>
                  )}

                  {/* Decorative bottom */}
                  <div
                    className="
                      mt-4
                      pt-3
                      border-t
                      border-white/10
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        font-body
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white/35
                      "
                    >
                      Creative Team
                    </span>

                    <span
                      className="
                        w-7
                        h-7
                        rounded-full
                        border
                        border-white/15
                        flex
                        items-center
                        justify-center
                        text-[#FF9D00]
                      "
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
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
            whileHover={{
              scale: 1.04,
              y: -8,
            }}
            transition={{
              duration: 0.35,
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
              duration-300
            "
            data-testid="team-join"
          >
            <span className="font-heading text-xs uppercase tracking-[0.25em]">
              / Careers
            </span>

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