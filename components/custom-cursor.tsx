"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setLinkHovered(true)
      } else {
        setLinkHovered(false)
      }
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    // Check if we're on a device with touch support
    if (typeof navigator !== "undefined" && !("maxTouchPoints" in navigator && navigator.maxTouchPoints > 0)) {
      addEventListeners()
      return () => removeEventListeners()
    }

    // Don't show custom cursor on touch devices
    return undefined
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
      animate={{
        x: position.x - (linkHovered ? 16 : clicked ? 4 : 8),
        y: position.y - (linkHovered ? 16 : clicked ? 4 : 8),
        opacity: hidden ? 0 : 1,
        scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div
        className={`rounded-full ${
          linkHovered ? "w-8 h-8 border-2 border-cyan-400 bg-transparent" : "w-4 h-4 bg-cyan-400"
        }`}
        animate={{
          opacity: clicked ? 0.5 : 1,
        }}
      />
    </motion.div>
  )
}
