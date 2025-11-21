'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, Zap } from 'lucide-react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Godwin Benedict'
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping) return

    const timer = setTimeout(() => {
      if (displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      } else {
        setIsTyping(false)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [displayText, isTyping])

  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Decorative Circuit */}
        <div className="mb-8 inline-block">
          <div className="p-4 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm animate-glow-pulse">
            <Zap className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">
            {displayText}
          </span>
          <span className="animate-pulse">_</span>
        </h1>

        {/* Subheading */}
        <div className="space-y-4 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            <span className="text-secondary font-mono">{'<'}</span>
            {' Full Stack Developer '}
            <span className="text-secondary font-mono">{'/>'}</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting elegant, animated digital experiences with React, Next.js, and modern web technologies. Specializing in responsive design and robust backend solutions.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-mono font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 glow-purple"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-mono font-bold hover:bg-primary/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
