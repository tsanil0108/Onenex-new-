import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.76, 0, 0.24, 1];

// Generic scroll-reveal wrapper (fade + slide up)
export function Reveal({ children, delay = 0, y = 40, className = "", ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// Masked line-by-line text reveal. Pass an array of lines.
export function MaskedLines({ lines = [], className = "", lineClassName = "", delay = 0 }) {
  return (
    <span className={className} data-testid="masked-lines">
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Same as MaskedLines but triggers on scroll into view.
// The ref/inView lives on the OUTER (always-visible) wrapper so the
// initially-clipped child can't block the IntersectionObserver.
export function MaskedLinesInView({ lines = [], className = "", lineClassName = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <span ref={ref} className={className} data-testid="masked-lines-inview">
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : { y: "110%" }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.1 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
