import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Categories from "./components/Categories";
import TextureInterstitial from "./components/TextureInterstitial";
import ScrollVideo from "./components/ScrollVideo";
import FeaturedProducts from "./components/FeaturedProducts";
import RoomInspiration from "./components/RoomInspiration";
import CraftDetail from "./components/CraftDetail";
import Testimonials from "./components/Testimonials";
import PromoBar from "./components/PromoBar";
import AmbientMood from "./components/AmbientMood";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

/* ── Section transition — luxurious gradient fade ── */
function SectionTransition({
  from = "cream",
  to = "cream",
  accent,
  height = "h-24 lg:h-32",
}: {
  from?: string;
  to?: string;
  accent?: "terracotta" | "sage";
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.6]);

  const bgMap: Record<string, string> = {
    cream: "var(--color-cream)",
    charcoal: "var(--color-charcoal)",
    sand: "var(--color-sand)",
    ivory: "var(--color-ivory)",
  };

  return (
    <div ref={ref} className={`relative ${height} pointer-events-none`}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${bgMap[from] || bgMap.cream} 0%, ${bgMap[to] || bgMap.cream} 100%)`,
        }}
      />
      {accent && (
        <motion.div
          style={{ opacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                accent === "terracotta"
                  ? "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(184,92,63,0.03) 0%, transparent 70%)"
                  : "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(107,125,94,0.03) 0%, transparent 70%)",
            }}
          />
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-warm-border/20 to-transparent" />
        </motion.div>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SectionTransition from="charcoal" to="cream" accent="terracotta" />
        <Categories />
        <SectionTransition accent="sage" />
        <TextureInterstitial />
        <SectionTransition accent="terracotta" />
        <FeaturedProducts />
        <SectionTransition from="cream" to="charcoal" />
        <ScrollVideo />
        <SectionTransition from="charcoal" to="cream" accent="sage" />
        <RoomInspiration />
        <SectionTransition accent="terracotta" />
        <CraftDetail />
        <SectionTransition accent="sage" />
        <Testimonials />
        <SectionTransition />
        <PromoBar />
        <SectionTransition accent="terracotta" />
        <AmbientMood />
        <SectionTransition from="cream" to="sand" accent="sage" />
        <Newsletter />
        <SectionTransition from="sand" to="charcoal" />
      </main>
      <Footer />
    </>
  );
}

export default App;
