"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function ProjectCarousel({ images, title, autoplaySpeed = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToIndex = (index) => {
    if (isTransitioning || currentIndex === index) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, autoplaySpeed)
    return () => clearInterval(interval)
  }, [autoplaySpeed])

  return (
    <div className="relative overflow-hidden rounded-t-lg aspect-video">
      {/* Image */}
      <div className="w-full h-full">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-opacity duration-500",
              currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <img
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          console.log("Previous image clicked")
          e.stopPropagation()
          goToPrevious()
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-allz z-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              goToIndex(index)
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}