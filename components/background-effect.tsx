"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    let mouseX = 0
    let mouseY = 0

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars() // Reinitialize stars when canvas is resized
    }

    class Star {
      x: number
      y: number
      z: number
      size: number
      color: string
      opacity: number
      speed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000
        this.size = Math.random() * 1.5 + 0.5

        // Color based on theme
        const isDark = theme === "dark"
        const hue = Math.random() * 30 + 180 // Teal/blue hues
        const saturation = Math.random() * 20 + 10 // Low saturation

        // Adjust lightness based on theme
        const lightness = isDark
          ? Math.random() * 30 + 70 // Higher lightness for dark theme
          : Math.random() * 30 + 20 // Lower lightness for light theme

        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`

        this.opacity = isDark ? Math.random() * 0.5 + 0.2 : Math.random() * 0.3 + 0.1
        this.speed = Math.random() * 0.5 + 0.2
      }

      update() {
        // Move the star closer (decrease z)
        this.z -= this.speed

        // If the star is too close, reset it to the back
        if (this.z <= 0) {
          this.z = 1000
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        }
      }

      draw() {
        if (!ctx) return

        // Calculate the star's position based on its z-coordinate
        const scale = 1000 / this.z
        const x = this.x - (this.x - canvas.width / 2) * scale
        const y = this.y - (this.y - canvas.height / 2) * scale

        // Calculate size based on z-coordinate
        const sizeFactor = Math.max(0.1, 1000 / this.z)
        const size = this.size * sizeFactor

        // Only draw if the star is within the canvas
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = this.color
          ctx.globalAlpha = this.opacity * (1 - this.z / 1000)
          ctx.fill()
          ctx.globalAlpha = 1
        }
      }
    }

    const initStars = () => {
      // Create stars based on screen size
      const starCount = Math.min(300, Math.floor((canvas.width * canvas.height) / 3000))
      stars = []
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star())
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      for (const star of stars) {
        star.update()
        star.draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)
    window.addEventListener("mousemove", handleMouseMove)

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
