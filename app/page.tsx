'use client'

import { useRef, useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import AnimatedBackground from '@/components/animated-background'

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative bg-background text-foreground overflow-hidden">
      <AnimatedBackground scrollPosition={scrollPosition} />
      {/* Content overlay to improve readability */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
