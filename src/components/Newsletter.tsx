import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="newsletter" className="relative py-24 lg:py-32 bg-sand/40 overflow-hidden">
      {/* Subtle parallax background accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-terracotta/[0.03] blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-sage/[0.04] blur-3xl pointer-events-none"
      />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">
              Stay connected
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tighter text-charcoal leading-[0.95] mb-5">
              New arrivals,
              <br />
              <span className="text-muted/40">straight to you.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-md text-pretty">
              Get notified about new collections, seasonal offers, and
              exclusive HËMMA releases. No spam — just good furniture.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            {submitted ? (
              <div className="flex items-start gap-4 p-7 bg-ivory rounded-2xl border border-warm-border/50">
                <span className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-sage" />
                </span>
                <div>
                  <p className="text-charcoal font-medium text-sm mb-1">
                    Welcome to the circle.
                  </p>
                  <p className="text-muted text-sm">
                    Check your inbox — there's a 10% welcome code waiting for you.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 px-5 py-4 bg-cream rounded-xl border border-warm-border text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-charcoal/20 focus:border-charcoal/30 transition-all text-sm"
                  />
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2.5 px-7 py-4 bg-charcoal text-cream rounded-xl text-sm font-medium hover:bg-graphite transition-colors active:scale-[0.98]"
                  >
                    Subscribe
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
                <p className="text-[11px] text-muted/60 pl-1">
                  Unsubscribe in one click. Always.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
