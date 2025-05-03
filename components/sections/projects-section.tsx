// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import ProjectCarousel from "@/components/project-carousel"
// import Link from "next/link"

// interface Project {
//   id: number
//   title: string
//   description: string
//   images: string[]
//   tags: string[]
//   github: string
//   demo: string
//   featured: boolean
//   color: string
// }

// export default function ProjectsSection() {
//   const [activeFilter, setActiveFilter] = useState("all")

//   // const navigate = useNavigate();

//   const projects: Project[] = [
//     {
//       id: 1,
//       title: "PralaySetu:Bridging Crisis To Safety",
//       description:
//         `PralaySetu is a MERN stack-based disaster management platform with ML integration, 
//         real-time alerts, and multi-role access.
//          It enables AI-based disaster prediction, live help requests with map navigation, multilingual support,
//           and system-level push notifications for efficient crisis response.`,
//       images: [
//         "/pralay1.png",
//         "/pralay2.png",
//         "/pralay3.png",
//         "/pralay4.png",
//         "/pralay5.png",
//       ],
//       tags: ["MERN stack", "Socket.io", "Docker", "Stripe", "GoogleMap", "Firebase cloud messaging"],
//       github: "https://github.com/kshitijgupta0707/Pralaysetu",
//       demo: "https://pralaysetu.vercel.app/",
//       featured: true,
//       color: "from-blue-500 to-cyan-400",
//     },
//     {
//       id: 2,
//       title: "BaatCheet",
//       description: `BaatCheet is a feature-rich chat app offering 
//       real-time updates, personalized profiles , audio calls and intelligent features.
//        Manage friendships, receive instant notifications, and chat with an AI-powered bot. 
//        Log in securely via email or Google, and enjoy real-time communication through Socket.IO.
//      `,
//       images: [
//         "/chat1.png",
//         "/chat2.png",
//         "/chat3.png",
//         "/chat4.png",
//         "/chat5.png",
//       ],
//       tags: ["MERN stack", "WebRTC", "Socket.io", "Tailwind CSS", "Gemini AI"],
//       github: "https://github.com/kshitijgupta0707/WeChat",
//       demo: "https://textify-8adi.onrender.com/",
//       featured: true,
//       color: "from-orange-500 to-amber-400",

//     },
//     {
//       id: 3,
//       title: "OneBookMarker",
//       description: `The OneBookMarker is a Extension that
//        uses machine learning to automatically categorize bookmarks based on their content. 
//        Users can then modify these categories, create subcategories, and organize bookmarks 
//        in a multi-level hierarchy. 
//        With multi-category support, 
//       it allows for flexible, personalized bookmark management.`,
//       images: [
//         "/bookmark1.png",
//         "/bookmark2.png",
//         "/bookmark3.png",
//       ],
//       tags: ["Chrome Extension API", "Flask", "MERN stack", "Tailwind CSS"],
//       github: "https://github.com/kshitijgupta0707/BookmarkExtension.git",
//       demo: "#",
//       featured: true,
//       color: "from-purple-500 to-violet-400",

//     }
//     // ,
//     // {
//     //   id: 4,
//     //   title: "Weather Dashboard",
//     //   description: "A weather dashboard that displays current and forecasted weather data for any location.",
//     //   images: [
//     //     "/placeholder.svg?height=600&width=800",
//     //     "/placeholder.svg?height=600&width=800",
//     //     "/placeholder.svg?height=600&width=800",
//     //   ],
//     //   tags: ["JavaScript", "API", "CSS"],
//     //   github: "#",
//     //   demo: "#",
//     //   featured: false,
//     // },
//     // {
//     //   id: 5,
//     //   title: "Blog Platform",
//     //   description: "A full-featured blog platform with markdown support and user authentication.",
//     //   images: [
//     //     "/placeholder.svg?height=600&width=800",
//     //     "/placeholder.svg?height=600&width=800",
//     //     "/placeholder.svg?height=600&width=800",
//     //   ],
//     //   tags: ["Next.js", "Prisma", "PostgreSQL"],
//     //   github: "#",
//     //   demo: "#",
//     //   featured: false,
//     // },
//     // {
//     //   id: 6,
//     //   title: "Chat Application",
//     //   description: "A real-time chat application with private messaging and group chat functionality.",
//     //   images: [
//     //     "/placeholder.svg?height=600&width=800",
//     //     "/placeholder.svg?height=600&width=800",
//     //     "/placeholder.svg?height=600&width=800",
//     //   ],
//     //   tags: ["React", "Socket.io", "Express"],
//     //   github: "#",
//     //   demo: "#",
//     //   featured: false,
//     // },
//   ]

