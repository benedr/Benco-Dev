'use client'

import { useEffect, useRef } from 'react'

interface AnimatedBackgroundProps {
  scrollPosition: number
}

export default function AnimatedBackground({ scrollPosition }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId: number

    const draw = () => {
      // Semi-transparent dark background
      ctx.fillStyle = 'rgba(13, 13, 23, 0.3)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated grid with reduced opacity
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.05)'
      ctx.lineWidth = 1

      const gridSize = 50
      const offset = (scrollPosition % gridSize) * 0.5

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x - offset, 0)
        ctx.lineTo(x - offset, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y - offset)
        ctx.lineTo(canvas.width, y - offset)
        ctx.stroke()
      }

      // Draw floating particles with reduced opacity
      const particleCount = 15
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(scrollPosition * 0.001 + i) * canvas.width + canvas.width) / 2
        const y = (Math.cos(scrollPosition * 0.0005 + i * 2) * canvas.height + canvas.height) / 2

        ctx.fillStyle = `rgba(139, 92, 246, ${0.15 + Math.sin(scrollPosition * 0.01 + i) * 0.1})`
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollPosition])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  )
}
