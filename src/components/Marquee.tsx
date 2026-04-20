import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  "Free delivery in Nandigama & surrounding areas",
  "5-year solid wood & joinery warranty",
  "30-day hassle-free returns",
  "Visit us at Radam Center, Nandigama",
  "Call us: +91 96030 05888",
  "Custom furniture orders available",
];

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  /* Speed modulation: scroll down = faster, scroll up = slower */
  const speed = useTransform(scrollYProgress, [0, 1], [30, 50]);

  return (
    <div
      ref={ref}
      className="bg-charcoal py-3.5 overflow-hidden border-b border-cream/5"
      aria-hidden="true"
      role="marquee"
    >
      <motion.div
        className="flex whitespace-nowrap"
        style={{
          animationDuration: speed as unknown as string,
          animation: "marquee 40s linear infinite",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center mx-8 shrink-0">
            <span className="w-1 h-1 rounded-full bg-terracotta mr-8" />
            <span className="text-cream/50 text-[11px] tracking-[0.15em] uppercase font-medium">
              {item}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
