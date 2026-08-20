import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { SERVICES } from "../lib/data";
import { SERVICE_ICONS } from "../lib/serviceIcons";

export default function Services() {
  return (
    <div className="pt-32 md:pt-40" data-testid="services-page">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#FF9D00] mb-6">/ Services</p>
        <h1 className="font-display text-[15vw] md:text-[11vw] uppercase leading-[0.82]">
          <MaskedLinesInView lines={["What", "We Do"]} lineClassName="text-white" />
        </h1>
        <Reveal delay={0.2}>
          <p className="font-body text-white/60 text-lg max-w-xl mt-10">
            Six disciplines, one obsession — building brands that get seen, felt and remembered.
            Explore how we can elevate yours.
          </p>
        </Reveal>
      </section>

      <section className="mt-24 border-t border-white/10">
        {SERVICES.map((s) => {
          const Icon = SERVICE_ICONS[s.icon];
          return (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            data-testid={`service-item-${s.slug}`}
            className="group block border-b border-white/10 relative overflow-hidden"
          >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-10 md:py-14 grid md:grid-cols-12 items-center gap-6 relative z-10 transition-colors duration-500 group-hover:text-[#0A0A0A]">
              <span className="md:col-span-1 text-[#FF9D00] group-hover:text-[#0A0A0A]">
                {Icon && <Icon className="w-9 h-9" strokeWidth={1.5} />}
              </span>
              <div className="md:col-span-5">
                <h2 className="font-display text-5xl md:text-7xl uppercase">{s.title}</h2>
              </div>
              <p className="md:col-span-5 font-body text-white/60 group-hover:text-[#0A0A0A]/70 text-base max-w-md">{s.excerpt}</p>
              <div className="md:col-span-1 flex justify-end">
                <ArrowUpRight className="w-10 h-10 transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </div>
            <div className="absolute inset-0 bg-[#FF9D00] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </Link>
          );
        })}
      </section>
    </div>
  );
}
