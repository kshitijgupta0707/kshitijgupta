"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

import Header from "@/components/header"
import MobileNav from "@/components/mobile-nav"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import ExperienceSection from "@/components/sections/experience-section"
import ContactSection from "@/components/sections/contact-section"
import QuoteBlock from "@/components/quote-block"
import BackgroundEffect from "@/components/background-effect"
import SplashScreen from "@/components/splash-screen"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  }

  return (
    <main className="relative bg-background text-foreground min-h-screen overflow-hidden">
      {/* Splash Screen */}
      <SplashScreen />

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{ scaleX }} />

      {/* Navigation */}
      {!isMobile && <Header sectionRefs={sectionRefs} />}
      {isMobile && <MobileNav sectionRefs={sectionRefs} />}

      {/* Background Effects */}
      <BackgroundEffect />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <section ref={sectionRefs.hero} id="hero" className="min-h-screen flex items-center">
          <HeroSection />
        </section>

        <section ref={sectionRefs.about} id="about" className="py-24">
          <AboutSection />
        </section>

        <QuoteBlock
          quote="Design is not just what it looks like and feels like. Design is how it works."
          author="Steve Jobs"
          backgroundImage="/images/1.jpg"
        />

        <section ref={sectionRefs.projects} id="projects" className="py-24">
          <ProjectsSection />
        </section>

        <section ref={sectionRefs.skills} id="skills" className="py-24">
          <SkillsSection />
        </section>

        {/* <QuoteBlock
          quote="Talk is cheap. Show me the code."
          author="Linus Torvalds"
          backgroundImage="/images/code-bg-2.jpg"
        /> */}
{/* 
        <section ref={sectionRefs.experience} id="experience" className="py-24">
          <ExperienceSection />
        </section> */}

        <section ref={sectionRefs.contact} id="contact" className="py-24">
          <ContactSection />
        </section>

        <footer className="py-12 text-center border-t border-border">
          {/* <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div> */}
           <div className="flex items-center justify-center gap-4 mb-5">
            <a
              href="https://github.com/kshitijgupta0707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-primary/20 p-3 rounded-full transition-colors"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/kshitijgupta0707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-primary/20 p-3 rounded-full transition-colors"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://x.com/KshitijGup37945/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-primary/20 p-3 rounded-full transition-colors"
            >
              <Twitter className="w-6 h-6 text-primary" />
            </a>
            <a
              href="mailto:kshitijgupta070704@gmail.com"
              className="bg-card hover:bg-primary/20 p-3 rounded-full transition-colors"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </div>
          <p className="text-muted-foreground">© {new Date().getFullYear()} Kshitij Gupta. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
