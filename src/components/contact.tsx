"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    matter: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email body with form details
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Matter Type: ${formData.matter}

Message:
${formData.message}`;

    // Create mailto link with the form data pre-filled
    const mailtoLink = `mailto:y2kroja@yahoo.com?subject=${encodeURIComponent(`New Inquiry: ${formData.matter || "General Inquiry"}`)}&body=${encodeURIComponent(emailBody)}&cc=${encodeURIComponent(formData.email)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", matter: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Nigeria",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 802 353 5099",
    },
    {
      icon: Mail,
      label: "Email",
      value: "y2kroja@yahoo.com",
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

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            GET IN TOUCH
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to Discuss Your Matter?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact me to schedule a consultation. I respond to inquiries within
            24 hours.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                className="p-8 bg-background rounded-xl border border-border text-center"
                variants={itemVariants}
                whileHover={{
                  borderColor: "var(--color-accent)",
                  boxShadow:
                    "0 10px 25px -5px rgba(var(--color-accent-rgb), 0.1)",
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-block p-3 bg-accent/10 rounded-lg mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">
                  {info.label}
                </h3>
                <p className="text-muted-foreground">{info.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto p-8 bg-background rounded-xl border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-block p-3 bg-accent/20 rounded-full mb-4"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <Send className="w-8 h-8 text-accent" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-serif font-bold text-foreground mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Thank You
                </motion.h3>
                <motion.p
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Your inquiry has been received. I&apos;ll be in touch shortly.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "name",
                      label: "Full Name *",
                      type: "text",
                      placeholder: "Your name",
                    },
                    {
                      name: "email",
                      label: "Email Address *",
                      type: "email",
                      placeholder: "your@email.com",
                    },
                  ].map((field, idx) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {field.label}
                      </label>
                      <motion.input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder={field.placeholder}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "phone",
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "+234...",
                    },
                    { name: "matter", label: "Matter Type", type: "select" },
                  ].map((field, idx) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {field.label}
                      </label>
                      {field.type === "select" ? (
                        <motion.select
                          name={field.name}
                          value={formData.matter}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          whileFocus={{ scale: 1.02 }}
                        >
                          <option value="">Select a practice area</option>
                          <option value="corporate">
                            Corporate Litigation
                          </option>
                          <option value="ip">Intellectual Property</option>
                          <option value="pe">Private Equity</option>
                          <option value="negotiation">
                            Strategic Negotiation
                          </option>
                          <option value="other">Other</option>
                        </motion.select>
                      ) : (
                        <motion.input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder={field.placeholder}
                          whileFocus={{ scale: 1.02 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your matter..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Send Inquiry
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
