import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { categories } from "../data/products";

const ease = [0.16, 1, 0.3, 1] as const;

/* 3D tilt card wrapper */
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -8);
    rotateY.set(x * 8);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section ref={containerRef} id="categories" className="py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header — left-aligned, asymmetric */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">
              Rooms we craft
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-charcoal leading-[0.95]">
              Walk into
              <br />
              <span className="text-muted/40">your favourite room.</span>
            </h2>
          </motion.div>

          {/* Scroll arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2"
          >
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border border-warm-border flex items-center justify-center text-muted hover:text-charcoal hover:border-charcoal transition-all duration-300 active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border border-warm-border flex items-center justify-center text-muted hover:text-charcoal hover:border-charcoal transition-all duration-300 active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll — full-bleed */}
      <div
        ref={scrollRef}
        className="flex gap-4 lg:gap-5 overflow-x-auto scrollbar-hide pl-6 lg:pl-12 pr-6 snap-x snap-mandatory"
      >
        {categories.map((cat, i) => (
          <TiltCard
            key={cat.id}
            className="shrink-0 w-[280px] md:w-[340px] lg:w-[380px] snap-start"
          >
            <motion.a
              href="#products"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="relative block aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
            <motion.img
              style={{ y }}
              src={cat.image}
              alt={`${cat.name} furniture collection`}
              className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold text-cream mb-1 tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="text-cream/50 text-xs tracking-wider">
                    {cat.count} pieces
                  </p>
                </div>
                <span className="w-9 h-9 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight size={14} className="text-cream" />
                </span>
              </div>
            </div>
          </motion.a>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
