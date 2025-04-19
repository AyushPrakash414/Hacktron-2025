"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 to-transparent opacity-20"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient"
        >
          About Hacktron
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Hacktron is an exclusive 12-hour offline hackathon hosted at JUET Campus on Sunday, 27th April, designed to
          spark innovation, creativity, and team spirit among our talented student community.
        </motion.p>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 p-3 bg-purple-500/20 rounded-full">
                <Code className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Code</h3>
              <p className="text-gray-300 text-center">
                Build innovative solutions to real-world problems using your coding skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 p-3 bg-cyan-500/20 rounded-full">
                <Lightbulb className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovate</h3>
              <p className="text-gray-300 text-center">
                Think outside the box and create solutions that make a difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 p-3 bg-purple-500/20 rounded-full">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Collaborate</h3>
              <p className="text-gray-300 text-center">
                Work with like-minded peers to build something amazing together.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
