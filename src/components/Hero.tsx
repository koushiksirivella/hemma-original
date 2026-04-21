import { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { ArrowDownRight } from "lucide-react";

/* ── Motion constants ── */
const ease = [0.16, 1, 0.3, 1] as const;

/* Stagger orchestration */
const stagger = {
  container: {
    animate: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
  },
  item: (custom: number) => ({
    initial: { opacity: 0, y: 30, filter: "blur(8px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, delay: custom * 0.12, ease },
    },
  }),
};

/* ── Floating luminous particles ── */
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  size: 2 + Math.random() * 3,
  delay: Math.random() * 10,
  duration: 8 + Math.random() * 10,
  opacity: 0.15 + Math.random() * 0.3,
  drift: -20 + Math.random() * 40,
}));

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[4]">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full hero-particle"
          style={
            {
              left: p.left,
              bottom: "-5%",
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, rgba(203,122,96,${p.opacity}) 0%, rgba(240,230,216,${p.opacity * 0.4}) 60%, transparent 100%)`,
              boxShadow: `0 0 ${p.size * 4}px ${p.size}px rgba(203,122,96,${p.opacity * 0.3})`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--particle-drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ── Bokeh depth circles — out-of-focus light orbs ── */
const BOKEH = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${8 + Math.random() * 84}%`,
  top: `${10 + Math.random() * 80}%`,
  size: 40 + Math.random() * 120,
  delay: Math.random() * 12,
  duration: 10 + Math.random() * 8,
  hue: Math.random() > 0.5 ? "203,122,96" : "210,195,175",
  opacity: 0.015 + Math.random() * 0.03,
}));

