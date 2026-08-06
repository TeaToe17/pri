"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

export default function Awards() {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const awards = [
    {
      year: 2024,
      title: "Best Litigation Lawyer",
      org: "Legal Excellence Awards",
      level: "gold",
    },
    {
      year: 2024,
      title: "Top 100 Trial Lawyers",
      org: "International Legal Rankings",
      level: "gold",
    },
    {
      year: 2023,
      title: "Commercial Litigation Leader",
      org: "International Legal Forum",
      level: "platinum",
    },
    {
      year: 2023,
      title: "Innovation in Law Award",
      org: "Legal Tech Consortium",
      level: "silver",
    },
    {
      year: 2022,
      title: "Best Corporate Counsel",
      org: "Business Law Awards",
      level: "gold",
    },
    {
      year: 2022,
      title: "Litigation Star",
      org: "Chambers & Partners",
      level: "platinum",
    },
    {
      year: 2021,
      title: "Client Choice Award",
      org: "Legal Client Association",
      level: "gold",
    },
    {
      year: 2021,
      title: "Outstanding Achievement",
      org: "Nigerian Bar Association",
      level: "platinum",
    },
    {
      year: 2020,
      title: "Best in Class Litigation",
      org: "International Bar Association",
      level: "gold",
    },
    {
      year: 2020,
      title: "Lawyer of the Year",
      org: "Legal Awards",
      level: "platinum",
    },
    {
      year: 2019,
      title: "Rising Star Award",
      org: "Legal 500",
      level: "silver",
    },
    {
      year: 2019,
      title: "Best Commercial Lawyer",
      org: "Financial Law Awards",
      level: "gold",
    },
    {
      year: 2018,
      title: "Excellence in Advocacy",
      org: "Bar Association",
      level: "gold",
    },
    {
      year: 2018,
      title: "Top Tier Practitioner",
      org: "International Rankings",
      level: "platinum",
    },
    {
      year: 2017,
      title: "Strategic Counsel Award",
      org: "Business Excellence",
      level: "silver",
    },
    {
      year: 2017,
      title: "Best IP Litigator",
      org: "IP Law Society",
      level: "gold",
    },
    {
      year: 2016,
      title: "Notable Practitioner",
      org: "Professional Recognition",
      level: "silver",
    },
    {
      year: 2016,
      title: "Deal Maker of the Year",
      org: "Finance & Law Awards",
      level: "gold",
    },
    {
      year: 2015,
      title: "Young Lawyer Excellence",
      org: "Law Society",
      level: "silver",
    },
    {
      year: 2015,
      title: "Distinguished Counsel",
      org: "International Association",
      level: "platinum",
    },
  ];

  // Group awards by year in descending order
  const groupedByYear = awards.reduce(
    (acc, award) => {
      const existingYear = acc.find((g) => g.year === award.year);
      if (existingYear) {
        existingYear.awards.push(award);
      } else {
        acc.push({ year: award.year, awards: [award] });
      }
      return acc;
    },
    [] as { year: number; awards: typeof awards }[],
  );

  groupedByYear.sort((a, b) => b.year - a.year);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "platinum":
        return "text-accent";
      case "gold":
        return "text-accent";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="awards" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            RECOGNITION & ACCOLADES
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Distinguished Awards
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A testament to excellence, leadership, and unwavering commitment to
            legal mastery across two decades of distinguished practice.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent/20 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {groupedByYear.map((yearGroup, yearIdx) => (
              <motion.div
                key={yearGroup.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: yearIdx * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredYear(yearGroup.year)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Year marker */}
                <div className="flex items-center mb-6">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-background border-4 border-accent rounded-full transform md:-translate-x-3 z-10" />
                  <motion.div
                    className="md:w-1/2 ml-12 md:ml-0 md:pr-12"
                    animate={{
                      opacity:
                        hoveredYear === null || hoveredYear === yearGroup.year
                          ? 1
                          : 0.4,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-serif font-bold text-accent">
                      {yearGroup.year}
                    </div>
                  </motion.div>
                </div>

                {/* Awards for this year */}
                <div className="md:w-1/2 ml-12 md:ml-auto md:pl-12 space-y-4 pb-8">
                  {yearGroup.awards.map((award, awardIdx) => (
                    <motion.div
                      key={`${award.year}-${awardIdx}`}
                      className="group relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: awardIdx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                    >
                      <div className="p-5 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300 relative overflow-hidden">
                        {/* Gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10 flex items-start gap-4">
                          {/* Icon */}
                          <motion.div
                            className="flex-shrink-0 mt-1"
                            whileHover={{ scale: 1.2, rotate: 12 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {award.level === "platinum" ? (
                              <Star className="w-5 h-5 text-accent fill-accent" />
                            ) : (
                              <Award
                                className={`w-5 h-5 ${getLevelColor(award.level)}`}
                              />
                            )}
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <motion.h4 className="font-serif font-bold text-foreground group-hover:text-accent transition-colors text-sm md:text-base">
                              {award.title}
                            </motion.h4>
                            <motion.p className="text-xs md:text-sm text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors">
                              {award.org}
                            </motion.p>
                          </div>

                          {/* Level badge */}
                          {award.level === "platinum" && (
                            <div className="flex-shrink-0 px-2.5 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent uppercase tracking-wider">
                              Premier
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "20+", label: "Awards Won" },
            { number: "10", label: "Years Recognized" },
            { number: "15+", label: "Organizations" },
            { number: "5", label: "Premier Awards" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
