import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AmbientMood() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Background video — lamp glow loop */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/lamp-glow.png"
          className="w-full h-full object-cover opacity-80"
          aria-hidden="true"
        >
          <source src="/videos/lamp-glow.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient overlays — cinematic chiaroscuro */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, rgba(26,21,18,0.6) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/20 pointer-events-none" />

      {/* Warm glow accent — bottom */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 40% 80%, rgba(184,92,63,0.5) 0%, transparent 60%)",
        }}
      />

      {/* Text content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease }}
          className="font-heading text-2xl md:text-3xl lg:text-5xl font-light italic text-cream/80 tracking-tight"
        >
          Every piece tells a story.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-heading text-lg md:text-xl text-cream/35 font-light mt-3 tracking-tight"
        >
          Yours starts here.
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="block mt-4 text-cream/20 text-xs tracking-[0.3em] uppercase"
        >
          BALAJI FURNITURE
        </motion.span>
      </motion.div>
    </section>
  );
}
