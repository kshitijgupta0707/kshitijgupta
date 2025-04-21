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
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0  group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="absolute inset-0 opacity-10  blur-2xl overflow-hidden  ">
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

// "use client"

// import { useRef, useEffect } from "react"
// import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
// import { Database, Layout, Server, GitBranch, Smartphone, PenTool } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// // Tech icons SVG components (simplified)
// const TechIcons = {
//   React: () => (
//     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//       <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394c-.36-.667-.709-1.375-1.036-2.11.332-.74.687-1.453 1.053-2.128.377-.686.786-1.35 1.222-1.984a19.406 19.406 0 00-.156-.3c-1.772-3.115-2.103-5.605-.98-7.015.955-1.198 3.114-1.531 6.106-.895.365.077.735.165 1.108.262.206-.311.425-.612.654-.9C15.649.804 17.325 0 18.5 0c1.175 0 2.268.546 2.902 1.536.636.995.775 2.335.392 3.862-.132.525-.312 1.07-.532 1.628.217.157.428.319.633.484 1.963 1.58 3.106 3.1 3.106 4.49 0 1.386-1.164 2.927-3.106 4.495-.22.177-.444.35-.675.515.214.544.39 1.075.519 1.587.383 1.531.244 2.87-.391 3.865-.636.994-1.728 1.54-2.902 1.54-1.154 0-2.462-.55-3.767-1.583-.216-.172-.43-.354-.642-.544-.364.1-.731.189-1.094.267-2.95.628-5.099.295-6.104-.891-1.008-1.186-.826-3.295.434-5.858.111-.227.237-.456.37-.687a24.714 24.714 0 01-1.227-1.993zm1.433-.702a33.3 33.3 0 001.013 1.442c.317-.312.648-.619.991-.916a33.112 33.112 0 00-.986-1.836 33.192 33.192 0 00-1.018 1.31zm5.79-5.626a35.24 35.24 0 00-1.379 1.71c.464.493.921 1.009 1.367 1.536.447.527.879 1.057 1.29 1.585.252-.478.486-.964.698-1.454a21.547 21.547 0 00-.659-2.263 22.62 22.62 0 00-1.317-1.114zm-1.76.31c-.28.365-.553.744-.816 1.136.26-.01.522-.018.787-.018.27 0 .538.006.803.018a17.76 17.76 0 00-.774-1.136zm4.768 1.046c.275.414.54.837.791 1.266.257-.598.488-1.2.684-1.8a19.889 19.889 0 00-1.475-.01c.034.186 0 .365 0 .544zm.342 3.428a31.068 31.068 0 01-.797 1.274 34.908 34.908 0 011.441.057c-.17-.557-.381-1.133-.644-1.72v.389zm-5.096 5.465c.263.377.542.747.83 1.108.28-.41.561-.834.836-1.27a12.233 12.233 0 01-.836-.091 12.223 12.223 0 01-.83.253z" />
//     </svg>
//   ),
//   Nextjs: () => (
//     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//       <path d="M11.572 0c-.176 0-.31.001-.358.007-.218.025-.388.078-.581.177-.395.222-.662.614-.776 1.12-.022.097-.029.176-.029.574v10.174h4.334V1.878c0-.398-.008-.489-.03-.586-.112-.51-.373-.89-.776-1.115-.19-.1-.368-.156-.562-.177L12.285.007A9.342 9.342 0 0 0 11.572 0ZM3.58 3.91A5.39 5.39 0 0 0 3.2 3.964c-.058.012-.283.06-.398.108a2.347 2.347 0 0 0-.776.429c-.33.283-.515.63-.617 1.155-.02.097-.085.76-.085.76v11.647h4.334V9.859l.177-.087c.525-.249 1.052-.372 1.656-.372.578 0 1.116.125 1.567.33l.16.076v-3.38c0-.398-.008-.488-.022-.575-.109-.502-.369-.887-.775-1.111a1.978 1.978 0 0 0-.58-.177 7.342 7.342 0 0 0-.33-.006A5.54 5.54 0 0 0 3.58 3.91Zm10.595 4.577A4.156 4.156 0 0 0 13.575 8a3.91 3.91 0 0 0-.8.087c-.219.05-.346.088-.565.175-.313.14-.675.396-.93.688a3.137 3.137 0 0 0-.592 1.236c-.054.284-.08.556-.08.79 0 .229.026.509.08.794.17.853.585 1.5 1.25 1.956.483.327 1.009.52 1.66.52.767 0 1.513-.241 2.13-.695l.115-.074v.617c0 .33.01.448.033.597.093.595.351 1.09.74 1.407.39.317.883.477 1.564.477.22 0 .445-.017.66-.05a3.197 3.197 0 0 0 .538-.155 2.04 2.04 0 0 0 .833-.667c.304-.385.464-.872.464-1.465v-5.773l-.002-.078a3.147 3.147 0 0 0-.15-.811 2.766 2.766 0 0 0-.34-.642 3.19 3.19 0 0 0-.887-.88c-.351-.23-.73-.381-1.136-.448a5.606 5.606 0 0 0-.643-.05c-.182 0-.364.008-.546.025Z" />
//     </svg>
//   ),
//   TypeScript: () => (
//     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//       <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.2.097 1.725.29.525.198.997.478 1.417.843.42.358.738.781.959 1.26.22.479.33 1.023.33 1.635 0 .562-.074 1.073-.22 1.527-.147.456-.336.868-.563 1.236a3.817 3.817 0 01-.79.915 7.784 7.784 0 01-.905.64c-.32.183-.64.339-.963.465a7.93 7.93 0 01-.969.321 8.69 8.69 0 01-.89.178c-.32.034-.571.05-.754.05-.48 0-.928-.04-1.339-.118a7.299 7.299 0 01-1.21-.349 6.84 6.84 0 01-1.098-.558 6.38 6.38 0 01-.961-.749l.958-1.524a5.482 5.482 0 001.687 1.085c.648.263 1.346.395 2.093.395.485 0 .912-.062 1.279-.186.368-.119.677-.289.926-.51.245-.221.432-.483.557-.788.13-.305.193-.64.193-1.005 0-.307-.05-.586-.152-.831a1.65 1.65 0 00-.483-.677 2.783 2.783 0 00-.896-.508 4.333 4.333 0 00-1.398-.209c-.225 0-.426.011-.604.033a3.981 3.981 0 00-.485.084v-1.5c.21.023.433.034.67.034.57 0 1.045-.069 1.425-.209.384-.139.691-.334.927-.589.236-.25.407-.562.51-.932.102-.37.152-.777.152-1.219 0-.258-.035-.501-.103-.73a1.635 1.635 0 00-.33-.632 1.72 1.72 0 00-.608-.456 2.206 2.206 0 00-.946-.17 2.98 2.98 0 00-1.276.28 5.524 5.524 0 00-1.178.764c-.354.313-.663.688-.926 1.124-.262.433-.47.901-.626 1.402l-1.663-.96c.165-.44.393-.864.686-1.275.29-.411.635-.773 1.024-1.084a5.326 5.326 0 011.345-.754C18.79 3.64 19.392 3.5 20.06 3.5c.706 0 1.341.104 1.905.314.566.208 1.051.5 1.458.876.407.377.724.829.942 1.353.217.525.33 1.1.33 1.727 0 .397-.063.751-.191 1.062a2.881 2.881 0 01-.496.807c-.198.233-.422.437-.668.61a3.77 3.77 0 01-.77.415c.553.179 1.033.396 1.44.65.407.254.75.563 1.026.926.275.361.482.776.621 1.241.14.467.209.983.209 1.55 0 .684-.093 1.317-.279 1.899a3.84 3.84 0 01-.887 1.507c-.425.432-.978.774-1.664 1.028-.681.253-1.523.381-2.526.381-.448 0-.891-.04-1.331-.118a7.2 7.2 0 01-1.29-.365 6.607 6.607 0 01-1.177-.631 4.932 4.932 0 01-.994-.896l1.051-1.393c.248.312.501.574.76.79.26.217.54.396.837.54.298.139.625.243.983.313.357.07.757.105 1.197.105.508 0 .962-.058 1.362-.174.4-.116.737-.274 1.011-.476.275-.201.482-.436.621-.703.14-.267.209-.552.209-.854a1.872 1.872 0 00-.633-1.408c-.421-.384-1.139-.581-2.152-.59H17.5v-1.5h1.363c.712 0 1.219-.13 1.519-.392.301-.26.453-.666.453-1.22 0-.43-.112-.779-.336-1.048-.223-.27-.638-.404-1.244-.404-.377 0-.695.066-.958.199-.262.133-.496.297-.7.491a3.33 3.33 0 00-.51.662 8.54 8.54 0 00-.39.721l-1.658-.674c.135-.345.292-.674.472-.989.181-.314.39-.601.626-.862a2.83 2.83 0 01.863-.631c.347-.159.761-.239 1.244-.239zM8.639 9.992v1.5h2.25v8.996h1.5v-8.996h2.25v-1.5z" />
//     </svg>
//   ),
//   JavaScript: () => (
//     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//       <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
//     </svg>
//   ),
//   NodeJS: () => (
//     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//       <path d="M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0 0 12 12c6.633 0 12-5.367 12-12-.001-6.633-5.412-12-12.002-12zM6.37 14.575c.392.523.392 1.35 0 1.872-.523.392-1.35.392-1.872 0-.523-.393-.392-1.35 0-1.873.522-.522 1.48-.522 1.872 0zm11.06-.348c-.131.392-.392.654-.654.785-.261.131-.654.262-1.045.262-.392 0-.785-.131-1.046-.262-.261-.131-.523-.393-.654-.785-.131-.261-.131-.654-.131-1.045 0-.392 0-.785.131-1.046.131-.261.393-.523.654-.785.262-.13.654-.261 1.046-.261.392 0 .784.13 1.045.261.262.131.523.393.654.785.131.261.131.654.131 1.046.131.391.131.784 0 1.045z" />
//     </svg>
//   ),
//   MongoDB: () => (
//     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//       <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-2.946.032-.102.064-.204.098-.307.982.039 2.013.067 3.092.067.84 0 1.654-.01 2.394-.032 0 0 .006-.003.006-.003.962-.055 1.8-.125 2.446-.218l.3.009c.391-1.203.602-2.43.584-3.767-.4.098-.907 1.203-2.628 1.787-.91.316-2.102.492-3.376.511-.379.003-.757.008-1.138.008-3.596 0-7.438-.411-8.604-.493-1.14-.083-2.544-.463-2.618-1.968-.048-1.813.477-2.2.922-2.345 1.68-.35 8.394.232 9.84.35h.001c.86-.076 1.923-.392 2.107-1.075.076-.277.14-.85-.251-1.254-.59-.594-1.631-.724-2.95-.46-1.302.256-2.18.752-2.647 1.203-.52.495-.937 1.18-.779 2.142.076.454.303.763.617 1.045.682.611 1.804.927 3.003.991V17.5c0 .567-.115 1.045-.3 1.444v.005c-.314.637-.824 1.082-1.432 1.357-.431.198-.876.324-1.279.406-.41.082-.796.125-1.124.127-.055-.004-.109-.009-.165-.014-.648-.076-1.236-.261-1.683-.628-.54-.442-.802-.96-.802-1.76v-.042l.015-.3c.026-.487.13-.984.376-1.484.258-.529.59-.94.976-1.264l.018-.017c.136-.105.277-.21.425-.313.206-.143.431-.29.685-.457l.14-.107c.224-.17.459-.35.708-.545.156-.118.293-.3.416-.49l.023-.04c.061-.11.116-.222.164-.336.05-.115.09-.234.122-.353.127-.471.075-.937-.145-1.251l-.21-.012c-.197.04-.4.095-.61.163-.272.09-.526.195-.77.311-.176.081-.339.171-.5.27-.142.086-.292.177-.429.27l-.154.086c-.12.067-.218.132-.31.202-.215.138-.407.29-.583.457-.35.33-.521.629-.521.916L4.29 11.88c-.096-.576.043-1.173.383-1.616.255-.337.657-.644 1.166-.769.64-.169 1.45-.165 2.213.141l.01.003c.463.188.9.513 1.203.895.146.18.271.417.372.71.103.298.16.65.16 1.03v.035c0 .396-.059.855-.226 1.334-.15.437-.392.872-.713 1.175l-.01.009h.002c-.132.123-.266.238-.404.35l-.344.285c-.204.161-.405.323-.52.485a.381.381 0 0 0-.07.29c0 .071.023.14.065.186.156.168.463.211.88.214.556.003 1.184-.121 1.634-.257a4.77 4.77 0 0 0 1.345-.674c.358-.255.632-.579.802-.944.16-.355.254-.737.254-1.125v-.021c0-.359-.063-.736-.189-1.103a3.34 3.34 0 0 0-.62-1.05 3.735 3.735 0 0 0-1.038-.88 5.138 5.138 0 0 0-1.336-.544c-.4-.106-.843-.188-1.3-.233l-.116-.017-.04-.005-.026-.003a8.58 8.58 0 0 0-.212-.025l-.115-.012h-.002a1.811 1.811 0 0 1-.246-.043 1.199 1.199 0 0 1-.125-.033.512.512 0 0 1-.073-.03.524.524 0 0 1-.089-.052c-.043-.035-.09-.085-.141-.159-.07-.11-.114-.239-.116-.352V8.66v-.003a.477.477 0 0 1 .069-.244.59.59 0 0 1 .168-.184c.096-.07.226-.117.363-.14.062-.013.124-.019.187-.025a3.073 3.073 0 0 1 .404.01c.311.014.64.069.97.165.289.082.5.188.651.3.156.117.252.253.283.376v.012l.006.012a1.4 1.4 0 0 1 .001.08 1.545 1.545 0 0 1-.015.183l-.002.009-.002.012a1.304 1.304 0 0 1-.045.215l-.002.004a1.384 1.384 0 0 1-.075.21c-.054.124-.127.235-.213.323v.005a3.77 3.77 0 0 1-.403.425l-.024.021-.022.022c-.14.133-.31.29-.498.437-.047.037-.096.071-.147.108l-.027.02-.017.013a4.9 4.9 0 0 0-.183.14l-.032.024c-.095.077-.194.16-.295.255-.204.185-.405.39-.585.61-.245.302-.445.64-.575 1.014l-.01.026c-.05.137-.088.282-.113.427a2.44 2.44 0 0 0-.026.184l-.003.035-.002.03v.002c-.001.014-.002.027-.002.04v.03l.003.03c.004.155.018.313.043.468l.007.049.003.013v.006a3.902 3.902 0 0 0 .203.756l.017.044c.05.127.105.25.165.37.217.435.51.815.86 1.124.332.313.714.577 1.128.765a4.086 4.086 0 0 0 1.316.302c.391.03.8.003 1.188-.083.206-.046.402-.102.588-.167.216-.072.415-.153.595-.242.16-.08.309-.174.445-.267.254-.174.49-.364.7-.57z" />
//     </svg>
//   ),
//   TailwindCSS: () => (
//     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//       <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
//     </svg>
//   ),
// };

