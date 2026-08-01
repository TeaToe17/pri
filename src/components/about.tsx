"use client";

import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const highlights = [
    " 18 years of litigation experience",
    "400+ complex cases managed",
    "Expertise in corporate litigation",
    "Intellectual property specialization",
    "Private equity advisory",
    "Strategic negotiations",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20"
          >
            <Image
              src="https://res.cloudinary.com/dwtzzlpcp/image/upload/v1785593666/c7920d00-9e89-4db0-8763-1bcb00a48fea_hccdua.jpg"
              alt="Professional environment"
              fill
              className="object-cover object-[center_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
                ABOUT ROTIMI
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A Career Built on Excellence and Results
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              With nearly two decades of dedicated legal practice, I have
              established myself as a trusted advocate for complex corporate
              matters across Nigeria and internationally. My approach combines
              rigorous legal analysis with strategic foresight, delivering
              outcomes that protect and advance my clients' interests.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  </motion.div>
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-muted-foreground italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              "My commitment is to deliver not just legal services, but
              strategic partnership that drives real business outcomes."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
