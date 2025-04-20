"use client"

import { useState, useEffect, type RefObject } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code, Award, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import ProjectSelectionDialog from "@/components/project-selection-dialog"

interface MobileNavProps {
  sectionRefs: {
    [key: string]: RefObject<HTMLElement>
  }
}

export default function MobileNav({ sectionRefs }: MobileNavProps) {
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { name: "Home", section: "hero", icon: Home, hasDialog: false },
    { name: "About", section: "about", icon: User, hasDialog: false },
    { name: "Projects", section: "projects", icon: Code, hasDialog: true },
    { name: "Skills", section: "skills", icon: Award, hasDialog: false },
    { name: "Experience", section: "experience", icon: Briefcase, hasDialog: false },
    { name: "Contact", section: "contact", icon: Mail, hasDialog: false },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

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
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border py-2 px-4 md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.section}>
              {item.hasDialog ? (
                <ProjectSelectionDialog onMainProjectsClick={() => scrollToSection(item.section)}>
                  <button className="flex flex-col items-center p-2 relative">
                    <div
                      className={cn(
                        "p-2 rounded-full transition-all duration-300",
                        activeSection === item.section
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={cn(
                        "text-xs mt-1 transition-colors",
                        activeSection === item.section ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.name}
                    </span>
                    {activeSection === item.section && (
                      <motion.div
                        layoutId="activeMobileSection"
                        className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-primary"
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
                  className="flex flex-col items-center p-2 relative"
                >
                  <div
                    className={cn(
                      "p-2 rounded-full transition-all duration-300",
                      activeSection === item.section
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={cn(
                      "text-xs mt-1 transition-colors",
                      activeSection === item.section ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </span>
                  {activeSection === item.section && (
                    <motion.div
                      layoutId="activeMobileSection"
                      className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