// interface SkillCategory {
//   title: string
//   icon: React.ElementType
//   description: string
//   skills: Array<{name: string, icon?: React.ElementType}>
//   color: string
// }

// export default function SkillsSection() {
//   const skillCategories: SkillCategory[] = [
//     {
//       title: "Frontend",
//       icon: Layout,
//       description: "Building responsive and interactive user interfaces",
//       skills: [
//         {name: "HTML5"},
//         {name: "CSS3"},
//         {name: "JavaScript", icon: TechIcons.JavaScript},
//         {name: "TypeScript", icon: TechIcons.TypeScript},
//         {name: "React", icon: TechIcons.React},
//         {name: "Next.js", icon: TechIcons.Nextjs},
//         {name: "Tailwind CSS", icon: TechIcons.TailwindCSS},
//         {name: "Framer Motion"}
//       ],
//       color: "from-blue-500 to-cyan-400",
//     },
//     {
//       title: "Backend",
//       icon: Server,
//       description: "Developing robust server-side applications",
//       skills: [
//         {name: "Node.js", icon: TechIcons.NodeJS},
//         {name: "Express"},
//         {name: "Python"},
//         {name: "REST API"},
//         {name: "WebSockets"}
//       ],
//       color: "from-green-500 to-emerald-400",
//     },
//     {
//       title: "Database",
//       icon: Database,
//       description: "Managing and optimizing data storage solutions",
//       skills: [
//         {name: "MongoDB", icon: TechIcons.MongoDB},
//         {name: "PostgreSQL"},
//         {name: "MySQL"},
//         {name: "Redis"},
//         {name: "Firebase"},
//         {name: "SQL"}
//       ],
//       color: "from-orange-500 to-amber-400",
//     },
//     {
//       title: "DevOps",
//       icon: GitBranch,
//       description: "Streamlining development and deployment processes",
//       skills: [
//         {name: "Git"},
//         {name: "GitHub"},
//         {name: "Docker"},
//         {name: "Render"},
//         {name: "Vercel"},
//         {name: "Netlify"},
//         {name: "Linux"}
//       ],
//       color: "from-purple-500 to-violet-400",
//     },
//     {
//       title: "Languages",
//       icon: Smartphone,
//       description: "I have idea about these languages",
//       skills: [
//         {name: "C++"},
//         {name: "C"},
//         {name: "Python"},
//         {name: "JavaScript", icon: TechIcons.JavaScript}
//       ],
//       color: "from-pink-500 to-rose-400",
//     },
//     {
//       title: "UI/UX Design",
//       icon: PenTool,
//       description: "Designing intuitive and beautiful user experiences",
//       skills: [
//         {name: "Figma"},
//         {name: "Adobe XD"}
//       ],
//       color: "from-teal-500 to-cyan-400",
//     },
//   ]

