"use client";

import { useEffect, useState } from "react";
import { Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Awards() {
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

    const section = document.getElementById("awards");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const awards = [
    {
      year: 2024,
      title: "Best Litigation Lawyer",
      org: "Legal Excellence Awards",
    },
    { year: 2024, title: "Top 100 Trial Lawyers", org: "UK Legal Rankings" },
    {
      year: 2023,
      title: "Commercial Litigation Leader",
      org: "International Legal Forum",
    },
    {
      year: 2023,
      title: "Innovation in Law Award",
      org: "Legal Tech Consortium",
    },
    { year: 2022, title: "Best Corporate Counsel", org: "Business Law Awards" },
    { year: 2022, title: "Litigation Star", org: "Chambers & Partners" },
    {
      year: 2021,
      title: "Client Choice Award",
      org: "Legal Client Association",
    },
    { year: 2021, title: "Outstanding Achievement", org: "Law Society UK" },
    {
      year: 2020,
      title: "Best in Class Litigation",
      org: "International Bar Association",
    },
    { year: 2020, title: "Lawyer of the Year", org: "UK Legal Awards" },
    { year: 2019, title: "Rising Star Award", org: "Legal 500" },
    {
      year: 2019,
      title: "Best Commercial Lawyer",
      org: "Financial Law Awards",
    },
    { year: 2018, title: "Excellence in Advocacy", org: "Bar Association" },
    {
      year: 2018,
      title: "Top Tier Practitioner",
      org: "International Rankings",
    },
    {
      year: 2017,
      title: "Strategic Counsel Award",
      org: "Business Excellence",
    },
    { year: 2017, title: "Best IP Litigator", org: "IP Law Society" },
    {
      year: 2016,
      title: "Notable Practitioner",
      org: "Professional Recognition",
    },
    {
      year: 2016,
      title: "Deal Maker of the Year",
      org: "Finance & Law Awards",
    },
    { year: 2015, title: "Young Lawyer Excellence", org: "Law Society" },
    {
      year: 2015,
      title: "Distinguished Counsel",
      org: "International Association",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="awards" className="py-20 bg-background">
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
            RECOGNITION
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Awards & Honors
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recognized for excellence and leadership across the legal
            profession.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              className="group p-6 bg-card rounded-lg border border-border cursor-pointer"
              variants={itemVariants}
              whileHover={{
                borderColor: "var(--color-accent)",
                boxShadow:
                  "0 10px 25px -5px rgba(var(--color-accent-rgb), 0.1)",
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-start gap-3 mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 + 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                </motion.div>
                <div className="flex-1">
                  <motion.div
                    className="text-sm font-semibold text-accent mb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {award.year}
                  </motion.div>
                  <motion.h4
                    className="font-serif font-bold text-foreground"
                    initial={{ color: "var(--color-foreground)" }}
                    whileHover={{ color: "var(--color-accent)" }}
                  >
                    {award.title}
                  </motion.h4>
                </div>
              </motion.div>
              <motion.p
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                {award.org}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
