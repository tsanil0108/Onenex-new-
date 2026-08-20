import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { MagneticButton } from "../components/Motion";
import { SERVICES } from "../lib/data";
import { SERVICE_ICONS } from "../lib/serviceIcons";

export default function ServiceDetail() {
  const { slug } = useParams();
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const service = SERVICES[idx];
  const next = SERVICES[(idx + 1) % SERVICES.length];
  const Icon = service ? SERVICE_ICONS[service.icon] : null;

  if (!service) {
    return (
      <div className="pt-40 min-h-screen max-w-[1600px] mx-auto px-6 md:px-12" data-testid="service-not-found">
        <h1 className="font-display text-6xl">Service not found</h1>
        <Link to="/services" className="text-[#FF9D00] font-heading mt-6 inline-block link-underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-40" data-testid={`service-detail-${slug}`}>
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 font-heading text-sm uppercase tracking-widest text-white/40 mb-8">
          <Link to="/services" className="link-underline hover:text-white">Services</Link>
          <span>/</span>
          <span className="text-[#FF9D00] flex items-center gap-2">
            {Icon && <Icon className="w-5 h-5" strokeWidth={1.5} />} {service.title}
          </span>
        </div>
        <h1 className="font-display text-[13vw] md:text-[9vw] uppercase leading-[0.85]">
          <MaskedLinesInView lines={[service.title]} lineClassName="text-white" />
        </h1>
        <Reveal delay={0.15}>
          <p className="font-heading text-xl md:text-2xl text-[#FF9D00] mt-6">{service.tagline}</p>
        </Reveal>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed">{service.excerpt}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-white/50 text-base mt-6 leading-relaxed">
              Every engagement is bespoke. We start with strategy, align on a clear direction, then
              execute with relentless attention to craft — delivering work that performs as beautifully
              as it looks, across every screen and every print.
            </p>
          </Reveal>

          <div className="mt-12">
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-white/40 mb-6">What’s included</h3>
            <ul className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {service.deliverables.map((d, i) => (
                <Reveal key={i} delay={i * 0.05} className="bg-[#0A0A0A] p-5 flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FF9D00] shrink-0" />
                  <span className="font-body text-white/80">{d}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* sticky image */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <Reveal>
              <div className="overflow-hidden border border-white/10 aspect-[4/5]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover img-grayscale" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <MagneticButton
                to="/contact"
                data-testid="service-cta"
                className="mt-6 w-full inline-flex items-center justify-center gap-3 bg-[#FF9D00] text-[#0A0A0A] px-8 py-5 font-heading text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300"
              >
                Discuss this project <ArrowUpRight className="w-5 h-5" />
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Next service */}
      <section className="mt-28 border-t border-white/10">
        <Link to={`/services/${next.slug}`} className="group block relative overflow-hidden" data-testid="next-service">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-14 flex items-center justify-between relative z-10 transition-colors duration-500 group-hover:text-[#0A0A0A]">
            <div>
              <p className="font-heading text-xs uppercase tracking-widest text-[#FF9D00] group-hover:text-[#0A0A0A] mb-3">Next service</p>
              <span className="font-display text-5xl md:text-7xl uppercase">{next.title}</span>
            </div>
            <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div className="absolute inset-0 bg-[#FF9D00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        </Link>
      </section>
    </div>
  );
}
