"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface QuoteBlockProps {
  quote: string
  author: string
  backgroundImage: string
}

export default function QuoteBlock({ quote, author, backgroundImage }: QuoteBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className="py-24 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 blur-sm"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div  className=" hidden dark:block absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/80" />
      <div  className=" dark:hidden absolute inset-0 bg-gradient-to-r from-cyan-900 to-cyan-900/80" />

      <div className="relative container mx-auto px-4 text-center">
        <svg className="w-12 h-12 mx-auto mb-6 text-cyan-400 opacity-50" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>

        <blockquote className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-medium mb-6">
            {quote.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {word}
              </motion.span>
            ))}
          </p>
          <footer className="text-lg text-cyan-400">— {author}</footer>
        </blockquote>
      </div>
    </motion.div>
  )
}
