import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { Counter } from "../components/Motion";
import { STATS } from "../lib/data";

const VALUES = [
  { no: "01", title: "Clarity over clever", text: "We strip away noise until only the essential, powerful idea remains." },
  { no: "02", title: "Craft is non-negotiable", text: "Every pixel, every print — obsessed over until it feels inevitable." },
  { no: "03", title: "Strategy first", text: "Beautiful design that doesn't drive results is just decoration." },
  { no: "04", title: "Partners, not vendors", text: "We invest in your brand like it's our own name on the door." },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div className="pt-32 md:pt-40" data-testid="about-page">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#FF9D00] mb-6">/ About Onenex</p>
        <h1 className="font-display text-[14vw] md:text-[10vw] uppercase leading-[0.82]">
          <MaskedLinesInView lines={["A studio", "built on craft"]} lineClassName="text-white" />
        </h1>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-20 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-6" ref={ref}>
          <motion.div style={{ y }} className="overflow-hidden border border-white/10 aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1654780345432-79b8bf62def8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3ODQ5Nzc1NjB8MA&ixlib=rb-4.1.0&q=85"
              alt="studio"
              className="w-full h-full object-cover grayscale scale-110"
            />
          </motion.div>
        </div>
        <div className="md:col-span-6 md:pt-10">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight">
              We are a brand design & print studio based in India, working with clients worldwide.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-white/60 text-lg mt-8">
              For over a decade we’ve helped ambitious companies find their voice and show up
              boldly — through identity, promotion, digital and print. We believe great design
              is equal parts strategy and soul.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-white/60 text-lg mt-5">
              No templates. No shortcuts. Just a small, senior team that cares deeply about
              doing the work right.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="mt-28 border-y border-white/10 bg-[#FF9D00] text-[#0A0A0A]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <span className="font-display text-6xl md:text-8xl block leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <p className="font-body text-[#0A0A0A]/70 text-sm mt-3">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values / numbered chapters */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-28 md:py-40" data-testid="values">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#FF9D00] mb-4">/ Our principles</p>
        <h2 className="font-display text-6xl md:text-8xl uppercase leading-none mb-16">What we believe</h2>
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {VALUES.map((v, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08} className="bg-[#0A0A0A] p-10 group hover:bg-white hover:text-[#0A0A0A] transition-colors duration-500">
              <div className="flex items-start gap-6">
                <span className="font-display text-6xl text-[#FF9D00]">[{v.no}]</span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold">{v.title}</h3>
                  <p className="font-body text-white/50 group-hover:text-[#0A0A0A]/60 text-base mt-3 transition-colors">{v.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
