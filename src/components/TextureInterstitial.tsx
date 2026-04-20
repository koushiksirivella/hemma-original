import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const materials = [
  {
    image: "/images/texture-wood.png",
    alt: "Close-up of oak wood grain with visible growth rings",
    label: "Solid Oak",
    tag: "FSC Certified",
    description:
      "200-year Scandinavian oak, kiln-dried to 8% moisture. We hand-pick every plank for grain character you can see and feel.",
    stat: "8%",
    statLabel: "moisture content",
  },
  {
    image: "/images/texture-linen.png",
    alt: "Woven European linen fabric texture in natural cream",
    label: "Belgian Linen",
    tag: "OEKO-TEX",
    description:
      "Stone-washed flax from Courtrai, Belgium. Woven on 1960s shuttle looms — it softens with every year you own it.",
    stat: "100%",
    statLabel: "natural fibre",
  },
];

function MaterialCard({
  mat,
  index,
}: {
  mat: (typeof materials)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease }}
      className={`grid lg:grid-cols-12 gap-6 lg:gap-0 items-center ${
        isReversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* ── Image panel ── */}
      <div
        className={`lg:col-span-7 relative ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] group">
          {/* Parallax image */}
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-[-10%] will-change-transform"
          >
            <img
              src={mat.image}
              alt={mat.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </motion.div>

          {/* Subtle warm tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none" />

          {/* Certification tag — top-right */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.15, ease }}
            className="absolute top-4 right-4 z-10 text-cream/70 text-[9px] tracking-[0.2em] uppercase font-medium backdrop-blur-md bg-charcoal/25 border border-cream/[0.08] px-3.5 py-1.5 rounded-full"
          >
            {mat.tag}
          </motion.span>

          {/* Hover magnifier hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="w-20 h-20 rounded-full border border-cream/20 bg-cream/[0.06] backdrop-blur-sm flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-cream/60"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Text panel ── */}
      <div
        className={`lg:col-span-5 ${
          isReversed
            ? "lg:order-1 lg:pr-16 lg:pl-0"
            : "lg:order-2 lg:pl-16 lg:pr-0"
        } flex flex-col gap-6`}
      >
        {/* Eyebrow line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className={`h-px bg-gradient-to-r from-warm-border to-transparent origin-left ${
            isReversed ? "lg:origin-right lg:bg-gradient-to-l" : ""
          }`}
        />

        {/* Material name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <span className="text-muted text-[10px] tracking-[0.3em] uppercase font-medium">
            Material {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-3xl lg:text-4xl font-semibold tracking-tight text-charcoal mt-2">
            {mat.label}
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="text-muted text-[15px] leading-relaxed max-w-[380px]"
        >
          {mat.description}
        </motion.p>

        {/* Stat highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="flex items-end gap-3"
        >
          <span className="font-heading text-5xl lg:text-6xl font-semibold tracking-tighter text-charcoal leading-none">
            {mat.stat}
          </span>
          <span className="text-muted text-[11px] tracking-[0.15em] uppercase mb-2">
            {mat.statLabel}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function TextureInterstitial() {
  return (
    <section className="py-24 lg:py-36 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="text-muted text-[10px] tracking-[0.35em] uppercase font-medium">
            Our materials
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal mt-4">
            Touch the difference
          </h2>
          <p className="text-muted text-base lg:text-lg leading-relaxed max-w-[520px] mx-auto mt-5 text-pretty">
            Every material is sourced at the mill, tested for decades of daily use,
            and selected by hand — not by algorithm.
          </p>
        </motion.div>

        {/* Material cards */}
        <div className="flex flex-col gap-20 lg:gap-32">
          {materials.map((mat, i) => (
            <MaterialCard key={mat.label} mat={mat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