//   const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.featured)

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 3 },
//     },
//   }

//   return (
//     <div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="text-center mb-16"
//       >
//         <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
//           MY <span className="text-primary">PROJECTS</span>
//         </motion.h2>
//         <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto mb-8" />
//         <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto mb-8">
//           Here are some of my recent projects. Each project is a unique piece of development, designed and coded by me
//           to solve real-world problems.
//         </motion.p>

//         {/* <motion.div variants={fadeInUp} className="flex justify-center gap-4 mb-12">
//           <Button
//             variant={activeFilter === "all" ? "default" : "outline"}
//             className={
//               activeFilter === "all"
//                 ? "bg-primary hover:bg-primary/90"
//                 : "border-primary/50 text-primary hover:bg-primary/10"
//             }
//             onClick={() => setActiveFilter("all")}
//           >
//             All Projects
//           </Button>
//           <Button
//             variant={activeFilter === "featured" ? "default" : "outline"}
//             className={
//               activeFilter === "featured"
//                 ? "bg-primary hover:bg-primary/90"
//                 : "border-primary/50 text-primary hover:bg-primary/10"
//             }
//             onClick={() => setActiveFilter("featured")}

//           >
//             Featured
//           </Button>
//         </motion.div> */}
//       </motion.div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//         {filteredProjects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="group"
//           >
//             <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-primary/10 hover:border-primary/30 relative ">
//               <ProjectCarousel images={project.images} title={project.title} autoplaySpeed={3000} />

//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
//                 <p className="text-muted-foreground mb-4 relative">{project.description}

//                    {/* Animated background */}
//               <div className="absolute inset-0 opacity-10 blur-2xl overflow-hidden ]">
//                 <div
//                   className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-full animate-spin-slow`}
//                   style={{
//                     transformOrigin: "center center",
//                     animation: `spin 10s linear infinite`,
//                   }}
//                 >

//                 </div>
//               </div>
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <Badge key={i} className="bg-primary/20 text-primary hover:bg-primary/30">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//                 <div className="flex gap-4 z-50">
//                   <Link href={project.github} target="_blank" rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary transition-colors flex items-center">
//                     <Github className="w-5 h-5 mr-1" />
//                     Code
//                   </Link>
//                   {/* {
//                     <div>
//                       {console.log(project.demo)}
//                       {console.log(project.github)}
//                     </div>
//   } */}
//                   <Link
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary transition-colors flex items-center"
//                     onClick={() => {
//                       console.log("demo clicked");
//                     }}
//                   >
//                     <ExternalLink className="w-5 h-5 mr-1" />
//                     Demo
//                   </Link>

