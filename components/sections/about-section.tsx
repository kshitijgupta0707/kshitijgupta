"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
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
          ABOUT <span className="text-primary">ME</span>
        </motion.h2>
        <motion.div variants={fadeInUp} className="w-20 h-1 bg-cyan-400 mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-2xl blur-xl opacity-20 -z-10 transform rotate-3"></div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl shadow-xl">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="/kshitij2.jpeg"
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4  tracking-wide">
            I'm a <span className="text-primary">Full Stack Developer</span> interested in problem solving & creating beautiful and
            functional websites.
          </h3>
            <p className="text-muted-foreground  mb-8">
            I am currently pursuing Bachelor's degree in Computer Science
             and Engineering at JIIT, Noida (2022–2026), with a CGPA of 8.5.
            </p>

          <p className="text-muted-foreground  mb-6">
          I'm passionate about building innovative solutions and constantly evolving my 
          skills in software development, data structures and algorithms. With hands-on experience in the MERN stack and a variety of technologies, 
          I aim to create impactful applications that solve real-world problems.
          </p>
       

      

          <div className="grid grid-cols-2 gap-4 mb-8">
           
            <div>
              <h4 className="font-semibold mb-2 text-primary">Location:</h4>
              <p className="text-muted-foreground ">Gurgaon, Harayana</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Availability:</h4>
              <p className="text-muted-foreground ">Full-time</p>
            </div>
          </div>

          <a href="/kshitijresume.pdf" download>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button> 
          </a>

        </motion.div>
      </div>
    </div>
  )
}
