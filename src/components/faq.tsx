"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("faq");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const faqs = [
    {
      q: "What types of cases do you specialize in?",
      a: "I focus on complex corporate litigation, intellectual property disputes, private equity advisory, and strategic negotiations. My experience spans multi-jurisdictional matters across financial services, technology, healthcare, and manufacturing sectors.",
    },
    {
      q: "How do you approach litigation strategy?",
      a: "I combine rigorous legal analysis with business strategy. Before proceeding, I assess risk, timeline, cost, and potential outcomes. I'm a strong advocate for resolution when it's in the client's best interest, but equally prepared for aggressive courtroom advocacy when needed.",
    },
    {
      q: "What is your success rate?",
      a: "Over 400+ managed cases, I maintain a 95% favorable outcome rate. This reflects both successful trial results and favorable settlements. I focus on results that serve my clients' long-term business interests, not just short-term litigation victories.",
    },
    {
      q: "Do you handle matters outside the UK?",
      a: "Yes. I have extensive experience with cross-border disputes and maintain relationships with leading law firms globally. I frequently coordinate multi-jurisdictional litigation and international negotiations.",
    },
    {
      q: "What are your fees?",
      a: "Fee structures depend on the engagement type. I offer hourly rates for advisory work, fixed fees for defined projects, and contingency arrangements for qualifying matters. I'll provide transparent estimates after understanding your specific needs.",
    },
    {
      q: "How quickly can you get up to speed on a matter?",
      a: "I pride myself on rapid case assessment. For emergency situations, I can often provide preliminary analysis within 24-48 hours. I maintain detailed intake processes to ensure thorough understanding before advising.",
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FREQUENTLY ASKED
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Common Questions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Answers to help you understand our services and approach.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
              variants={itemVariants}
              whileHover={{
                boxShadow:
                  "0 10px 25px -5px rgba(var(--color-accent-rgb), 0.1)",
              }}
            >
              <motion.button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-6 flex items-center justify-between gap-4 bg-card hover:bg-card/70 transition-colors text-left"
                whileHover={{ backgroundColor: "rgb(var(--color-card) / 0.7)" }}
              >
                <h3 className="font-serif font-bold text-lg text-foreground">
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={24}
                    className="text-accent flex-shrink-0"
                  />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    className="px-6 py-4 bg-background/50 border-t border-border"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p
                      className="text-foreground/80 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {faq.a}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