function BokehField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
      {BOKEH.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full hero-bokeh"
          style={
            {
              left: b.left,
              top: b.top,
              width: b.size,
              height: b.size,
              background: `radial-gradient(circle, rgba(${b.hue},${b.opacity * 4}) 0%, rgba(${b.hue},${b.opacity}) 40%, transparent 70%)`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
              "--bokeh-drift-x": `${-15 + Math.random() * 30}px`,
              "--bokeh-drift-y": `${-10 + Math.random() * 20}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ── Aurora mesh — animated color bands ── */
function AuroraMesh() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2] mix-blend-soft-light">
      <div
        className="absolute hero-aurora-band-1"
        style={{
          width: "160%",
          height: "45%",
          top: "15%",
          left: "-30%",
          background:
            "linear-gradient(135deg, transparent 20%, rgba(184,92,63,0.08) 40%, rgba(203,122,96,0.12) 50%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute hero-aurora-band-2"
        style={{
          width: "140%",
          height: "35%",
          top: "40%",
          left: "-20%",
          background:
            "linear-gradient(225deg, transparent 25%, rgba(210,195,175,0.04) 45%, rgba(220,205,185,0.06) 55%, transparent 75%)",
          filter: "blur(80px)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute hero-aurora-band-3"
        style={{
          width: "120%",
          height: "30%",
          top: "55%",
          left: "-10%",
          background:
            "linear-gradient(170deg, transparent 30%, rgba(107,125,94,0.05) 48%, rgba(143,160,127,0.08) 52%, transparent 70%)",
          filter: "blur(70px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

/* ── Prismatic edge light ribbons ── */
function PrismaticRibbons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
      <div
        className="absolute hero-ribbon-1"
        style={{
          width: "200%",
          height: "1px",
          top: "22%",
          left: "-50%",
          background:
            "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(203,122,96,0.15) 45%, rgba(240,200,140,0.25) 50%, rgba(240,230,216,0.3) 50.5%, rgba(240,200,140,0.25) 51%, rgba(203,122,96,0.15) 55%, transparent 70%, transparent 100%)",
          transform: "rotate(-8deg)",
          boxShadow: "0 0 20px 3px rgba(240,200,140,0.06)",
        }}
      />
      <div
        className="absolute hero-ribbon-2"
        style={{
          width: "200%",
          height: "1px",
          top: "58%",
          left: "-50%",
          background:
            "linear-gradient(90deg, transparent 0%, transparent 25%, rgba(107,125,94,0.1) 40%, rgba(240,230,216,0.18) 50%, rgba(107,125,94,0.1) 60%, transparent 75%, transparent 100%)",
          transform: "rotate(3deg)",
          boxShadow: "0 0 15px 2px rgba(240,230,216,0.03)",
        }}
      />
    </div>
  );
}

/* ── Chromatic depth ring — subtle 3D holographic halo ── */
function ChromaticRing() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3, delay: 1.8, ease }}
      className="absolute inset-0 pointer-events-none z-[2] flex items-center justify-center"
    >
      <div
        className="hero-chromatic-ring"
        style={{
          width: "min(85vw, 900px)",
          height: "min(85vw, 900px)",
          borderRadius: "50%",
          background: "transparent",
          boxShadow: `
            inset 0 0 80px 2px rgba(203,122,96,0.03),
            0 0 60px 1px rgba(203,122,96,0.02),
            0 0 120px 2px rgba(240,200,140,0.015)
          `,
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(203,122,96,0.06)",
            transform: "translate(-1px, 1px)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(240,200,140,0.04)",
            transform: "translate(1px, -1px)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(240,230,216,0.03)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ── Radial grid — futuristic depth lines ── */
function RadialGrid() {
  const lines = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        radius: 15 + i * 14,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
      <div
        className="relative hero-grid-rotate"
        style={{ width: "min(120vw, 1400px)", height: "min(120vw, 1400px)" }}
      >
        {lines.map((l) => (
          <div
            key={l.id}
            className="absolute rounded-full"
            style={{
              width: `${l.radius * 2}%`,
              height: `${l.radius * 2}%`,
              top: `${50 - l.radius}%`,
              left: `${50 - l.radius}%`,
              border: `1px solid rgba(240,230,216,${0.015 - l.id * 0.002})`,
            }}
          />
        ))}
        <div
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, rgba(240,230,216,0.015) 30%, rgba(240,230,216,0.03) 50%, rgba(240,230,216,0.015) 70%, transparent 90%)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent 10%, rgba(240,230,216,0.015) 30%, rgba(240,230,216,0.03) 50%, rgba(240,230,216,0.015) 70%, transparent 90%)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Scan line — slow horizontal sweep ── */
function ScanLine() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
      <div
        className="absolute left-0 right-0 hero-scan-line"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(240,230,216,0.04) 20%, rgba(240,200,140,0.08) 50%, rgba(240,230,216,0.04) 80%, transparent 100%)",
          boxShadow:
            "0 0 30px 8px rgba(240,200,140,0.02), 0 -1px 0 rgba(240,230,216,0.02), 0 1px 0 rgba(240,230,216,0.02)",
        }}
      />
    </div>
  );
}

/* ── Magnetic CTA button ── */
function MagneticCTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouse(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  }

  return (
    <motion.a
      href="#products"
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      className="group relative inline-flex items-center gap-5 text-cream active:scale-[0.97] transition-transform"
    >
      {/* Outer glass shell */}
      <span className="relative flex items-center gap-4 rounded-full border border-cream/[0.12] bg-cream/[0.06] backdrop-blur-xl px-7 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <span className="text-[13px] font-medium tracking-[0.08em] uppercase">
          Start your room
        </span>
        {/* Inner icon pill */}
        <span className="w-10 h-10 rounded-full bg-cream/[0.1] flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-500">
          <ArrowDownRight
            size={16}
            strokeWidth={1.5}
            className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300"
          />
        </span>
      </span>
    </motion.a>
  );
}

/* ── Hero ── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* ── Scroll-linked cinematic transforms ── */
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const videoRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const videoBlurRaw = useTransform(scrollYProgress, [0, 0.7], [0, 12]);
  const videoBlur = useSpring(videoBlurRaw, { stiffness: 80, damping: 20 });
  const videoBlurFilter = useMotionTemplate`blur(${videoBlur}px)`;

  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const eyebrowY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
  const headlineX = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
  const headlineRotate = useTransform(scrollYProgress, [0, 0.4], [0, -2]);
  const subheadY = useTransform(scrollYProgress, [0.02, 0.35], [0, 80]);
  const ctaScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const ctaY = useTransform(scrollYProgress, [0, 0.3], [0, 40]);
  const statsX = useTransform(scrollYProgress, [0.02, 0.45], [0, 200]);

  const overlayDarken = useTransform(scrollYProgress, [0.2, 0.9], [0, 0.5]);
  const letterboxH = useTransform(scrollYProgress, [0, 0.6], [0, 80]);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const tiltX = useSpring(
    useTransform(mouseY, [0, 1], [2.5, -2.5]),
    { stiffness: 40, damping: 30 }
  );
  const tiltY = useSpring(
    useTransform(mouseX, [0, 1], [-2.5, 2.5]),
    { stiffness: 40, damping: 30 }
  );
  const vignetteX = useSpring(
    useTransform(mouseX, [0, 1], [35, 65]),
    { stiffness: 40, damping: 30 }
  );
  const vignetteY = useSpring(
    useTransform(mouseY, [0, 1], [30, 70]),
    { stiffness: 40, damping: 30 }
  );
  const vignetteGradient = useMotionTemplate`radial-gradient(ellipse 70% 60% at ${vignetteX}% ${vignetteY}%, transparent 0%, rgba(26,21,18,0.18) 100%)`;

  const spotX = useSpring(useTransform(mouseX, [0, 1], [20, 80]), {
    stiffness: 30,
    damping: 35,
  });
  const spotY = useSpring(useTransform(mouseY, [0, 1], [20, 80]), {
    stiffness: 30,
    damping: 35,
  });
  const spotlightGradient = useMotionTemplate`radial-gradient(ellipse 45% 40% at ${spotX}% ${spotY}%, rgba(240,200,140,0.04) 0%, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-charcoal"
      style={{ perspective: "1200px" }}
    >
      {/* ═══════════════════════════════════════════
          LAYER 0 — Full-bleed video
      ═══════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: videoY, scale: videoScale, rotate: videoRotate, filter: videoBlurFilter }}
      >
        <motion.div
          initial={{ clipPath: "circle(0% at 50% 60%)", opacity: 0 }}
          animate={{ clipPath: "circle(150% at 50% 60%)", opacity: 1 }}
          transition={{ duration: 2.8, ease }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover hero-video-enhance"
            aria-hidden="true"
          >
            <source src="/videos/hero-showcase.webm" type="video/webm" />
            <source src="/videos/hero-showcase.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>

      <RadialGrid />
      <AuroraMesh />
      <BokehField />

      <motion.div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
      >

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(26,21,18,0.55) 0%,
              rgba(26,21,18,0.3) 18%,
              rgba(26,21,18,0.08) 40%,
              transparent 60%
            )`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(108deg, rgba(26,21,18,0.12) 0%, transparent 35%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(252deg, rgba(26,21,18,0.05) 0%, transparent 30%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light hero-glow-breathe"
        style={{
          background:
            "radial-gradient(ellipse 130% 55% at 25% 95%, rgba(184,92,63,0.15) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay hero-glow-breathe-alt"
        style={{
          background:
            "radial-gradient(ellipse 90% 65% at 80% 10%, rgba(107,125,94,0.15) 0%, transparent 60%)",
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: vignetteGradient }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 65% 40%, rgba(220,200,180,0.5) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] hero-grain"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: "200px 200px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 120px 20px rgba(26,21,18,0.08), inset 0 -40px 60px -20px rgba(26,21,18,0.1)",
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light"
        style={{ background: spotlightGradient }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(240,230,216,0.03) 0%, transparent 20%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hero-corner-pulse"
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 90% 8%, rgba(203,122,96,0.06) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          background:
            "linear-gradient(135deg, rgba(184,92,63,0) 0%, rgba(184,92,63,0.3) 25%, rgba(240,200,140,0.2) 50%, rgba(107,125,94,0.3) 75%, rgba(107,125,94,0) 100%)",
        }}
      />

      </motion.div>

      <FloatingParticles />
      <PrismaticRibbons />
      <ChromaticRing />

      <div className="absolute inset-0 pointer-events-none z-[3] hero-light-sweep" />

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 3, delay: 1.5, ease }}
        className="absolute top-[35%] left-0 right-0 pointer-events-none z-[3]"
      >
        <div className="hero-lens-flare" />
      </motion.div>

      <ScanLine />

      <motion.div
        className="absolute inset-0 pointer-events-none z-[8] bg-charcoal"
        style={{ opacity: overlayDarken }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 z-[9] pointer-events-none"
        style={{
          height: letterboxH,
          background: 'linear-gradient(to bottom, rgba(26,21,18,1) 60%, transparent 100%)'
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[9] pointer-events-none"
        style={{
          height: letterboxH,
          background: 'linear-gradient(to top, rgba(26,21,18,1) 60%, transparent 100%)'
        }}
      />

      {/* ═══════════════════════════════════════════
          CONTENT
      ═══════════════════════════════════════════ */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-28 pt-40"
      >
        <motion.div
          variants={stagger.container}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end"
        >
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Eyebrow */}
            <motion.div style={{ y: eyebrowY }}>
              <motion.div variants={stagger.item(0)}>
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/[0.12] bg-cream/[0.05] backdrop-blur-md px-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                  <span className="text-cream/60 text-[11px] font-medium tracking-[0.2em] uppercase">
                    2025 Collection Now Live
                  </span>
                </span>
              </motion.div>
            </motion.div>

            {/* Headline */}
            <motion.div style={{ x: headlineX, rotate: headlineRotate }}>
              <motion.h1
                variants={stagger.item(1)}
                className="font-heading text-[clamp(2.8rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-cream"
                style={{ filter: 'drop-shadow(0 4px 30px rgba(0,0,0,0.5)) drop-shadow(0 1px 4px rgba(0,0,0,0.6))' }}
              >
                <span className="hero-text-shimmer inline-block">Furniture</span>
                <br />
                that feels like
                <br />
                <span className="hero-text-gradient italic font-light">
                  coming home.
                </span>
              </motion.h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div style={{ y: subheadY }}>
              <motion.p
                variants={stagger.item(2)}
                className="text-cream/55 text-base lg:text-lg leading-relaxed max-w-[420px] text-pretty"
                style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.4))' }}
              >
                Scandinavian simplicity meets Indian craftsmanship.
                Pieces you'll keep for decades, not seasons.
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div style={{ scale: ctaScale, y: ctaY }}>
              <motion.div variants={stagger.item(3)}>
                <MagneticCTA />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            style={{ x: statsX }}
            className="lg:col-span-5 flex lg:justify-end"
          >
            <motion.div variants={stagger.item(4)}>
              <div className="rounded-[1.25rem] border border-cream/[0.08] bg-cream/[0.04] p-1.5 backdrop-blur-xl">
                <div className="rounded-[calc(1.25rem-0.375rem)] bg-charcoal/40 px-8 py-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                  <div className="flex gap-10 lg:gap-12">
                    {[
                      { value: "2,400+", label: "Curated Pieces" },
                      { value: "4.9★", label: "Avg Rating" },
                      { value: "12yr", label: "Warranty" },
                    ].map((stat, i) => (
                      <div key={stat.label} className="flex items-center gap-10 lg:gap-12">
                        {i > 0 && (
                          <div className="w-px h-10 bg-gradient-to-b from-transparent via-cream/[0.12] to-transparent" />
                        )}
                        <div>
                          <p className="font-heading text-2xl lg:text-3xl font-semibold text-cream tracking-tight">
                            {stat.value}
                          </p>
                          <p className="text-cream/35 text-[11px] tracking-[0.15em] uppercase mt-1.5">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/30 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-cream/20 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-1 h-1.5 rounded-full bg-cream/50"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
        <div className="h-12 bg-gradient-to-t from-cream/[0.04] to-transparent" />
      </div>
    </section>
  );
}
