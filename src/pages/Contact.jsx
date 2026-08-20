import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Loader2,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

import { MaskedLinesInView, Reveal } from "../components/Reveal";
import { CONTACT, SOCIALS } from "../lib/data";

const SOCIAL_ICONS = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
};

const WEB3FORMS_KEY = "5c3edaf5-4340-4e20-96fc-170945873f79";

const BUDGETS = ["< ₹1L", "₹1L – ₹5L", "₹5L – ₹15L", "₹15L +"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Onenex enquiry from ${form.name}`,
          from_name: "Onenex Website",
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          budget: form.budget || "Not selected",
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
        });
      } else {
        console.error("Web3Forms error:", result);
        toast.error(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-white/20 py-3.5 font-body text-[16px] md:text-[17px] text-white placeholder-white/35 focus:border-[#FF9D00] focus:outline-none transition-colors duration-300";

  return (
    <div
      className="pt-28 md:pt-36 lg:pt-40 pb-20 min-h-screen"
      data-testid="contact-page"
    >
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 xl:gap-24 items-start">
        {/* LEFT */}
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#FF9D00] mb-6">
            / Contact
          </p>

          <h1 className="font-display text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[7.2vw] xl:text-[6.5vw] uppercase leading-[0.82] tracking-[-0.03em]">
            <MaskedLinesInView
              lines={["Say", "Hello"]}
              lineClassName="text-white"
            />
          </h1>

          <Reveal delay={0.2}>
            <div className="mt-10 space-y-7">
              {/* Email */}
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-white/40 mb-2">
                  Email
                </p>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-heading text-xl md:text-2xl lg:text-[26px] text-white link-underline"
                  data-testid="contact-email"
                >
                  {CONTACT.email}
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-white/40 mb-2">
                  Phone
                </p>

                <div className="flex flex-col gap-1.5">
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="font-heading text-xl md:text-2xl lg:text-[26px] text-white link-underline"
                      data-testid={`contact-phone-${p.tel}`}
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>

              {/* Studio */}
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-white/40 mb-2">
                  Studio
                </p>

                <p
                  className="font-body text-white/65 text-base md:text-[17px] max-w-md leading-relaxed"
                  data-testid="contact-address"
                >
                  {CONTACT.address}
                </p>
              </div>

              {/* Socials */}
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-white/40 mb-3">
                  Follow
                </p>

                <div className="flex gap-3">
                  {SOCIALS.map((social) => {
                    const SocialIcon = SOCIAL_ICONS[social.label];

                    if (!SocialIcon) return null;

                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        data-testid={`contact-social-${social.label.toLowerCase()}`}
                        className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:bg-[#FF9D00] hover:text-[#0A0A0A] hover:border-[#FF9D00] hover:-translate-y-1 transition-all duration-300"
                      >
                        <SocialIcon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT */}
        <div className="lg:pt-14 xl:pt-16">
          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              className="space-y-7"
              data-testid="contact-form"
            >
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  data-testid="input-name"
                  type="text"
                  className={inputCls}
                  placeholder="Your name *"
                  value={form.name}
                  onChange={update("name")}
                  required
                />

                <input
                  data-testid="input-email"
                  type="email"
                  className={inputCls}
                  placeholder="Email address *"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </div>

              {/* Company */}
              <input
                data-testid="input-company"
                type="text"
                className={inputCls}
                placeholder="Company (optional)"
                value={form.company}
                onChange={update("company")}
              />

              {/* Budget */}
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-white/40 mb-4">
                  Project Budget
                </p>

                <div className="flex flex-wrap gap-3">
                  {BUDGETS.map((budget) => (
                    <button
                      type="button"
                      key={budget}
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          budget,
                        }))
                      }
                      data-testid={`budget-${budget.replace(
                        /[^a-zA-Z0-9]+/g,
                        "-"
                      )}`}
                      className={`px-5 py-2.5 font-body text-sm border rounded-full transition-all duration-300 ${
                        form.budget === budget
                          ? "bg-[#FF9D00] text-[#0A0A0A] border-[#FF9D00]"
                          : "border-white/20 text-white/60 hover:border-[#FF9D00] hover:text-white"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <textarea
                data-testid="input-message"
                rows={4}
                className={`${inputCls} resize-none min-h-[150px]`}
                placeholder="Tell us about your project *"
                value={form.message}
                onChange={update("message")}
                required
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                className="w-full min-h-[60px] inline-flex items-center justify-center gap-3 bg-[#FF9D00] text-[#0A0A0A] px-8 py-4 font-heading text-sm uppercase tracking-[0.14em] font-semibold hover:bg-white hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}