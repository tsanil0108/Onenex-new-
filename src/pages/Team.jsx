import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { TEAM } from "../lib/data";

export default function Team() {
  return (
    <div className="pt-32 md:pt-40" data-testid="team-page">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#FF9D00] mb-6">/ The people</p>
        <h1 className="font-display text-[15vw] md:text-[11vw] uppercase leading-[0.82]">
          <MaskedLinesInView lines={["Meet", "The Team"]} lineClassName="text-white" />
        </h1>
        <Reveal delay={0.2}>
          <p className="font-body text-white/60 text-lg max-w-xl mt-10">
            Seven senior minds — strategists, designers, developers and makers — all obsessed
            with building brands worth remembering.
          </p>
        </Reveal>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-20 grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10">
        {TEAM.map((m, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08}>
            <div className="group relative overflow-hidden border border-white/10 aspect-[3/4]" data-testid={`team-member-${i}`}>
              <img src={m.image} alt={m.name} className="w-full h-full object-cover img-grayscale group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="h-px w-10 bg-[#FF9D00] mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <h3 className="font-heading text-xl md:text-2xl font-semibold">{m.name}</h3>
                <p className="font-body text-[#FF9D00] text-sm mt-1">{m.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
        {/* Join card */}
        <Reveal delay={0.16}>
          <a href="/contact" className="group flex flex-col justify-between border border-[#FF9D00] bg-[#FF9D00] text-[#0A0A0A] aspect-[3/4] p-7" data-testid="team-join">
            <span className="font-heading text-xs uppercase tracking-widest">/ Careers</span>
            <span className="font-display text-5xl md:text-6xl uppercase leading-none">Join<br />the<br />studio</span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
