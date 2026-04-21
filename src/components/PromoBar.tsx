import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function PromoBar() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const contentX = useTransform(scrollYProgress, [0, 0.5], [-40, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy with scroll-linked reveal */}
          <motion.div
            style={{ x: contentX, opacity: contentOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-terracotta-light text-xs tracking-[0.2em] uppercase mb-6">
                New member offer
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-cream leading-[0.95] mb-6">
                Save 20% on
                <br />
                your first piece.
              </h2>
              <p className="text-cream/40 text-base leading-relaxed max-w-md mb-8 text-pretty">
                Your space deserves furniture you'll keep for decades, not seasons.
                This code makes the first one easier.
              </p>
              <div className="flex items-center gap-5 mb-10">
                <span className="font-mono text-sm tracking-[0.3em] bg-cream/5 border border-cream/10 px-5 py-3 rounded-lg text-terracotta-light font-medium">
                  WELCOME20
                </span>
                <span className="text-cream/25 text-xs">
                  Valid on orders above ₹4,999
                </span>
              </div>
              <a
                href="#products"
                className="group inline-flex items-center gap-4 text-cream"
              >
                <span className="text-sm font-medium tracking-wide">
                  Shop the collection
                </span>
                <span className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-500">
                  <ArrowRight size={15} strokeWidth={1.5} />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — video showcasing room ambiance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5]"
          >
            <motion.div
              style={{ y: imgY }}
              className="w-full h-[120%]"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>
            </motion.div>
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-charcoal/10" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 80px 20px rgba(26,21,18,0.3)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
