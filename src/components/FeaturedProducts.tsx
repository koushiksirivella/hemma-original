import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { featuredProducts, type Product } from "../data/products";

const filters = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen & Dining",
  "Workspace",
  "Lighting",
  "Storage",
];
const ease = [0.16, 1, 0.3, 1] as const;

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [liked, setLiked] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 25 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -5);
    rotateY.set(x * 5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
      className="group will-change-transform"
    >
      <div className="relative rounded-xl overflow-hidden bg-ivory aspect-[3/4] mb-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-500">
        {/* Product image */}
        <img
          src={product.image}
          alt={`${product.name} — ${product.material || product.category}`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {product.tag && (
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase ${
              product.tag === "sale"
                ? "bg-terracotta text-cream"
                : product.tag === "new"
                  ? "bg-charcoal text-cream"
                  : "bg-cream/90 backdrop-blur-sm text-charcoal"
            }`}
          >
            {product.tag}
          </span>
        )}

        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/80 backdrop-blur-sm flex items-center justify-center hover:bg-cream transition-all duration-200 active:scale-90"
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={15}
            strokeWidth={1.5}
            className={`transition-colors ${liked ? "fill-terracotta text-terracotta" : "text-graphite"}`}
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <button className="w-full py-3 bg-charcoal/90 backdrop-blur-sm text-cream rounded-lg text-xs font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-charcoal transition-colors active:scale-[0.98]">
            <ShoppingBag size={14} />
            Add to cart
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[11px] text-muted tracking-[0.12em] uppercase">
            {product.material || product.category}
          </p>
          {product.originalPrice && (
            <span className="text-[11px] font-medium text-terracotta">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              % off
            </span>
          )}
        </div>
        <h3 className="font-heading text-[15px] font-medium text-charcoal mb-2 group-hover:text-terracotta transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2.5">
          <span className="font-heading text-base font-semibold text-charcoal tabular-nums">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted/60 line-through tabular-nums">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header — left-aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">
              Curated for you
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-charcoal leading-[0.95]">
              Pieces you’ll reach for
              <br />
              <span className="text-muted/40">every single day.</span>
            </h2>
          </motion.div>

          <motion.a
            href="#products"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-3 text-sm font-medium text-muted hover:text-charcoal transition-colors"
          >
            View all
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-12 scrollbar-hide border-b border-warm-border/50"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                activeFilter === f
                  ? "bg-charcoal text-cream"
                  : "text-muted hover:text-charcoal"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Product Grid — 2-col on mobile, asymmetric 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-x-7 lg:gap-y-14">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
