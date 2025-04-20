"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Database, Layout, Server, GitBranch, Smartphone, PenTool } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillCategory {
  title: string
  icon: React.ElementType
  description: string
  skills: string[]
  color: string
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Layout,
      description: "Building responsive and interactive user interfaces",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend",
      icon: Server,
      description: "Developing robust server-side applications",
      skills: ["Node.js", "Express", "Python",  "REST API", "WebSockets" ],
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Database",
      icon: Database,
      description: "Managing and optimizing data storage solutions",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "SQL"],
      color: "from-orange-500 to-amber-400",
    },
    {
      title: "DevOps",
      icon: GitBranch,
      description: "Streamlining development and deployment processes",
      skills: ["Git", "GitHub", "Docker","Render", "Vercel", "Netlify", "Linux"],
      color: "from-purple-500 to-violet-400",
    },
    {
      title: "Languages",
      icon: Smartphone,
      description: "I have idea about these languages",
      skills: [
         "C++", "C" , "Python", "JavaScript"
        // "Rust", "Dart"
      ],
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "UI/UX Design",
      icon: PenTool,
      description: "Designing intuitive and beautiful user experiences",
      skills: ["Figma", "Adobe XD", 
        // Wireframing", "Prototyping", 
        // "User Research", "Accessibility", "Color Theory"
      ],
      color: "from-teal-500 to-cyan-400",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
          MY <span className="text-primary">SKILLS</span>
        </motion.h2>
        <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto mb-8" />
        <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
          I've worked with a variety of technologies in the web development world. Here's an overview of my technical
          skills across different categories.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="border border-border h-full overflow-hidden relative">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-10 blur-xl overflow-hidden">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-full animate-spin-slow`}
                    style={{
                      transformOrigin: "center center",
                      animation: `spin ${10 + index * 2}s linear infinite`,
                    }}
                  >
                    
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
