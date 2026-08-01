"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-background pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <motion.div
          className="overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.span
              className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ESTABLISHED 2006 • NIGERIA
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance mb-6 text-foreground"
            variants={itemVariants}
          >
            {["Precision", "in Law.", "Foundations", "in Excellence."].map(
              (word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  {word}{" "}
                </motion.span>
              ),
            )}
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
            variants={itemVariants}
          >
            Specializing in complex corporate litigation and strategic private
            equity advisory within the world's most dynamic financial district.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Schedule Consultation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                View Experience
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {[
              { value: "400+", label: "Cases Managed" },
              { value: "18+", label: "Years Experience" },
              { value: "20+", label: "Awards Won" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-3xl font-bold text-accent mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="https://res.cloudinary.com/dwtzzlpcp/image/upload/v1785593666/534325ef-27a6-4aa6-b2c2-ea582cf31174_euomxw.jpg"
            alt="Olurotimi Paul Idowu - Trial Lawyer"
            fill
            className="object-cover object-[center_15%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          <motion.div
            className="absolute inset-0 bg-accent/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
