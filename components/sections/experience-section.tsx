"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

interface Experience {
  id: number
  company: string
  position: string
  period: string
  location: string
  description: string[]
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead a team of 5 developers in building and maintaining the company's flagship SaaS product",
        "Implemented new features that increased user engagement by 35%",
        "Reduced load time by 40% through code optimization and lazy loading techniques",
        "Collaborated with design and product teams to improve UX/UI and implement new features",
      ],
    },
    {
      id: 2,
      company: "WebSolutions Co.",
      position: "Full Stack Developer",
      period: "2018 - 2021",
      location: "Austin, TX",
      description: [
        "Developed and maintained multiple client websites and web applications",
        "Built RESTful APIs and integrated third-party services",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Participated in code reviews and mentored junior developers",
      ],
    },
    {
      id: 3,
      company: "Digital Creations",
      position: "Frontend Developer",
      period: "2016 - 2018",
      location: "Seattle, WA",
      description: [
        "Created responsive and interactive user interfaces using React and Redux",
        "Collaborated with backend developers to integrate frontend with APIs",
        "Optimized website performance and implemented SEO best practices",
        "Participated in agile development processes and sprint planning",
      ],
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
          WORK <span className="text-cyan-400">EXPERIENCE</span>
        </motion.h2>
        <motion.div variants={fadeInUp} className="w-20 h-1 bg-cyan-400 mx-auto mb-8" />
        <motion.p variants={fadeInUp} className="text-gray-300 max-w-2xl mx-auto">
          My professional journey has equipped me with a diverse skill set and valuable experience in various aspects of
          web development.
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:translate-x-px"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 pb-8 md:pb-0">
                  <div
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl max-w-md ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"}`}
                  >
                    <h3 className="text-xl font-bold mb-1 text-cyan-400">{exp.position}</h3>
                    <h4 className="text-lg font-semibold mb-4">{exp.company}</h4>

                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-cyan-400 border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>

                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
