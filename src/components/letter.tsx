"use client";

import { motion } from "framer-motion";
import { Tangerine, Lora, Crimson_Text } from "next/font/google";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const tangerine = Tangerine({ weight: "700", subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const crimsonText = Crimson_Text({ weight: "400", subsets: ["latin"] });

export default function Letter() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  const letterContent = `Some people enter your life and leave footprints that time can never erase. They become more than mentors, more than guides, and more than supporters. They become pillars. They become family in every way that truly matters.

You are that person to me.

As I sat down to write this, I realized that gratitude is a difficult thing to put into words when it runs as deep as mine does. How do you adequately thank someone who has consistently shown kindness, offered guidance, given support, and cared so genuinely? How do you measure the impact of someone whose presence has quietly changed the course of your life for the better?

The truth is, I cannot fully express it. But I can try.

Thank you.

Thank you for every moment of encouragement. Thank you for every piece of advice. Thank you for every act of kindness, whether big or small. Thank you for your generosity, your thoughtfulness, and the countless ways you have shown up for me over the years.

What makes your impact so remarkable is not simply what you have done, but how consistently you have done it.

Consistency is rare. Genuine care is rare. People who continue to give, support, encourage, and uplift without expecting anything in return are even rarer. Yet that is exactly who you have been. Time and time again, you have demonstrated a level of kindness and selflessness that has left a permanent mark on my life.

You have been a father figure to me in every sense that truly matters.

You have shown me that strength can be gentle. You have shown me that leadership is not about power but about service. You have shown me that success means very little if it is not accompanied by compassion and a willingness to lift others as you climb.

Your life is a testament to the kind of man I aspire to become.

Not because of titles or accomplishments, but because of your character. Because of your integrity. Because of your generosity. Because of the way you treat people. Because of the way you consistently choose to make a difference in the lives of others.

The world often celebrates achievements, but I believe the greatest achievement anyone can have is a life that leaves people better than they found them. By that measure, you are truly successful.

I hope you know that your kindness has never gone unnoticed.

Your support has never been forgotten.

Your investment in others has never been wasted.

You have made a difference. You have made an impact. And you have certainly made one in my life.

I pray that God continues to bless you abundantly. May He grant you good health, peace, joy, strength, and many more years filled with purpose and fulfillment. May every seed of kindness you have planted return to you a hundredfold. May you experience the same love, generosity, and unwavering support that you have so freely given to others.

Thank you for being a source of wisdom.

Thank you for being a source of encouragement.

Thank you for being a source of inspiration.

Thank you for being the father figure you have been to me.

And thank you, most importantly, for simply being the incredible person that you are.

Happy Birthday.

May this new chapter bring you even greater joy, deeper peace, and countless reminders of how deeply loved and appreciated you truly are.`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-red-50 py-12 px-4 md:px-8">
      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-8"
      >
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </motion.button>
        </Link>
      </motion.div>
      {/* Decorative top element */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 mt-8"
      >
        <div
          className="text-6xl md:text-7xl text-red-500 opacity-20 mb-4"
          style={{ fontFamily: tangerine.style.fontFamily }}
        >
          ✦
        </div>
      </motion.div>

      {/* Main letter container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white shadow-2xl rounded-lg p-8 md:p-16 border-l-4 border-red-500"
      >
        {/* Letter content */}
        <div
          className="space-y-4 md:space-y-6 text-gray-800 leading-relaxed"
          style={{ fontFamily: lora.style.fontFamily }}
        >
          {letterContent.split("\n\n").map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-base md:text-lg text-justify first-letter:ml-8 leading-8"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Signature section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 pt-8 border-t-2 border-red-200"
        >
          <p className="text-sm text-gray-600 mb-6 italic">
            With profound gratitude, admiration, and respect,
          </p>

          <div className="mb-8">
            <p
              className="text-5xl md:text-6xl text-red-500 font-light"
              style={{ fontFamily: tangerine.style.fontFamily }}
            >
              Teatoe
            </p>
          </div>

          {/* Date */}
          <p className="text-xs text-gray-400 tracking-widest uppercase">
            A heartfelt letter of gratitude
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative bottom element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div
          className="text-4xl text-red-500 opacity-20"
          style={{ fontFamily: tangerine.style.fontFamily }}
        >
          ✦
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
        style={{
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
          opacity: showScrollHint ? 1 : 0, // Moved here
        }}
      >
        <div className="text-center">
          <p className="text-xs text-red-500/60 mb-2 uppercase tracking-widest">
            Scroll to read
          </p>
          <ChevronDown size={20} className="text-red-500/60 mx-auto" />
        </div>
      </motion.div>

      {/* Back to top button (fixed, bottom right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showScrollHint ? 0 : 1,
          y: showScrollHint ? 20 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8"
        style={{ pointerEvents: showScrollHint ? "none" : "auto" }}
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-red-500/10 hover:bg-red-500/20 rounded-full border border-red-500/30 hover:border-red-500/50 transition-all"
          >
            <ArrowLeft size={18} className="text-red-500" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
