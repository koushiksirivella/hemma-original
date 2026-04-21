import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/*
 * Lerp factor — tuned for cinematic feel.
 * 0.09 gives a smooth glide without lagging behind the user's scroll.
 */
const LERP = 0.09;
// Minimum delta (in seconds) before we actually bump video.currentTime.
// Setting currentTime forces the decoder to seek + decode a new frame —
// extremely expensive when done every animation frame (≈8–20 ms per call).
// 1/24 s ≈ 0.042 s gives ~24 fps scrubbing which is visually smooth and
// roughly 4× cheaper than per-rAF updates.
const MIN_SEEK_DELTA = 1 / 24;

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Scroll-driven video scrubbing via decoupled rAF lerp */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let running = true;

    const tick = () => {
      if (!running) return;
      const dur = video.duration;
      if (dur && Number.isFinite(dur)) {
        const target = targetTimeRef.current;
        const current = currentTimeRef.current;
        const delta = target - current;
        const absDelta = Math.abs(delta);

        if (absDelta > MIN_SEEK_DELTA) {
          const adaptiveLerp = LERP + Math.min(absDelta * 0.02, 0.06);
          const next = current + delta * adaptiveLerp;
          // Only assign when the seek is meaningful — avoids decoder thrash.
          video.currentTime = next;
          currentTimeRef.current = next;
        } else if (absDelta > 0) {
          // Snap silently without triggering a decode.
          currentTimeRef.current = target;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      currentTimeRef.current = video.currentTime;
      const unsub = scrollYProgress.on("change", (v) => {
        const dur = video.duration;
        if (dur && Number.isFinite(dur)) {
          targetTimeRef.current = v * dur;
        }
      });
      rafRef.current = requestAnimationFrame(tick);
      return unsub;
    };

    let unsub: (() => void) | undefined;

    if (video.readyState >= 1) {
      unsub = start();
    } else {
      const handler = () => {
        unsub = start();
      };
      video.addEventListener("loadedmetadata", handler, { once: true });
      return () => video.removeEventListener("loadedmetadata", handler);
    }

    return () => {
      running = false;
      unsub?.();
      cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress]);

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.02]);

  const badgeY = useTransform(scrollYProgress, [0, 0.2], [30, 0]);
  const badgeOpacity = useTransform(scrollYProgress, [0.02, 0.18], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0, 0.28], [60, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.05, 0.22], [0, 1]);
  const subY = useTransform(scrollYProgress, [0, 0.32], [40, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.08, 0.26], [0, 1]);

  const textExitOpacity = useTransform(scrollYProgress, [0.78, 0.95], [1, 0]);
  const textExitY = useTransform(scrollYProgress, [0.78, 0.95], [0, -40]);

  const letterboxHeight = useTransform(scrollYProgress, [0, 0.25], ["12%", "0%"]);
  const letterboxOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const warmGlowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.12, 0.28, 0.2, 0.08]);
  const coolFillOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.06, 0.15, 0.1, 0.04]);
  const rimOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 0.1]);

  const progressScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="scroll-video"
      className="relative"
      style={{ height: "300vh" }}
      aria-label="Scroll-driven room assembly"
    >
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-16 bg-gradient-to-b from-charcoal/60 to-transparent" />
      </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-charcoal">

        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0 will-change-transform"
        >
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute w-full h-full object-cover"
            style={{
              top: "-3%",
              left: "-3%",
              width: "106%",
              height: "106%",
              objectPosition: "center center",
              filter: "contrast(1.1) saturate(1.18) brightness(1.05)",
            }}
          >
            <source src="/videos/room-assembly-scroll.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to top,
              rgba(26,21,18,0.72) 0%,
              rgba(26,21,18,0.45) 15%,
              rgba(26,21,18,0.12) 35%,
              transparent 55%
            )`,
          }}
        />

        <motion.div
          style={{ opacity: warmGlowOpacity }}
          className="absolute inset-0 pointer-events-none mix-blend-soft-light"
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse 100% 50% at 25% 85%, rgba(184,92,63,0.5) 0%, rgba(203,122,96,0.15) 35%, transparent 60%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: coolFillOpacity }}
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse 70% 45% at 80% 15%, rgba(107,125,94,0.4) 0%, transparent 50%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: rimOpacity }}
          className="absolute inset-0 pointer-events-none mix-blend-screen"
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(255deg, rgba(240,230,216,0.1) 0%, transparent 25%)",
            }}
          />
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 45%, rgba(26,21,18,0.3) 100%)",
          }}
        />

        <motion.div
          style={{ height: letterboxHeight, opacity: letterboxOpacity }}
          className="absolute top-0 left-0 right-0 z-[5] bg-charcoal pointer-events-none"
        />
        <motion.div
          style={{ height: letterboxHeight, opacity: letterboxOpacity }}
          className="absolute bottom-0 left-0 right-0 z-[5] bg-charcoal pointer-events-none"
        />

        <motion.div
          style={{ opacity: textExitOpacity, y: textExitY }}
          className="absolute bottom-0 left-0 right-0 z-10"
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-24">
            <motion.p
              style={{ y: badgeY, opacity: badgeOpacity }}
              className="text-cream/35 text-[10px] tracking-[0.3em] uppercase mb-5 font-medium"
            >
              Scroll to build your room
            </motion.p>

            <motion.h2
              style={{ y: headlineY, opacity: headlineOpacity }}
              className="font-heading text-4xl md:text-5xl lg:text-[4.5rem] font-semibold tracking-[-0.04em] text-cream leading-[0.88] mb-4"
            >
              <span style={{ filter: 'drop-shadow(0 3px 20px rgba(0,0,0,0.5)) drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
                Assembled
                <br />
                <span className="text-cream/50 italic font-light">with intention.</span>
              </span>
            </motion.h2>

            <motion.p
              style={{ y: subY, opacity: subOpacity }}
              className="text-cream/35 text-sm md:text-base max-w-md leading-relaxed text-pretty"
            >
              Watch a room take shape — one considered piece at a time.
              This is how HËMMA spaces come to life.
            </motion.p>
          </div>
        </motion.div>

        <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-cream/20 text-[9px] tracking-[0.2em] uppercase font-medium -rotate-90 origin-center mb-4">
            Progress
          </span>
          <div className="relative w-[2px] h-28 bg-cream/8 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: progressScaleY }}
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-terracotta/80 via-cream/50 to-cream/20 origin-bottom rounded-full"
            />
          </div>
        </div>

        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 rounded-full border border-cream/15 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-1 h-1.5 rounded-full bg-cream/40"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
        <div className="h-24 bg-gradient-to-t from-charcoal to-transparent" />
      </div>
    </section>
  );
}
