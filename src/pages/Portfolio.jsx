import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { PORTFOLIO } from "../lib/data";

const FILTERS = ["All", "Branding", "Identity & Print", "Digital", "Packaging", "Corporate Identity", "Brand Promotion"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <div className="pt-32 md:pt-40" data-testid="portfolio-page">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#FF9D00] mb-6">/ Selected work</p>
        <h1 className="font-display text-[15vw] md:text-[11vw] uppercase leading-[0.82]">
          <MaskedLinesInView lines={["Our", "Projects"]} lineClassName="text-white" />
        </h1>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-3 mt-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-testid={`filter-${f.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className={`px-5 py-2 font-heading text-xs uppercase tracking-widest border transition-colors duration-300 ${
                  filter === f
                    ? "bg-[#FF9D00] text-[#0A0A0A] border-[#FF9D00]"
                    : "border-white/20 text-white/60 hover:border-[#FF9D00] hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-16 grid md:grid-cols-2 gap-6 md:gap-10 pb-10">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "md:mt-20" : ""}>
            <div className="group cursor-pointer" data-testid={`work-${i}`}>
              <div className="relative overflow-hidden aspect-[4/3] border border-white/10">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover img-grayscale group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <div className="absolute top-5 right-5 w-12 h-12 bg-[#FF9D00] text-[#0A0A0A] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold group-hover:text-[#FF9D00] transition-colors">{p.title}</h3>
                  <p className="font-body text-white/50 text-sm mt-1">{p.category}</p>
                </div>
                <span className="font-heading text-white/40 text-sm">{p.year}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