//   const cursor = useRef(null)
//   const cards = useRef([])

//   // Stylish fade-in animations
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <div className="relative z-0 overflow-hidden">
//       {/* Custom cursor effect */}
//       {/* <div 
//         ref={cursor} 
//         className="hidden md:block fixed w-24 h-24 pointer-events-none z-50 rounded-full bg-primary bg-opacity-20 blur-lg" 
//         style={{ transform: "translate(-50%, -50%)" }}
//       /> */}

//       {/* Background effect */}
//       {/* <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-background to-black opacity-30" />
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-5 blur-3xl rounded-full" />
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary opacity-5 blur-3xl rounded-full" />
//       </div> */}

//       <div className="container mx-auto py-16">
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-3">My Technical Skills</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             As a full-stack developer, I've cultivated expertise across various technologies and methodologies
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0, y: 100 },
//                 visible: {
//                   opacity: 1, 
//                   y: 0,
//                   transition: { duration: 0.6, delay: index * 0.1 }
//                 }
//               }}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.2 }
//               }}
//               ref={(el) => cards.current[index] = el}
//               className="transform perspective-1000"
//             >
//               <Card className="border border-border h-full overflow-hidden group relative">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
//                 <CardHeader className="flex flex-row items-center justify-between pb-2">
//                   <div>
//                     <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
//                     <CardDescription className="mt-1">{category.description}</CardDescription>
//                   </div>
//                   <category.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
//                 </CardHeader>
                
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {category.skills.map((skill) => (
//                       <div 
//                         key={skill.name} 
//                         className="flex items-center px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
//                       >
//                         {skill.icon && <skill.icon />}
//                         <span className={`text-sm ${skill.icon ? 'ml-1.5' : ''}`}>{skill.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }