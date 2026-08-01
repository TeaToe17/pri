'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface StatProps {
  value: string
  label: string
  isVisible: boolean
  delay: number
}

function StatCounter({ value, label, isVisible, delay }: StatProps) {
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const numStr = value.replace(/[^0-9]/g, '')
      const num = parseInt(numStr, 10)

      let current = 0
      const increment = Math.ceil(num / 50)
      const interval = setInterval(() => {
        current += increment
        if (current >= num) {
          setDisplayValue(value)
          clearInterval(interval)
        } else {
          setDisplayValue(current.toString())
        }
      }, 30)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, value, delay])

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold text-accent mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay / 1000 + 0.2 }}
        viewport={{ once: true }}
      >
        {displayValue}
      </motion.div>
      <motion.p
        className="text-foreground/70 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay / 1000 + 0.3 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.p>
    </motion.div>
  )
}

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('statistics')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const stats = [
    { value: '400+', label: 'Cases Successfully Managed' },
    { value: '18+', label: 'Years of Practice' },
    { value: '95%', label: 'Win Rate' },
    { value: '£500M+', label: 'Total Value Recovered' },
  ]

  return (
    <section id="statistics" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              label={stat.label}
              isVisible={isVisible}
              delay={idx * 200}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
