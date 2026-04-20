import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { rooms } from "../data/products";
import { useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* Slide data — 3 rooms */
const slides = [
  {
    type: "image" as const,
    src: rooms[0].image,
    label: "The Quiet Living Room",
    tagline: "Warm oak, soft linen, golden-hour light — a room that exhales.",
    products: rooms[0].products,
  },
  {
    type: "image" as const,
    src: rooms[1].image,
    label: "The Sunday Bedroom",
    tagline: "Stone-washed sheets, morning sun, nowhere to rush to.",
    products: rooms[1].products,
  },
  {
    type: "image" as const,
    src: rooms[2].image,
    label: "The Maker’s Desk",
    tagline: "Ergonomic support meets warm walnut — for deep-work hours.",
    products: rooms[2].products,
  },
];

export default function RoomInspiration() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  /* Pin the section for 4 "pages" of scroll (400vh total, 100vh per slide) */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Map scroll progress to active slide index */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * slides.length), slides.length - 1);
    setActiveSlide(idx);
  });

  /* Per-slide parallax */
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      id="inspiration"
      className="relative bg-charcoal"
      style={{ height: `${slides.length * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Background media — crossfade */}
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0"
          >
            <motion.div style={{ scale: imgScale }} className="w-full h-full">
              <img
                src={slides[activeSlide].src}
                alt={slides[activeSlide].label}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(26,21,18,0.85) 0%, rgba(26,21,18,0.3) 40%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(108deg, rgba(26,21,18,0.4) 0%, transparent 50%)",
          }}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end z-10">
          <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.7, ease }}
              >
                  <p className="text-cream/40 text-xs tracking-[0.2em] uppercase mb-4">
                  Rooms we’ve styled &middot; {activeSlide + 1}/{slides.length}
                </p>
                <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-cream leading-[0.9] mb-4">
                  {slides[activeSlide].label}
                </h2>
                <p className="text-cream/50 text-base lg:text-lg leading-relaxed max-w-lg mb-8 text-pretty">
                  {slides[activeSlide].tagline}
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href="#products"
                    className="group inline-flex items-center gap-4 text-cream"
                  >
                    <span className="text-sm font-medium tracking-wide">
                      Step inside
                    </span>
                    <span className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-500">
                      <ArrowRight size={15} strokeWidth={1.5} />
                    </span>
                  </a>
                  <span className="text-cream/25 text-xs">
                    {slides[activeSlide].products} pieces
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide indicators — right side */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-1 rounded-full transition-all duration-700 ${
                i === activeSlide
                  ? "h-8 bg-cream"
                  : "h-3 bg-cream/20"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activeSlide === 0 ? 1 : 0 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-cream/25 text-[10px] tracking-[0.3em] uppercase">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-cream/15 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease }}
              className="w-1 h-1.5 rounded-full bg-cream/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
