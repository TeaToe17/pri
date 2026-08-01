'use client'

import { useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import PracticeAreas from '@/components/practice-areas'
import Experience from '@/components/experience'
import Awards from '@/components/awards'
import Statistics from '@/components/statistics'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  useEffect(() => {
    // Dynamically import locomotive-scroll to prevent SSR issues
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      })
    }

    initLocomotiveScroll()
  }, [])

  return (
    <div data-scroll-container className="w-full overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Experience />
        <Statistics />
        <Awards />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
