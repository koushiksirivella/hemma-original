import { useEffect, useRef, useState } from "react";

/**
 * ScrollSequence
 * Apple-style image-sequence scrubbed by scroll position.
 * Drop your frames in /public/sequences/<name>/<prefix>0001.webp ...
 *
 * Usage:
 *   <ScrollSequence
 *     framesPath="/sequences/hero-chair/chair_"
 *     totalFrames={75}
 *     extension="webp"
 *     pinViewports={3}
 *   />
 *
 * Performance:
 *  - All frames preloaded then drawn to a single <canvas>.
 *  - Cap totalFrames around 100, frame width ≤ 1500px, format WebP.
 *  - Honours prefers-reduced-motion (renders only the middle frame).
 */
export default function ScrollSequence({
  framesPath,
  totalFrames,
  extension = "webp",
  pinViewports = 3,
  padDigits = 4,
  className = "",
  children,
}: {
  framesPath: string;
  totalFrames: number;
  extension?: "webp" | "jpg" | "png" | "avif";
  pinViewports?: number;
  padDigits?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Preload frames
  useEffect(() => {
    let cancelled = false;
    const imgs: HTMLImageElement[] = [];
    let count = 0;
    for (let i = 1; i <= totalFrames; i++) {
      const num = String(i).padStart(padDigits, "0");
      const img = new Image();
      img.src = `${framesPath}${num}.${extension}`;
      img.onload = () => {
        if (cancelled) return;
        count += 1;
        setLoaded(count);
        if (count === 1) drawFrame(0);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [framesPath, totalFrames, extension, padDigits]);

  function drawFrame(index: number) {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = rect.width * dpr;
    const h = rect.height * dpr;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Cover-fit
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    const dx = (w - dw) / 2;
    const dy = (h - dh) / 2;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  // Scroll handler
  useEffect(() => {
    if (reducedMotion) {
      drawFrame(Math.floor(totalFrames / 2));
      return;
    }
    let raf = 0;

    function update() {
      const wrap = wrapperRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      const frame = Math.min(
        totalFrames - 1,
        Math.floor(progress * totalFrames)
      );
      drawFrame(frame);
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [totalFrames, reducedMotion]);

  const progressPct = Math.round((loaded / totalFrames) * 100);

  return (
    <section
      ref={wrapperRef}
      className={`relative ${className}`}
      style={{ height: `${pinViewports * 100}vh` }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <canvas ref={canvasRef} className="h-full w-full" />
        {loaded < totalFrames && (
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-charcoal/60">
            Loading {progressPct}%
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
