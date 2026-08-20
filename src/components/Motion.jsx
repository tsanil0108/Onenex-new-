import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";

// Magnetic button that follows the cursor slightly
export function MagneticButton({ children, className = "", to, onClick, type, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };
  const reset = () => { x.set(0); y.set(0); };

  const Comp = to ? motion(Link) : motion.button;
  const extra = to ? { to } : { type: type || "button", onClick };

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      {...extra}
      {...rest}
    >
      {children}
    </Comp>
  );
}

// Number that counts up when scrolled into view
export function Counter({ value, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
