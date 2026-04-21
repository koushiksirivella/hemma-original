import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * TiltCard
 * Wrap any element to give it a 3D mouse-tilt effect.
 * No assets required. Pure CSS perspective + spring physics.
 *
 * Usage:
 *   <TiltCard><img src="..." /></TiltCard>
 */
export default function TiltCard({
  children,
  intensity = 12,
  glare = true,
  className = "",
}: {
  children: ReactNode;
  intensity?: number;
  glare?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(rx, springConfig);
  const rotateY = useSpring(ry, springConfig);
  const glareX = useSpring(gx, springConfig);
  const glareY = useSpring(gy, springConfig);

  const glareBg = useTransform(
    [glareX, glareY] as never,
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 55%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((0.5 - py) * intensity);
    ry.set((px - 0.5) * intensity);
    gx.set(px * 100);
    gy.set(py * 100);
  }

  function handleMouseLeave() {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
        />
      )}
    </motion.div>
  );
}
