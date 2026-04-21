import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const footerSections = [
  {
    title: "Shop",
    links: [
      { name: "Living", href: "#categories" },
      { name: "Bedroom", href: "#categories" },
      { name: "Kitchen", href: "#categories" },
      { name: "Workspace", href: "#categories" },
      { name: "Lighting", href: "#products" },
      { name: "Storage", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#inspiration" },
      { name: "Careers", href: "#newsletter" },
      { name: "Press", href: "#newsletter" },
      { name: "Sustainability", href: "#inspiration" },
      { name: "Journal", href: "#newsletter" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Delivery", href: "#newsletter" },
      { name: "Returns", href: "#newsletter" },
      { name: "Assembly", href: "#newsletter" },
      { name: "Design consult", href: "#newsletter" },
      { name: "Gift cards", href: "#products" },
    ],
  },
];

const socials = [
  { label: "Instagram", letter: "Ig" },
  { label: "Twitter", letter: "X" },
  { label: "Pinterest", letter: "Pi" },
  { label: "Youtube", letter: "Yt" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60 pt-20 lg:pt-28 pb-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-cream/8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-2"
          >
            <a href="#" className="inline-block mb-6" aria-label="HËMMA home">
              <span className="font-heading text-2xl font-semibold tracking-tight text-cream">
                HËMMA
              </span>
            </a>
            <p className="text-cream/35 text-sm leading-relaxed max-w-xs mb-8">
              Scandinavian design philosophy. Indian craftsmanship.
              Furniture that gets better with every year you own it.
            </p>
            <div className="flex flex-col gap-2.5 text-[13px]">
              <span className="inline-flex items-center gap-2.5">
                <MapPin size={14} strokeWidth={1.5} className="text-cream/30" />
                Mumbai · Bangalore · Hyderabad · Delhi
              </span>
              <a href="tel:1800-419-HEMMA" className="inline-flex items-center gap-2.5 hover:text-cream transition-colors">
                <Phone size={14} strokeWidth={1.5} className="text-cream/30" />
                1800-419-HEMMA
              </a>
              <a href="mailto:hello@hemma.in" className="inline-flex items-center gap-2.5 hover:text-cream transition-colors">
                <Mail size={14} strokeWidth={1.5} className="text-cream/30" />
                hello@hemma.in
              </a>
            </div>
          </motion.div>

          {/* Link columns */}
          {footerSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 + si * 0.08, ease }}
            >
              <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-cream/30 mb-5">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[13px] hover:text-cream transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-[11px] text-cream/25">
            &copy; {new Date().getFullYear()} HËMMA Furnishings Pvt. Ltd.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-cream/8 flex items-center justify-center text-[10px] font-medium text-cream/35 hover:text-cream hover:border-cream/20 transition-all"
              >
                {s.letter}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-[11px] text-cream/25">
            <a href="#" className="hover:text-cream/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-cream/50 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
