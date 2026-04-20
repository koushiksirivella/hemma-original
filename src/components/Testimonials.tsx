import { useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/products";

const ease = [0.16, 1, 0.3, 1] as const;

/* 3D tilt testimonial card */
function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 250, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 250, damping: 22 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -4);
    rotateY.set(x * 4);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: i * 0.1, ease }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
      className={`will-change-transform ${
        i % 2 !== 0 ? "md:translate-y-8" : ""
      }`}
    >
      <div className="bg-ivory rounded-2xl p-7 lg:p-9 border border-warm-border/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500">
        {/* Stars */}
        <div className="flex gap-0.5 mb-5">
          {Array.from({ length: t.rating }).map((_, s) => (
            <Star
              key={s}
              size={13}
              className="fill-terracotta text-terracotta"
              strokeWidth={0}
            />
          ))}
        </div>

        <p className="text-graphite text-[15px] leading-relaxed mb-7 text-pretty">
          "{t.text}"
        </p>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-sand flex items-center justify-center">
            <span className="text-xs font-semibold text-charcoal">
              {t.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-charcoal">
              {t.name}
            </p>
            <p className="text-xs text-muted">{t.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Parallax accent blobs */}
        <motion.div
          style={{ y: bgY }}
          className="absolute -top-20 right-[10%] w-[350px] h-[350px] rounded-full bg-terracotta/[0.02] blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: bgY }}
          className="absolute -bottom-20 left-[5%] w-[280px] h-[280px] rounded-full bg-sage/[0.03] blur-3xl pointer-events-none"
        />
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">
            Straight from their living rooms
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-charcoal leading-[0.95]">
            47,000 homes.
            <br />
            <span className="text-muted/40">Zero regrets.</span>
          </h2>
        </motion.div>

        {/* Testimonial grid — 2-col staggered */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
