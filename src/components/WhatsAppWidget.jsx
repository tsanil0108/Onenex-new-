import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const EASE = [0.76, 0, 0.24, 1];
const WA_NUMBER = "918356083827"; // +91 83560 83827
const WA_DISPLAY = "+91 83560 83827";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 5.333c-5.878 0-10.66 4.78-10.662 10.657a10.62 10.62 0 0 0 1.596 5.61l-1.687 6.157 6.303-1.653a10.66 10.66 0 0 0 5.096 1.298h.004c5.876 0 10.658-4.781 10.66-10.658a10.6 10.6 0 0 0-3.12-7.54 10.6 10.6 0 0 0-7.49-3.128zm0 19.51h-.004a8.85 8.85 0 0 1-4.51-1.235l-.323-.192-3.74.98.998-3.646-.21-.335a8.83 8.83 0 0 1-1.354-4.714c.002-4.884 3.977-8.858 8.867-8.858a8.8 8.8 0 0 1 6.264 2.598 8.8 8.8 0 0 1 2.594 6.267c-.002 4.885-3.977 8.86-8.86 8.86zm4.86-6.636c-.266-.133-1.576-.777-1.82-.866-.244-.09-.422-.133-.6.134-.177.266-.688.865-.844 1.043-.155.177-.31.2-.577.066-.266-.133-1.124-.414-2.142-1.322-.792-.706-1.327-1.578-1.482-1.844-.155-.267-.017-.41.117-.543.12-.12.266-.31.4-.466.133-.155.177-.266.266-.444.09-.177.045-.333-.022-.466-.067-.133-.6-1.446-.822-1.98-.216-.52-.437-.45-.6-.458l-.51-.01a.98.98 0 0 0-.71.333c-.244.266-.932.91-.932 2.222s.955 2.578 1.088 2.756c.133.177 1.88 2.87 4.555 4.023.636.275 1.132.44 1.52.563.638.203 1.219.174 1.678.106.512-.077 1.576-.644 1.798-1.266.222-.622.222-1.156.155-1.267-.066-.111-.244-.177-.51-.31z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const startChat = () => {
    const text = encodeURIComponent("Hi Onenex, I'd like to discuss a branding project.");
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-4" data-testid="whatsapp-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="w-[300px] bg-[#0A0A0A] border border-white/15 shadow-2xl overflow-hidden"
            data-testid="whatsapp-popup"
          >
            {/* header */}
            <div className="bg-[#FF9D00] text-[#0A0A0A] px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A0A0A] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-[#FF9D00]" />
              </div>
              <div className="leading-tight">
                <p className="font-heading text-sm font-bold uppercase tracking-wide">Onenex</p>
                <p className="font-body text-xs opacity-70">Typically replies within minutes</p>
              </div>
            </div>
            {/* body */}
            <div className="p-5">
              <div className="bg-white/5 border border-white/10 p-4 mb-4">
                <p className="font-body text-sm text-white/80">
                  Hi there! 👋 Have a branding, print or website project in mind? Message us directly on WhatsApp.
                </p>
              </div>
              <button
                onClick={startChat}
                data-testid="whatsapp-start-chat"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF9D00] text-[#0A0A0A] px-5 py-3 font-heading text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300"
              >
                Start Chat <Send className="w-4 h-4" />
              </button>
              <p className="font-body text-xs text-white/40 mt-3 text-center">{WA_DISPLAY}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-toggle"
        className="relative w-14 h-14 rounded-full bg-[#FF9D00] text-[#0A0A0A] flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#FF9D00] animate-ping opacity-40" />
        )}
        {!open && (
          <span
            data-testid="whatsapp-badge"
            className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-[#0A0A0A] border-2 border-[#FF9D00] text-white text-[11px] font-bold flex items-center justify-center leading-none"
          >
            1
          </span>
        )}
        <span className="relative">
          {open ? <X className="w-6 h-6" /> : <WhatsAppIcon className="w-8 h-8" />}
        </span>
      </button>
    </div>
  );
}
