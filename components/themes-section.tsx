"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Globe, Leaf, Heart, Cpu } from "lucide-react"

export default function ThemesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const themes = [
    {
      title: "AI/ML",
      icon: <Brain className="h-10 w-10" />,
      color: "from-purple-500 to-purple-700",
      description: "Build intelligent systems and machine learning models",
    },
    {
      title: "Web/App Dev",
      icon: <Globe className="h-10 w-10" />,
      color: "from-cyan-500 to-cyan-700",
      description: "Create responsive web and mobile applications",
    },
    {
      title: "Sustainability",
      icon: <Leaf className="h-10 w-10" />,
      color: "from-green-500 to-green-700",
      description: "Develop solutions for environmental challenges",
    },
    {
      title: "Social Impact",
      icon: <Heart className="h-10 w-10" />,
      color: "from-pink-500 to-pink-700",
      description: "Build technology that makes a difference in society",
    },
    {
      title: "Automation",
      icon: <Cpu className="h-10 w-10" />,
      color: "from-blue-500 to-blue-700",
      description: "Create systems that automate repetitive tasks",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="themes" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 to-transparent opacity-20"></div>

      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient"
        >
          Themes
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-8"
        >
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="flex flex-col items-center max-w-[200px]"
            >
              <motion.div
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
                className={`w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${theme.color} shadow-lg mb-3 text-white relative overflow-hidden group`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{
                    opacity: 0.2,
                    scale: 1,
                    transition: { duration: 0.5 },
                  }}
                  className="absolute inset-0 bg-white rounded-2xl"
                ></motion.div>
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
                  {theme.icon}
                </motion.div>
              </motion.div>
              <span className="text-white font-medium text-center mb-2">{theme.title}</span>
              <p className="text-gray-400 text-sm text-center">{theme.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
