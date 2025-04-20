"use client"

import { useState, useEffect, type RefObject } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import ProjectSelectionDialog from "@/components/project-selection-dialog"

interface HeaderProps {
  sectionRefs: {
    [key: string]: RefObject<HTMLElement>
  }
}

export default function Header({ sectionRefs }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Home", section: "hero" },
    { name: "About", section: "about" },
    { name: "Projects", section: "projects", hasDialog: true },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Contact", section: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Check if scrolled for header background
      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      for (const section of Object.keys(sectionRefs)) {
        const element = sectionRefs[section].current
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionRefs])

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs[sectionId].current
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          <span className="text-primary">Kshitij</span> Gupta
        </motion.div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li
                  key={item.section}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: navItems.indexOf(item) * 0.1 }}
                >
                  {item.hasDialog ? (
                    <ProjectSelectionDialog onMainProjectsClick={() => scrollToSection(item.section)}>
                      <button
                        className={cn(
                          "relative px-1 py-2 text-sm font-medium transition-colors",
                          activeSection === item.section
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item.name}
                        {activeSection === item.section && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>
                    </ProjectSelectionDialog>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className={cn(
                        "relative px-1 py-2 text-sm font-medium transition-colors",
                        activeSection === item.section ? "text-primary" : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.name}
                      {activeSection === item.section && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
