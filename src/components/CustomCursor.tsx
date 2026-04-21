import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor
 * Site-wide cursor replacement. Soft circle that grows on hover over
 * interactive elements (links, buttons, [data-cursor]).
 *
 * Hidden on touch devices automatically.
 */
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Lighter spring → fewer interpolation frames per second
  const sx = useSpring(x, { stiffness: 320, damping: 36, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 320, damping: 36, mass: 0.5 });

  const [variant, setVariant] = useState<"default" | "hover" | "view">("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch / coarse pointer AND on devices that prefer reduced motion
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || reduced) return;
    setEnabled(true);

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function over(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("[data-cursor='view']")) return setVariant("view");
      if (
        t.closest(
          "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
        )
      )
        return setVariant("hover");
      setVariant("default");
    }

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === "view" ? 88 : variant === "hover" ? 48 : 18;

  return (
    <>
      {/* Hide native cursor — scoped to html/body only (NOT * — that triggers
          full-tree style invalidation on every paint and is the #1 cause of
          custom-cursor lag). Children inherit the cursor naturally. */}
      <style>{`
        @media (pointer: fine) {
          html, body { cursor: none; }
          a, button, [role='button'], input, textarea, select,
          [data-cursor='hover'], [data-cursor='view'] { cursor: none; }
        }
      `}</style>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
          willChange: "transform, width, height",
          background:
            variant === "default"
              ? "rgba(255,255,255,0.95)"
              : "rgba(255,255,255,0.18)",
          border:
            variant === "default"
              ? "none"
              : "1px solid rgba(255,255,255,0.85)",
          // backdrop-filter removed — was forcing a per-frame GPU blur
          // on a constantly-moving element (≈4–8 ms per frame on mid-range GPUs).
          transition:
            "width 280ms cubic-bezier(.2,.8,.2,1), height 280ms cubic-bezier(.2,.8,.2,1), background 200ms, border 200ms",
        }}
      >
        {variant === "view" && (
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white">
            View
          </span>
        )}
      </motion.div>
    </>
  );
}
