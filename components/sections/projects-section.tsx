"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProjectCarousel from "@/components/project-carousel"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  images: string[]
  tags: string[]
  github: string
  demo: string
  featured: boolean
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "PralaySetu:Bridging Crisis To Safety",
      description:
         `PralaySetu is a MERN stack-based disaster management platform with ML integration, 
        real-time alerts, and multi-role access.
         It enables AI-based disaster prediction, live help requests with map navigation, multilingual support,
          and system-level push notifications for efficient crisis response.`,
      images: [
        "/pralay1.png",
        "/pralay2.png",
        "/pralay3.png",
        "/pralay4.png",
        "/pralay5.png",
      ],
      tags: ["MERN stack", "Socket.io" ,"Docker",  "Stripe" , "GoogleMap" , "Firebase cloud messaging"],
      github: "https://github.com/kshitijgupta0707/Pralaysetu",
      demo: "https://pralaysetu.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "BaatCheet",
      description:  `BaatCheet is a feature-rich chat app offering 
      real-time updates, personalized profiles , audio calls and intelligent features.
       Manage friendships, receive instant notifications, and chat with an AI-powered bot. 
       Log in securely via email or Google, and enjoy real-time communication through Socket.IO.
     `,
      images: [
        "/chat1.png",
        "/chat2.png",
        "/chat3.png",
        "/chat4.png",
        "/chat5.png",
      ],
      tags: ["MERN stack", "WebRTC", "Socket.io", "Tailwind CSS" , "Gemini AI"],
      github: "https://github.com/kshitijgupta0707/WeChat",
      demo: "https://textify-8adi.onrender.com/",
      featured: true,
    },
    {
      id: 3,
      title: "OneBookMarker",
      description: `The OneBookMarker is a Extension that
       uses machine learning to automatically categorize bookmarks based on their content. 
       Users can then modify these categories, create subcategories, and organize bookmarks 
       in a multi-level hierarchy. 
       With multi-category support, 
      it allows for flexible, personalized bookmark management.`,
      images: [
        "/bookmark1.png",
        "/bookmark2.png",
        "/bookmark3.png",
      ],
      tags: ["Chrome Extension API", "Flask", "MERN stack" ,"Tailwind CSS"],
      github: "https://github.com/kshitijgupta0707/BookmarkExtension.git",
      demo: "#",
      featured: true,
    }
    // ,
    // {
    //   id: 4,
    //   title: "Weather Dashboard",
    //   description: "A weather dashboard that displays current and forecasted weather data for any location.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["JavaScript", "API", "CSS"],
    //   github: "#",
    //   demo: "#",
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "Blog Platform",
    //   description: "A full-featured blog platform with markdown support and user authentication.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["Next.js", "Prisma", "PostgreSQL"],
    //   github: "#",
    //   demo: "#",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Chat Application",
    //   description: "A real-time chat application with private messaging and group chat functionality.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["React", "Socket.io", "Express"],
    //   github: "#",
    //   demo: "#",
    //   featured: false,
    // },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.featured)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3 },
    },
  }

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
          MY <span className="text-primary">PROJECTS</span>
        </motion.h2>
        <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto mb-8" />
        <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Here are some of my recent projects. Each project is a unique piece of development, designed and coded by me
          to solve real-world problems.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            className={
              activeFilter === "all"
                ? "bg-primary hover:bg-primary/90"
                : "border-primary/50 text-primary hover:bg-primary/10"
            }
            onClick={() => setActiveFilter("all")}
          >
            All Projects
          </Button>
          <Button
            variant={activeFilter === "featured" ? "default" : "outline"}
            className={
              activeFilter === "featured"
                ? "bg-primary hover:bg-primary/90"
                : "border-primary/50 text-primary hover:bg-primary/10"
            }
            onClick={() => setActiveFilter("featured")}
            
          >
            Featured
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-primary/10 hover:border-primary/30 relative ">
              <ProjectCarousel images={project.images} title={project.title} autoplaySpeed={3000} />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} className="bg-primary/20 text-primary hover:bg-primary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
                {/* Animated background */}
                <div className="absolute inset-0 opacity-10 blur-xl overflow-hidden">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-spin-slow`}
                    style={{
                      transformOrigin: "center center",
                      animation: `spin 20s linear infinite`,
                    }}
                  >
                    
                  </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/projects">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 group">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