//                 </div>
//               </div>
             
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="text-center mt-12">
//         <Link href="/projects">
//           <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 group">
//             View All Projects
//             <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//           </Button>
//         </Link>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
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
  color: string
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isInView, setIsInView] = useState(false)
  const controls = useAnimation()

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
      tags: ["MERN stack", "Socket.io", "Docker", "Stripe", "GoogleMap", "Firebase cloud messaging"],
      github: "https://github.com/kshitijgupta0707/Pralaysetu",
      demo: "https://pralaysetu.vercel.app/",
      featured: true,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Zolo",
      description: `Zolo is a feature-rich chat app offering 
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
      tags: ["MERN stack", "WebRTC", "Socket.io", "Tailwind CSS", "Gemini AI"],
      github: "https://github.com/kshitijgupta0707/WeChat",
      demo: "https://textify-8adi.onrender.com/",
      featured: true,
      color: "from-orange-500 to-amber-400",
    },
    {
      id: 3,
      title: "Quotient",
      description: `The Quotient is a Extension that
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
      tags: ["Chrome Extension API", "Flask", "MERN stack", "Tailwind CSS"],
      github: "https://github.com/kshitijgupta0707/BookmarkExtension.git",
      demo: "#",
      featured: true,
      color: "from-purple-500 to-violet-400",
    }
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.featured)

  // Smoother animation variants with easeInOut and longer durations
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut"
      },
    },
  }
  
  const headerAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut" 
      },
    },
  }
  
  const underlineAnimation = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut", 
        delay: 0.3 
      }
    }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced stagger time for smoother appearance
        delayChildren: 0.2,
        ease: "easeInOut",
        duration: 0.8
      }
    }
  }
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.9,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { 
        duration: 0.6, 
        ease: "easeInOut" 
      }
    }
  }
  
  const tagAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
  
  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.97,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    }
  }

  // Smooth filter transition
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.3 }}
        className="text-center mb-16"
        onViewportEnter={() => setIsInView(true)}
      >
        <motion.h2 
          variants={headerAnimation} 
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          MY <span className="text-primary relative inline-block">
            PROJECTS
            {/* <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              variants={underlineAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            /> */}
          </span>
        </motion.h2>
        
        <motion.div 
          variants={fadeInUp} 
          className="w-20 h-1 bg-primary mx-auto mb-8" 
        />
        
        <motion.p 
          variants={fadeInUp} 
          className="text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Here are some of my recent projects. Each project is a unique piece of development, designed and coded by me
          to solve real-world problems.
        </motion.p>

        <motion.div 
          variants={fadeInUp} 
          className="flex justify-center gap-4 mb-12"
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonAnimation}
          >
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              className={
                activeFilter === "all"
                  ? "bg-primary hover:bg-primary/90 transition-all duration-500"
                  : "border-primary/50 text-primary hover:bg-primary/10 transition-all duration-500"
              }
              onClick={() => handleFilterChange("all")}
            >
              All Projects
            </Button>
          </motion.div>
          
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonAnimation}
          >
            <Button
              variant={activeFilter === "featured" ? "default" : "outline"}
              className={
                activeFilter === "featured"
                  ? "bg-primary hover:bg-primary/90 transition-all duration-500"
                  : "border-primary/50 text-primary hover:bg-primary/10 transition-all duration-500"
              }
              onClick={() => handleFilterChange("featured")}
            >
              Featured
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-700 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 relative">
                <div className="overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    <ProjectCarousel images={project.images} title={project.title} autoplaySpeed={3000} />
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.2 + index * 0.1,
                      duration: 0.9,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-500"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      delay: 0.3 + index * 0.1,
                      duration: 1.1,
                      ease: "easeInOut"
                    }}
                    viewport={{ once: true }}
                    className="text-muted-foreground mb-4 relative"
                  >
                    {project.description}

                    {/* Smoother animated background */}
                    <motion.div 
                      className="absolute inset-0 opacity-10 blur-2xl overflow-hidden"
                      animate={{ 
                        rotate: [0, -360],
                      }}
                      transition={{ 
                        duration: 30, 
                        repeat: Infinity,
                        ease: "linear" 
                      }}
                    >
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-full`}
                      />
                    </motion.div>
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={i}
                        variants={tagAnimation}
                        custom={i}
                        whileHover={{ 
                          scale: 1.05, 
                          transition: { duration: 0.4, ease: "easeInOut" }
                        }}
                      >
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-500">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="flex gap-4 z-50"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={fadeInUp}>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-500 flex items-center group"
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 0, 10, 0] }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                         
                        >
                          <Github className="w-5 h-5 mr-1 transition-transform duration-500" />
                        </motion.div>
                        <span className="relative overflow-hidden">
                          Code
                          <motion.span 
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ 
                              scaleX: 1,
                              transition: { duration: 0.6, ease: "easeInOut" }
                            }}
                          />
                        </span>
                      </Link>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-500 flex items-center group"
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 0, 10, 0] }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                          <ExternalLink className="w-5 h-5 mr-1 transition-transform duration-500" />
                        </motion.div>
                        <span className="relative overflow-hidden">
                          Demo
                          <motion.span 
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ 
                              scaleX: 1,
                              transition: { duration: 0.6, ease: "easeInOut" }
                            }}
                          />
                        </span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 0.7, 
          duration: 1, 
          ease: "easeOut" 
        }}
      >
        <Link href="/projects">
          
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 group transition-all duration-500"
            >
              View All Projects
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ 
                  x: [0, 4, 0], 
                  y: [0, -4, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
              >
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </motion.div>
            </Button>
          
        </Link>
      </motion.div>
    </div>
  )
}