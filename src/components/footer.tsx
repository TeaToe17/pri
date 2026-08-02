"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const footer = document.getElementById("footer");
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-serif font-bold mb-3"
              whileHover={{ color: "var(--color-accent)" }}
            >
              Rotimi Paul Idowu
            </motion.h3>
            <p className="text-primary-foreground/70 text-sm">
              Trial Lawyer | Legal Strategist | 18+ Years Experience
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                { href: "#about", label: "About" },
                { href: "#practice", label: "Practice Areas" },
                { href: "#experience", label: "Experience" },
                { href: "#contact", label: "Contact" },
              ].map((link, idx) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Expertise
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                "Corporate Litigation",
                "IP Disputes",
                "Private Equity",
                "Strategic Negotiation",
              ].map((area, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5, color: "var(--color-accent)" }}
                >
                  <a href="#" className="transition-colors">
                    {area}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              {[
                { icon: Phone, text: "+234 802 353 5099" },
                { icon: MapPin, text: "Nigeria" },
                { icon: Mail, text: "y2kroja@yahoo.com" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.p
                    key={idx}
                    className="flex items-center gap-2"
                    whileHover={{ x: 5, color: "var(--color-accent)" }}
                  >
                    <Icon size={16} />
                    {item.text}
                  </motion.p>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:y2kroja@yahoo.com"
                aria-label="Email"
                className="p-2 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-accent hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-primary-foreground/10 pt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        >
          {/* Bottom Content */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              © {new Date().getFullYear()} Olurotimi Paul Idowu. All rights
              reserved.
            </p>
            <div className="flex gap-6 items-center">
              {[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
              ].map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                  whileHover={{ textDecoration: "underline" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <span className="text-primary-foreground/30">•</span>
              <motion.a
                href="/tea"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                whileHover={{ textDecoration: "underline" }}
              >
                Built by Tea
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
