"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Social Links Line */}
      <div className="absolute left-10 top-0 bottom-0 hidden md:flex flex-col items-center">
        <div className="w-px h-48 bg-gradient-to-b from-transparent to-primary"></div>
        <div className="flex flex-col gap-6 my-6">
          <motion.a
            href="https://github.com/kshitijgupta0707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kshitijgupta0707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          

          <motion.a
            href="mailto:kshitijgupta070704@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-primary to-transparent"></div>
      </div>

      <div className="text-center max-w-3xl px-4 lg:ml-32" >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-block">
            <motion.span
              className="text-primary font-medium px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Full Stack Developer
            </motion.span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block mb-2">Hi, I'm Kshitij Gupta</span>
            <span className="text-primary">Fullstack Developer</span>
          </h1>

          {/* <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            I build exceptional digital experiences that combine stunning design with cutting-edge technology.
            Specializing in creating elegant solutions to complex problems.
          </p> */}
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            {/* I build exceptional digital experiences that combine stunning design with cutting-edge technology.
            Specializing in creating elegant solutions to complex problems. */}
            I'm a Pre-Final Year Computer Science & Engineering Student at JIIT,
            Noida. Primarily Interested in Web Development and Problem Solving.
          </p>

          
          <div className="flex justify-center relative">
            <Link href="https://drive.google.com/file/d/1mF7bRHqMVFus7cElE8j2BoICq_sVTQWe/view?usp=sharing" target="_blank" className="relative inline-block">
              <div className="gradient-border">
                <button className="relative z-10 px-8 py-3 bg-background text-foreground font-medium rounded-md hover:bg-primary">
                  View Resume 
                </button>
              </div>
            </Link>
          <div className=" hidden lg:block w-0.5 h-20 bg-gradient-to-b from-primary to-transparent absolute left-[50%] -translate-x-1/2 top-14 "></div>

          </div>
        </motion.div>

        {/* Mobile Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-12 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex gap-3 relative">
          <a
            href="https://github.com/kshitijgupta0707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kshitijgupta0707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:kshitijgupta070704@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
          >
            <Mail className="w-5 h-5" />
          </a>

          <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-transparent absolute left-[50%] -translate-x-1/2 top-8 "></div>
          </div>
          
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex flex-col items-center lg:ml-8">
          {/* <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent"></div> */}
        </div>
      </motion.div>
    </div>
  )
}
