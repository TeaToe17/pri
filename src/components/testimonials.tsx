"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Testimonials() {
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

    const section = document.getElementById("testimonials");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const testimonials = [
    {
      text: "Exceptional legal expertise coupled with strategic business acumen. Rotimi navigated our complex multi-jurisdictional litigation with remarkable efficiency.",
      author: "James Richardson",
      position: "CEO, Fortune 500 Tech Company",
      rating: 5,
    },
    {
      text: "His intellectual property litigation strategy was transformative. We achieved outcomes we didn't think possible. A true master of the courtroom.",
      author: "Sarah Chen",
      position: "General Counsel, Global Finance Corp",
      rating: 5,
    },
    {
      text: "More than a lawyer—a strategic advisor who understands business. Rotimi's counsel on our PE transaction saved us millions while mitigating risk.",
      author: "Marcus Thompson",
      position: "Partner, Leading PE Firm",
      rating: 5,
    },
    {
      text: "Uncompromising attention to detail and a killer instinct for negotiation. Exactly the advocate you want when stakes are highest.",
      author: "Emma Williams",
      position: "Board Member, International Corporation",
      rating: 5,
    },
    {
      text: "Handled our shareholder dispute with surgical precision. His understanding of corporate governance and litigation strategy is unmatched.",
      author: "David Kim",
      position: "Founder & Chairman, Tech Startup",
      rating: 5,
    },
    {
      text: "Hired for a 90-day emergency situation and solved it completely. Rotimi brought clarity to chaos and delivered a brilliant resolution.",
      author: "Elizabeth Grant",
      position: "CFO, Investment Management Firm",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="testimonials" className="py-20 bg-card/50">
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
            CLIENT VOICES
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Clients Say
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by leading organizations for exceptional legal
            representation and strategic counsel.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="group p-8 bg-background rounded-xl border border-border cursor-pointer"
              variants={itemVariants}
              whileHover={{
                borderColor: "var(--color-accent)",
                boxShadow:
                  "0 20px 25px -5px rgba(var(--color-accent-rgb), 0.1)",
                y: -8,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Stars */}
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 + 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={`star-${idx}-${i}`}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                  >
                    <Star size={16} className="fill-accent text-accent" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.p
                className="text-foreground leading-relaxed mb-6 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.08 + 0.4, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ color: "var(--color-accent)" }}
              >
                "{testimonial.text}"
              </motion.p>

              {/* Author */}
              <motion.div
                className="pt-4 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.08 + 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.position}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
