import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const footerSections = [
  {
    title: "Shop",
    links: [
      { name: "Living Room", href: "#categories" },
      { name: "Bedroom", href: "#categories" },
      { name: "Kitchen & Dining", href: "#categories" },
      { name: "Workspace", href: "#categories" },
      { name: "Home Needs", href: "#products" },
      { name: "Storage", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#inspiration" },
      { name: "Our Story", href: "#inspiration" },
      { name: "Visit Store", href: "#newsletter" },
      { name: "Quality Promise", href: "#inspiration" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Delivery", href: "#newsletter" },
      { name: "Returns", href: "#newsletter" },
      { name: "Assembly", href: "#newsletter" },
      { name: "Custom Orders", href: "#newsletter" },
      { name: "Bulk Orders", href: "#products" },
    ],
  },
];

const socials = [
  { label: "Instagram", letter: "Ig" },
  { label: "Facebook", letter: "Fb" },
  { label: "WhatsApp", letter: "Wa" },
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
            <a href="#" className="inline-block mb-6" aria-label="Balaji Furniture home">
              <span className="font-heading text-2xl font-semibold tracking-tight text-cream">
                BALAJI
              </span>
              <span className="block text-cream/40 text-xs tracking-[0.1em] -mt-0.5">
                FURNITURE & HOME NEEDS
              </span>
            </a>
            <p className="text-cream/35 text-sm leading-relaxed max-w-xs mb-8">
              Your trusted furniture store in Nandigama.
              Quality home furnishings for every room, every family.
            </p>
            <div className="flex flex-col gap-2.5 text-[13px]">
              <span className="inline-flex items-center gap-2.5">
                <MapPin size={14} strokeWidth={1.5} className="text-cream/30" />
                Radam Center, Nandigama, AP 521185
              </span>
              <a href="tel:+919603005888" className="inline-flex items-center gap-2.5 hover:text-cream transition-colors">
                <Phone size={14} strokeWidth={1.5} className="text-cream/30" />
                +91 96030 05888
              </a>
              <a href="mailto:balajifurniture.nandigama@gmail.com" className="inline-flex items-center gap-2.5 hover:text-cream transition-colors">
                <Mail size={14} strokeWidth={1.5} className="text-cream/30" />
                balajifurniture.nandigama@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/place/Balaji+Furniture+Home+Needs/@16.7757948,80.2868048,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-cream transition-colors"
              >
                <Navigation size={14} strokeWidth={1.5} className="text-cream/30" />
                Get Directions on Google Maps
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

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 pb-16 border-b border-cream/8"
        >
          <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-cream/30 mb-5">
            Visit Our Store
          </h4>
          <div className="rounded-2xl overflow-hidden border border-cream/8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5!2d80.2868048!3d16.7757948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35bdf5a625d6ed%3A0x9d52f92de665a2c2!2sBalaji%20Furniture%20Home%20Needs!5e0!3m2!1sen!2sin!4v1713600000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Balaji Furniture Home Needs - Nandigama"
            />
          </div>
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-[11px] text-cream/25">
            &copy; {new Date().getFullYear()} Balaji Furniture & Home Needs, Nandigama
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
