"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function PracticeAreas() {
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

    const section = document.getElementById("practice");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const practices = [
    {
      icon: "⚖️",
      title: "Corporate Litigation",
      description:
        "Complex multi-party disputes, shareholder conflicts, and commercial contract enforcement requiring strategic navigation.",
    },
    {
      icon: "📜",
      title: "Transactional Experience",
      description:
        "Structuring complex mergers, cross-border acquisitions, corporate restructuring, and high-value commercial agreements from inception to closing.",
    },
    {
      icon: "🤝",
      title: "Strategic Negotiations",
      description:
        "High-stakes deal facilitation and dispute resolution combining legal expertise with commercial pragmatism.",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="practice" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            EXPERTISE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Areas of Practice
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Specialized legal services tailored to complex business challenges
            across multiple sectors.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:flex gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {practices.map((practice, idx) => (
            <motion.div
              key={idx}
              className="group p-8 bg-card rounded-xl border border-border cursor-pointer"
              variants={itemVariants}
              whileHover={{
                borderColor: "var(--color-accent)",
                boxShadow:
                  "0 20px 25px -5px rgba(var(--color-accent-rgb), 0.1)",
                y: -5,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.3, rotate: 12 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {practice.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-serif font-bold mb-3 text-foreground"
                initial={{ color: "var(--color-foreground)" }}
                whileHover={{ color: "var(--color-accent)" }}
              >
                {practice.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {practice.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
