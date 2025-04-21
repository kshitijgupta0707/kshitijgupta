"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
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
  category: string
}

export default function AllProjectsPage() {
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
      category: "web"

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
      category: "web"

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
      category: "web"
    }
    // {
    //   id: 1,
    //   title: "E-Commerce Platform",
    //   description:
    //     "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["React", "Node.js", "MongoDB", "Stripe"],
    //   github: "#",
    //   demo: "#",
    //   category: "web",
    // // },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates and team functionality.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["React", "Firebase", "Tailwind CSS"],
    //   github: "#",
    //   demo: "#",
    //   category: "web",
    // },
    // {
    //   id: 3,
    //   title: "Portfolio Website",
    //   description: "A modern portfolio website with dark mode, animations, and responsive design.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    //   github: "#",
    //   demo: "#",
    //   category: "web",
    // },
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
    //   category: "web",
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
    //   category: "web",
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
    //   category: "web",
    // },
    // {
    //   id: 7,
    //   title: "Mobile Fitness App",
    //   description: "A fitness tracking app with workout plans, progress tracking, and social features.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["React Native", "Firebase", "Redux"],
    //   github: "#",
    //   demo: "#",
    //   category: "mobile",
    // },
    // {
    //   id: 8,
    //   title: "Recipe Finder",
    //   description: "An app that helps users find recipes based on ingredients they have at home.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["Vue.js", "Node.js", "MongoDB"],
    //   github: "#",
    //   demo: "#",
    //   category: "web",
    // },
    // {
    //   id: 9,
    //   title: "AI Image Generator",
    //   description: "A tool that uses AI to generate images based on text descriptions.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["Python", "TensorFlow", "React"],
    //   github: "#",
    //   demo: "#",
    //   category: "ai",
    // },
    // {
    //   id: 10,
    //   title: "Cryptocurrency Dashboard",
    //   description: "A dashboard for tracking cryptocurrency prices, portfolio, and market trends.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["React", "Chart.js", "API"],
    //   github: "#",
    //   demo: "#",
    //   category: "web",
    // },
    // {
    //   id: 11,
    //   title: "Smart Home Controller",
    //   description: "An IoT application for controlling smart home devices from a central dashboard.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["React", "Node.js", "IoT", "MQTT"],
    //   github: "#",
    //   demo: "#",
    //   category: "iot",
    // },
    // {
    //   id: 12,
    //   title: "Language Learning App",
    //   description: "A mobile app for learning new languages with flashcards, quizzes, and progress tracking.",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   tags: ["Flutter", "Firebase", "ML Kit"],
    //   github: "#",
    //   demo: "#",
    //   category: "mobile",
    // },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    // { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI & ML" },
    { id: "c", name: "C++" },
    // { id: "iot", name: "IoT" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="group mb-4">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse through all the projects I've worked on throughout my journey as a developer.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={
                activeFilter === category.id
                  ? "bg-primary hover:bg-primary/90"
                  : "border-primary/50 text-primary hover:bg-primary/10"
              }
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-primary/10 hover:border-primary/30">
                <ProjectCarousel images={project.images} title={project.title} autoplaySpeed={1500} />

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
