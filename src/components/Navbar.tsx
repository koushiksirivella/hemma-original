import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { navLinks } from "../data/products";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Hide navbar when ScrollVideo section is in viewport */
  useEffect(() => {
    const target = document.getElementById("scroll-video");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Skip to content — keyboard a11y */}
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-charcoal focus:text-cream focus:rounded-lg focus:text-sm"
      >
        Skip to content
      </a>

      {/* ── Floating pill navbar ── */}
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 30,
          mass: 0.6,
        }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[880px]"
      >
        <div
          className={`relative rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-cream/75 backdrop-blur-2xl shadow-[0_2px_20px_rgba(26,21,18,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] border border-warm-border/40"
              : "bg-cream/40 backdrop-blur-xl border border-cream/20"
          }`}
        >
          <div className="flex items-center justify-between h-11 px-4 lg:px-5">
            {/* Logo — compact */}
            <a href="#" className="flex items-center gap-1 group shrink-0">
              <span className="font-heading text-[15px] font-semibold tracking-tight text-charcoal">
                HËMMA
              </span>
              <span className="w-1 h-1 rounded-full bg-terracotta group-hover:scale-[2] transition-transform duration-300" />
            </a>

            {/* Desktop links — compact pills */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-medium tracking-[0.04em] px-3 py-1 rounded-full transition-all duration-300 ${
                    link.highlight
                      ? "text-terracotta hover:bg-terracotta/8"
                      : "text-graphite/70 hover:text-charcoal hover:bg-charcoal/[0.04]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions — tight icon row */}
            <div className="flex items-center gap-0.5 shrink-0">
              <button
                className="flex items-center justify-center w-7 h-7 rounded-full text-graphite/60 hover:text-charcoal hover:bg-charcoal/[0.05] transition-all duration-200"
                aria-label="Search"
              >
                <Search size={14} strokeWidth={1.5} />
              </button>
              <button
                className="relative flex items-center justify-center w-7 h-7 rounded-full text-graphite/60 hover:text-charcoal hover:bg-charcoal/[0.05] transition-all duration-200"
                aria-label="Cart"
              >
                <ShoppingBag size={14} strokeWidth={1.5} />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-terracotta text-white text-[7px] font-bold rounded-full flex items-center justify-center leading-none">
                  3
                </span>
              </button>
              <button
                className="lg:hidden flex items-center justify-center w-7 h-7 rounded-full text-graphite/70 hover:bg-charcoal/[0.05] transition-all duration-200"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={15} /> : <Menu size={15} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown — slides out from pill */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-2 mx-2 rounded-2xl bg-cream/90 backdrop-blur-2xl border border-warm-border/40 shadow-[0_8px_32px_rgba(26,21,18,0.1)] overflow-hidden"
            >
              <div className="px-5 py-5 flex flex-col gap-0.5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`text-lg font-heading font-medium py-2.5 px-3 rounded-xl transition-colors duration-200 ${
                      link.highlight
                        ? "text-terracotta"
                        : "text-charcoal hover:bg-charcoal/[0.04]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
