"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Clock, FileCode, Send, Scale, ShieldAlert } from "lucide-react"

export default function GuidelinesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const guidelines = [
    {
      title: "Eligibility",
      icon: <Users className="h-6 w-6 text-purple-400" />,
      points: ["Open to all JUET students", "Valid college ID required", "All years and departments welcome"],
      color: "purple",
    },
    {
      title: "Team Formation",
      icon: <Users className="h-6 w-6 text-cyan-400" />,
      points: [
        "Teams of 2-4 members",
        "Cross-department collaboration encouraged",
        "Solo participants allowed but not recommended",
      ],
      color: "cyan",
    },
    {
      title: "Format",
      icon: <Clock className="h-6 w-6 text-purple-400" />,
      points: ["12-hour continuous hackathon", "On-campus event only", "Mentors available for guidance"],
      color: "purple",
    },
    {
      title: "Problem Statements",
      icon: <FileCode className="h-6 w-6 text-cyan-400" />,
      points: ["Choose from provided themes", "Create innovative solutions", "Real-world application focus"],
      color: "cyan",
    },
    {
      title: "Submission Process",
      icon: <Send className="h-6 w-6 text-purple-400" />,
      points: ["Submit via Devfolio", "Include source code and presentation", "Demo video required"],
      color: "purple",
    },
    {
      title: "Judging Criteria",
      icon: <Scale className="h-6 w-6 text-cyan-400" />,
      points: ["Innovation and creativity", "Technical complexity", "Practical implementation", "Presentation quality"],
      color: "cyan",
    },
    {
      title: "Rules",
      icon: <ShieldAlert className="h-6 w-6 text-purple-400" />,
      points: [
        "Code must be written during the event",
        "Use of open-source libraries allowed",
        "Plagiarism will lead to disqualification",
        "Judges' decision is final",
      ],
      color: "purple",
    },
  ]

  return (
    <section id="guidelines" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 to-transparent opacity-20"></div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient"
        >
          Guidelines & Eligibility
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {guidelines.map((guideline, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                boxShadow:
                  guideline.color === "purple"
                    ? "0 10px 25px -5px rgba(139, 92, 246, 0.2)"
                    : "0 10px 25px -5px rgba(34, 211, 238, 0.2)",
              }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className={`mr-3 p-2 bg-gray-800 rounded-lg`}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor:
                      guideline.color === "purple" ? "rgba(139, 92, 246, 0.2)" : "rgba(34, 211, 238, 0.2)",
                  }}
                >
                  {guideline.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{guideline.title}</h3>
              </div>

              <ul className="space-y-2">
                {guideline.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <span className={`text-${guideline.color}-400 mr-2`}>•</span>
                    <span className="text-gray-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
