import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const videos = [
  {
    src: "/videos/sofa-fabric.mp4",
    title: "Woven Texture",
    subtitle: "Upholstery close-up",
    detail: "You can count the threads. That’s the point.",
    span: "lg:col-span-7 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/videos/table-wood.mp4",
    title: "Natural Grain",
    subtitle: "Solid wood surface",
    detail: "200 years of growth rings. No two tops are identical.",
    span: "lg:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/videos/bed-linen.mp4",
    title: "Soft Linen",
    subtitle: "Bedding detail",
    detail: "Gets softer every wash. By year three, it’s butter.",
    span: "lg:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/videos/chair-mesh.mp4",
    title: "Engineered Mesh",
    subtitle: "Seating material",
    detail: "Tensioned airflow weave for 12-hour sit sessions.",
    span: "lg:col-span-6",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/videos/lamp-glow.mp4",
    title: "Warm Light",
    subtitle: "Ambient glow",
    detail: "2700K warmth from hand-finished brass. Instant golden hour.",
    span: "lg:col-span-6",
    aspect: "aspect-[16/9]",
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.95, 1, 1, 0.98]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease }}
      className={`${video.span} group`}
    >
      <motion.div
        style={{ scale }}
        className={`relative ${video.aspect} rounded-2xl overflow-hidden bg-charcoal`}
      >
        {/* Video */}
        <motion.div style={{ y }} className="absolute inset-[-10%]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </motion.div>

        {/* 3D gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to top,
              rgba(26,21,18,0.88) 0%,
              rgba(26,21,18,0.5) 30%,
              rgba(26,21,18,0.1) 55%,
              transparent 100%
            )`,
          }}
        />

        {/* Warm glow — terracotta from bottom corner */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 100% 60% at 20% 90%, rgba(184,92,63,0.5) 0%, transparent 60%)",
          }}
        />

        {/* Sage ambient — top-right atmospheric balance */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 85% 15%, rgba(107,125,94,0.5) 0%, transparent 55%)",
          }}
        />

        {/* Inset shadow — 3D depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow:
              "inset 0 0 120px 30px rgba(26,21,18,0.25), inset 0 -40px 60px -20px rgba(26,21,18,0.3)",
          }}
        />

        {/* Edge vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(26,21,18,0.35) 100%)",
          }}
        />

        {/* Material tag — top */}
        <div className="absolute top-5 left-5 z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/[0.1] bg-charcoal/40 backdrop-blur-xl px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta/80" />
            <span className="text-cream/60 text-[10px] font-medium tracking-[0.2em] uppercase">
              Material close-up
            </span>
          </span>
        </div>

        {/* Content — bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
          <p className="text-terracotta-light text-[10px] tracking-[0.2em] uppercase mb-2 font-medium">
            {video.subtitle}
          </p>
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-cream tracking-tight leading-[0.95] mb-3">
            {video.title}
          </h3>
          <p className="text-cream/40 text-sm leading-relaxed max-w-sm text-pretty">
            {video.detail}
          </p>
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border border-cream/[0.06] group-hover:border-cream/[0.12] transition-colors duration-700 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

export default function CraftDetail() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-terracotta-light text-xs tracking-[0.2em] uppercase mb-5">
            Up close & unfiltered
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-cream leading-[0.95] mb-5">
            Zoom in.
            <br />
            <span className="text-cream/40 italic font-light">
              We dare you.
            </span>
          </h2>
          <p className="text-cream/35 text-base leading-relaxed max-w-lg text-pretty">
            No renders. No retouching. These are the real materials — filmed
            millimetres from the surface so you can judge for yourself.
          </p>
        </motion.div>

        {/* Video bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {videos.map((video, i) => (
            <VideoCard key={video.src} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
